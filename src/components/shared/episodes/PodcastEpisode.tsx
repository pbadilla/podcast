import React from 'react';

import { PodcastCardDetailTitle } from '../card/PodcastCardDetailTitle';
import { PodcastAudio } from '../audio/PodcastAudio';

export interface iDetailPodcast {
  artist: string;
  image: string;
  name: string;
  index: number;
  description: string;
};

export const PodcastEpisode = (dataParam: iDetailPodcast) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <PodcastCardDetailTitle title={dataParam.name}/>
            <PodcastAudio options={dataParam} />
        </div>
    )
}

