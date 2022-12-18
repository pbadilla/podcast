import React, { useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, idPodcastRecieved, getByIdPodcastRecieved, idPodcastLoading } from "../../../redux/features/podcastSlice";

import { Header } from '../../shared/header/Header';
import { PodcastCardDetail } from '../../shared/card/PodcastCardDetail';
import { PodcastCardDetailList } from '../../shared/card/PodcastCardDetailList';

import * as SC from './PodcastsLayout.styles';

import { Outlet } from 'react-router-dom';

export const PodcastsLayout = () => {
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

  const paramsReceived = {...idPodcasts[0]};

  const paramsToDetail = {
      ...paramsReceived,
      idState: id
  }

  return (
    <main>
      <Header isLoaded={ apiStatus === "pending" ? true : false } />
      <SC.LayoutPodcast>
        <PodcastCardDetail {...detailPodcast} />
        {idPodcasts.length > 0 && <PodcastCardDetailList {...paramsToDetail} />}
      </SC.LayoutPodcast>
      <Outlet />
    </main>
  )
}

