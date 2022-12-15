import React from 'react';
import { Link } from "react-router-dom";

import * as SC from './PodcastCard.styles';
export const PodcastCard = () => {
    return (
        <Link to="/podcast/1">
            <SC.Cards>
                <img src="../../img/default.png" alt="" />
                <span>Title Podcast</span>
            </SC.Cards>
        </Link>
    )
}

