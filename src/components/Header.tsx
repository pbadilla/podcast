import React from 'react';

import { Search } from './shared/Search';

export const Header = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Podcaster</h1>
            <Search />
        </div>
    )
}
