import React from 'react';

import { PodcastCardDetailTitle } from './PodcastCardDetailTitle';
import { PodcastAudio } from './PodcastAudio';

export const PodcastEpisode = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <PodcastCardDetailTitle />
            <PodcastAudio />
        </div>
    )
}

