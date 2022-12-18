import React from 'react';
import Loader from '../Loader';

import * as SC from './Header.styles'

export const Header = (isLoaded: {}) => {
    return (
      <>
        <SC.Header>
          <h1>Podcaster</h1>
          <SC.Loader>
            { isLoaded.isLoaded ? <Loader /> : null}
          </SC.Loader>
        </SC.Header>
      </>
    )
}
