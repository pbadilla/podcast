import React from 'react';

import * as SC from './PodcastCardDetail.styles';

export const PodcastCardDetail = () => {
    return (
        <SC.CardDetail>
          <SC.Photo>
            <img src="" alt="" />
          </SC.Photo>
          <SC.Title>
            <strong>Title Podcast</strong>
            <p>by Title</p>
          </SC.Title>
          <SC.Description>
            <strong>Description</strong>
            <p>Description</p>
          </SC.Description>
        </SC.CardDetail>
    )
}

