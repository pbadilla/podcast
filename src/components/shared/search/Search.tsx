import React, { useState } from 'react';

import { Tag } from '../tag/Tag';
import { SearchInput } from './SearchInput';

import * as SC from './Search.styles';

export const Search = (cards) => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredCards = cards.filter(
    card => {
      return (
        card
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        card
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

    return (
        <SC.Search>
            <Tag />
            <input type = "search" placeholder = "Search Podcasts" onChange={handleChange} />
        </SC.Search>
    )
}
