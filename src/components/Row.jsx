import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight, MdSafetyCheck} from 'react-icons/md'
import Youtube from 'react-youtube'
import {key} from '../Request'


function Row({ title, fetchURL, rowId }) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(() => {
        return res.data.results;
      });
    });
  }, [fetchURL]);
//   console.log(movies);
const slideLeft =()=>{
    var slider = document.getElementById('slider'+rowId)
    slider.scrollLeft = slider.scrollLeft-500;
}

const slideRight =()=>{
    var slider = document.getElementById('slider'+rowId)
    slider.scrollLeft = slider.scrollLeft+500;
}
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
function handleMovieTrailer(id){
  axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=US`)
  .then(response=>{
    console.log(response.data)
    setUrlId(response.data.results[0])
  })
  // console.log(item)
}

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-0 hover:opacity-100 cursor-pointer z-10 group-hover:block"/>
        <div id={"slider" +rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((item, id) => (
            <Movie key={id} item={item} handleMovieTrailer={handleMovieTrailer}/>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full absolute opacity-0 hover:opacity-100 cursor-pointer z-10 group-hover:block"/>
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </>
  );
}

export default Row;
