import React from 'react'
import {Fasearch} from "react-icons/fa";

export default function Searchbar() {
  return (
    <div className='input-wrapper'>
        <Fasearch id="search-icon"/>
        <input placeholder='Search Google or type a URL'/>
    </div>
  )
}
