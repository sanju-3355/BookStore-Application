import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './index.css'

const SearchInput = ({searchInputValue, setSearchInputValue}) => {
  
  return (
    <div className="search-input-container">
        <input
            placeholder="Search by title..."
            type="search"
            className="search-input"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <button
            className="search-btn"
            type="button"                               
        >
            <BsSearch className="search-icon" />
        </button>
    </div>
  )
}

export default SearchInput
