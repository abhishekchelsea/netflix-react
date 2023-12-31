import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageurl,API_KEY} from "../../Constants/constants"

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')

  useEffect(() => {
    
    axios.get(props.url).then(response=>{
      console.log(response)
      setMovies(response.data.results)
    }).catch(err=>{
      //alert('Network Error')
    })
  }, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log("Trailer not avilable")
      }
    })

  }

  const [showVideo, setShowVideo] = useState(true);

  
  return (
    <div className='row'>
        <h2>{props.title}</h2>

        <div className='posters'>
        {movies.map((obj) => (
          <div key={obj.id} className='poster-container'>
            <img
              onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? 'smallPoster' : 'poster'}
              src={`${imageurl + obj.backdrop_path}`}
              alt="poster"
            />
            <div className="poster-title">{obj.title}</div>
          </div>
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost