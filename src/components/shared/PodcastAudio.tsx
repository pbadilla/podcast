import React from 'react';

import * as SC from './PodcastAudio.styles';

export const PodcastAudio = () => {
    return (
        <SC.AudioCard>
            <h3>Title Podcast Episode</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <audio id="audio" controls></audio>
        </SC.AudioCard>
    )
}

