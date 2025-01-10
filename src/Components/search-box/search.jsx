import React from 'react';
import './search.css';

export const Search = ({placeholder, handleChange}) => (
<header className = "search-header">
<input
          className='search'
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
/>
<div className="close">
<span className='front'></span>
<span className='back'></span>
</div>
</header>
)