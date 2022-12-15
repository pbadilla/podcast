import React from 'react';

import { Tag } from './Tag';
import { SearchInput } from './SearchInput';

import * as SC from './Search.styles';

export const Search = () => {
    return (
        <SC.Search>
            <Tag />
            <SearchInput />
        </SC.Search>
    )
}
