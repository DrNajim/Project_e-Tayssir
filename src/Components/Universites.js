import React from 'react'
import { useSelector } from 'react-redux'
import UniversitePublic from './UniversitePublic'

function Universites(){
  const Universities = useSelector(state => state.ListUniversite.Universites)

  return (
    <div>
        {Universities.map(Universities=>( 
          <UniversitePublic className='search-videoflag' {...Universities} />
    ))}
    </div>
  )
}

export default Universites