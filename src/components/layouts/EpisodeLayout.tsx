import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getLoading, idPodcastRecieved, getByIdPodcastRecieved, idPodcastLoading } from "../../redux/features/podcastSlice";

import { Header } from '../shared/header/Header';
import { PodcastCardDetail } from '../shared/card/PodcastCardDetail';
import { PodcastEpisode } from '../shared/episodes/PodcastEpisode';

import * as SC from './PodcastsLayout.styles';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export function EpisodeLayout() {
  let { id } = useParams();

  const idFromContext = useSelector((state) => state.podcast)
  const detailPodcast = idFromContext.podcastsData[id];
  const idPodcast = detailPodcast?.id;

  const idPodcasts = useSelector(getByIdPodcastRecieved);
  const apiStatus = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const invokeIdPodcastsAPI = async () => {
      dispatch(idPodcastLoading());
      const apiResponse = await axios.get(`http://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id=')}${idPodcast}`);
      dispatch(idPodcastRecieved(apiResponse.data));
    };
    if(idPodcasts.length === 0) {
      invokeIdPodcastsAPI();
    }
  }, [dispatch]);
  return (
    <main>
    <Header />
      <SC.LayoutPodcast>
        <PodcastCardDetail {...detailPodcast} />
        <PodcastEpisode />
      </SC.LayoutPodcast>
    <Outlet />
    </main>
  )
}
