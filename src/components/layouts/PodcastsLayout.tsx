import React, { useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, idPodcastRecieved, getByIdPodcastRecieved, idPodcastLoading } from "../../redux/features/podcastSlice";

import { Header } from '../Header';
import { PodcastCardDetail } from '../shared/PodcastCardDetail';
import { PodcastCardDetailList } from '../shared/PodcastCardDetailList';

import * as SC from './PodcastsLayout.styles';


import { Outlet } from 'react-router-dom';

export const PodcastsLayout = () => {
  let { id } = useParams();

  const userFromContext = useSelector((state) => state.podcast)
  const currentUser = userFromContext.podcastsData[id];
  const idPodcast = currentUser?.id;

  console.log('%c', 'color: #007acc;', idPodcast);

  const idPodcasts = useSelector(getByIdPodcastRecieved);
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const invokeIdPodcastsAPI = async () => {
      dispatch(idPodcastLoading());
      const apiResponse = await axios.get(`http://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id=')}${idPodcast}`);
      dispatch(idPodcastRecieved(apiResponse.data));
    };

    invokeIdPodcastsAPI();
  }, [dispatch]);

  console.log('%c', 'color: #007acc;', idPodcasts);

  return (
    <main>
      <Header />
      <SC.LayoutPodcast>
        <PodcastCardDetail {...currentUser} />
        <PodcastCardDetailList {...idPodcasts} />
      </SC.LayoutPodcast>
      <Outlet />
    </main>
  )
}

