import React from 'react'
import './Search-bar.css'
import Searchbar from './components/searchbar'
export default function Search() {
  return (
    <>
    <div className='Search'>
        
        <div className='search-bar-container'>
            <Searchbar/>
            <div>SearchResults</div>
        </div>
    </div>
    </>
  )
}
