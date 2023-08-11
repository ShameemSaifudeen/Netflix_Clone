import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import axios from '../../axios'
import {image_url} from '../../constants/constants'
function Rowaposter({url,title,isSmall}) {
  const [movie,setMovie] = useState([])
  useEffect(()=>{
    
    axios.get(url).then((response)=>{
     console.log(response.data.results);
     setMovie(response.data.results)
     
    })
    
 },[url])
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="posters">
          {movie.map((obj)=>
            
            <img className={isSmall?'smallPoster':'poster'} src={`${image_url+obj.poster_path}`} alt="poster" />
          )}
           
        </div>
      
    </div>
  )
}

export default Rowaposter
