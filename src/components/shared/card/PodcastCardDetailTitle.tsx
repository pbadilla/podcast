import React, { useEffect } from 'react';

import * as SC from './PodcastCardDetailTitle.styles';

interface Ititle {
  title: string;
}

export const PodcastCardDetailTitle = (title: Ititle) => {
  const { title: titleEpisode } = title;
    return (
        <SC.Title>
          <h2>Episode: {titleEpisode}</h2>
        </SC.Title>
    )
}

