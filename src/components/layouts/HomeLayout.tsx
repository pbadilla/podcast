import React, { useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllPodcasts, getLoading, allPodcastsLoading, allPodcastsRecieved } from "../../redux/features/podcastSlice";

import { Header } from '../Header';
import { PodcastCard } from '../shared/PodcastCard';

import { Outlet } from 'react-router-dom';

import * as SC from './HomeLayout.styles';
import { Search } from '../shared/Search';

export const HomeLayout = () => {
  const podcasts = useSelector(getAllPodcasts);
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const invokeAllPodcastsAPI = async () => {
      dispatch(allPodcastsLoading());
      const apiResponse = await axios.get(`http://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre_1310/json')}`);
      dispatch(allPodcastsRecieved(apiResponse.data));
    };

    invokeAllPodcastsAPI();
  }, [dispatch]);

  return (
    <main>
      <Header />
      <Search />
      <SC.LayoutCards>
        { (apiStatus === "pending" && podcasts)
        ? <p>Cargando datos ...</p>
        : podcasts.map((item, index) => <PodcastCard image={item.image} artist={item.artist} name={item.name} key={item.name} index={index} />)
        }
      </SC.LayoutCards>
      <Outlet />
    </main>
  )
}
