import React from 'react';

import { PodcastCardDetail } from './PodcastCardDetail';
import { PodcastAudio } from './PodcastAudio';

export const PodcastEpisode = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <PodcastCardDetail />
            <PodcastAudio />
        </div>
    )
}

