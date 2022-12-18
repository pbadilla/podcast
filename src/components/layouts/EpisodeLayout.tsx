import React from 'react';

import { Outlet } from 'react-router-dom';

import { Header } from '../shared/header/Header';
import { PodcastCardDetail } from '../shared/card/PodcastCardDetail';
import { PodcastEpisode } from '../shared/episodes/PodcastEpisode';

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
