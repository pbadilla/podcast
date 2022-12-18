import React, { PropsWithChildren, useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getAllPodcasts, getLoading, allPodcastsLoading, allPodcastsRecieved } from "../../../redux/features/podcastSlice";

import { Header } from '../../shared/header/Header';
import { PodcastCard } from '../../shared/card/PodcastCard';
import { Tag } from '../../shared/tag/Tag';

import { filtered } from '../../../utils/utils';

import * as SC from './HomeLayout.styles';

interface List {
  image: string;
  artist: string;
  name:string;
  key:string;
  index:number;
};

export const HomeLayout = () => {
  const [query, setQuery] = useState("");
  const [ unFilteredPodcasts, setUnFilteredPodcasts ] = useState([]);

  const podcasts = useSelector(getAllPodcasts);
  const apiStatus = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const invokeAllPodcastsAPI = async () => {
      dispatch(allPodcastsLoading());
      const apiResponse = await axios.get(`http://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre_1310/json')}`);
      dispatch(allPodcastsRecieved(apiResponse.data));
    };

    console.log('%c Podcast inside useEffect > ', 'color: #007acc;', podcasts);
    if(podcasts.length === 0) {
      invokeAllPodcastsAPI();
    }
    setUnFilteredPodcasts(podcasts);
  }, [dispatch]);

  function InlineWrapperWithMargin({ children }: PropsWithChildren<unknown>) {
    return <span style={{ marginRight: '0.5rem' }}>{children}</span>
}

  return (
    <main>
      <Header isLoaded={ apiStatus === "pending" ? true : false } />
      <SC.Search >
        { (apiStatus === "pending" && unFilteredPodcasts)
        ? (
          <>
            <SC.SkeletonSearch>
              <Skeleton count={1} width={20} height={20} circle/>
              <Skeleton count={1} width={150} height={20}/>
            </SC.SkeletonSearch>
          </>
          )
        : (
          <>
            <Tag podcasts={filtered(unFilteredPodcasts,query)} />
            <SC.Input placeholder="Filter Podcast by Title" onChange={event => setQuery(event.target.value)} isLoaded={ apiStatus === "pending" ? 'disabled' : null } />
          </>
        )}
      </SC.Search>
      <SC.LayoutCards>
        { (apiStatus === "pending" && unFilteredPodcasts)
        ? <SC.WrapperSkeleton><Skeleton count={4} height={250} width={250} inline  wrapper={InlineWrapperWithMargin} style={{ display: 'inline-block' }} /></SC.WrapperSkeleton>
        : (
          unFilteredPodcasts
            .filter(podcast => {
              if (query === '') {
                return Object.keys(podcast);
              } else if (podcast.name.toLowerCase().includes(query.toLowerCase())) {
                return Object.keys(podcast);
              }
            })
            .map((podcast, index:number) => {
              return (
                <PodcastCard image={podcast.image} artist={podcast.artist} name={podcast.name} key={podcast.name} index={index} />
              )
            })
          )}
      </SC.LayoutCards>
      <Outlet />
    </main>
  )
}
