import React from 'react';

import * as SC from './PodcastAudio.styles';

interface Iaudio {
  title: string;
  name: string;
  index: number;
  description: string;
}

export const PodcastAudio = (options: Iaudio) => {
    const { name, description } = options.options;
    return (
        <SC.AudioCard>
            <h3>{name}</h3>
            <p>{description}</p>
            <audio id="audio" controls></audio>
        </SC.AudioCard>
    )
}

