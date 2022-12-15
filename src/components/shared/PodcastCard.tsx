import React from 'react';
import { Link } from "react-router-dom";

import * as SC from './PodcastCard.styles';

export const PodcastCard = () => {
    return (
        <Link to="/podcast/1">
            <img src="../../img/default.png" alt="" />
            <SC.Cards>
                <h2>Title Podcast</h2>
                <p>Author: nombredelautor</p>
            </SC.Cards>
        </Link>
    )
}

