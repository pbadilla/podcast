import React from 'react';
import Loader from '../components/shared/Loader';

import * as SC from './Header.styles'

export const Header = () => {
    return (
      <>
        <SC.Header>
            <h1>Podcaster</h1>
        </SC.Header>
        <SC.Search>
          <div>
            <Loader message='Esperando datos ...' />
          </div>
        </SC.Search>

      </>
    )
}
