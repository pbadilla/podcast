import React from 'react';

import { Search } from './shared/Search';

import * as SC from './Header.styles'

export const Header = () => {
    return (
      <>
        <SC.Header>
            <h1>Podcaster</h1>
        </SC.Header>
        <SC.Search>
          <Search />
        </SC.Search>
      </>
    )
}
