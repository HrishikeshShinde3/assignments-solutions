import React from 'react'
import "./SearchResultList.css"
export const SearchResultList = ({results}) => {
  return (
    <div className='results-list'>
      {
        results.map((result,id)=>{
            return <div key={id}>{result.state_name}</div>
        })
      }

  </div>
  )
}
