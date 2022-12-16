import React from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { PodcastCardDetail } from '../shared/PodcastCardDetail';
import { PodcastEpisode } from '../shared/PodcastEpisode';

import * as SC from './PodcastsLayout.styles';

export function EpisodeLayout() {
  return (
    <main>
     <Header />
     <SC.LayoutPodcast>
        <PodcastCardDetail />
        <PodcastEpisode />
      </SC.LayoutPodcast>
      <Outlet />
    </main>
  )
}
