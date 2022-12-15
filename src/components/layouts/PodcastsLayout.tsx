import React from 'react';

import { Header } from '../Header';
import { PodcastCardDetail } from '../shared/PodcastCardDetail';
import { PodcastCardDetailList } from '../shared/PodcastCardDetailList';

import * as SC from './PodcastsLayout.styles';

import { Outlet } from 'react-router-dom';

export const PodcastsLayout = () => {
  return (
    <main>
      <Header />
      <SC.LayoutPodcast>
        <PodcastCardDetail />
        <PodcastCardDetailList />
      </SC.LayoutPodcast>
      <Outlet />
    </main>
  )
}
