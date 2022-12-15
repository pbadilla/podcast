import React from 'react';

import { Header } from '../Header';
import { PodcastCardDetail } from '../shared/PodcastCardDetail';
import { PodcastCardDetailList } from '../shared/PodcastCardDetailList';

import { Outlet } from 'react-router-dom';

export const PodcastsLayout = () => {
  return (
    <main>
      <Header />
      <PodcastCardDetail />
      <PodcastCardDetailList />
      <Outlet />
    </main>
  )
}