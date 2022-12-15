import React from 'react';

import { Header } from '../Header';
import { PodcastCard } from '../shared/PodcastCard';

import { Outlet } from 'react-router-dom';

import * as SC from './HomeLayout.styles';

export const HomeLayout = () => {
  return (
    <main>
      <Header />
      <SC.LayoutCards>
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
      </SC.LayoutCards>
      <Outlet />
    </main>
  )
}