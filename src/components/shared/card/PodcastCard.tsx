import React from 'react';
import { Link } from "react-router-dom";

import * as SC from './PodcastCard.styles';

export interface iDataPodcast {
  artist: string;
  image: string;
  name: string;
  index: number;
}

export const PodcastCard = (dataParam: iDataPodcast) => {
    const { artist, image, name, index } = dataParam;
    localStorage.setItem('numPodcasts', JSON.stringify(index));
    return (
        <Link to={`/podcast/${index}`}>
            <SC.Image src={image} alt={artist}/>
            <SC.Cards>
                <h2>{name}</h2>
                <p>Author: {artist}</p>
            </SC.Cards>
        </Link>
    )
}

