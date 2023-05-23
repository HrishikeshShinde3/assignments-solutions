import React, { useState } from 'react'

import Searchbar from './components/div-searchbar'
import './Searchbar.css'
import { SearchResultList } from './components/searchResultList'


export default function Search() {

  const[results,setResults]=useState([])
  return (
    <>
    <div className='Search'>
        
        <div className='search-bar-container'>
            <Searchbar setResults={setResults}/>
            <SearchResultList results={results}/>
        </div>
    </div>
    </>
  )
}
