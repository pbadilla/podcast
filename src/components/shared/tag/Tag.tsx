import React from 'react';

import * as SC from './Tag.styles';

export const Tag = ({podcasts}) => {
  console.log('%c', 'color: #007acc;', podcasts);
    return (
        <SC.Tag>{podcasts}</SC.Tag>
    )
}
