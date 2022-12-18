import React from 'react';

import * as SC from './Tag.styles';

export const Tag = ({podcasts}) => {
    return (
        <SC.Tag>{podcasts}</SC.Tag>
    )
}
