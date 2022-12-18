import React from 'react';
import Loader from '../Loader';
import { Link } from 'react-router-dom';

import * as SC from './Header.styles'

export const Header = (isLoaded: {}) => {
    return (
      <>
        <SC.Header>
          <Link to={'/'}><h1>Podcaster</h1></Link>
          <SC.Loader>
            { isLoaded.isLoaded ? <Loader /> : null}
          </SC.Loader>
        </SC.Header>
      </>
    )
}
