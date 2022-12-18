import React from 'react';

import { PodcastCardDetailTitle } from '../card/PodcastCardDetailTitle';
import { PodcastAudio } from '../audio/PodcastAudio';

export const PodcastEpisode = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <PodcastCardDetailTitle />
            <PodcastAudio />
        </div>
    )
}

