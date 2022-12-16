import React from 'react';

import * as SC from './PodcastCardDetail.styles';

export interface iDetailPodcast {
  artist: string;
  image: string;
  name: string;
  index: number;
  description: string;
}


export const PodcastCardDetail = (dataParam: iDetailPodcast) => {
  const { artist, image, name, description } = dataParam;

    return (
        <SC.CardDetail>
          <SC.Photo>
            <img src={image} alt={artist}/>
          </SC.Photo>
          <SC.Title>
            <strong>{name}</strong>
            <p>by {artist}</p>
          </SC.Title>
          <SC.Description>
            <strong>Description</strong>
            <p>{description}</p>
          </SC.Description>
        </SC.CardDetail>
    )
}

