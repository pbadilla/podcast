import React from 'react';

import { Header } from '../Header';
import { PodcastCard } from '../shared/PodcastCard';

import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <main>
      <Header />
      <PodcastCard />
      <Outlet />
    </main>
  )
}