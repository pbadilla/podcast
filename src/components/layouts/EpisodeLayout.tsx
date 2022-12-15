import React from 'react';

import { Outlet } from 'react-router-dom';

import { PodcastCardDetail } from '../shared/PodcastCardDetail';
import { PodcastEpisode } from '../shared/PodcastEpisode';
import { PodcastAudio } from '../shared/PodcastAudio';

export function EpisodeLayout() {
  return (
    <main>
      <PodcastCardDetail />
      <PodcastEpisode />
      <PodcastAudio />
      <Outlet />
    </main>
  )
}