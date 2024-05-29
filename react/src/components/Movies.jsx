import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'





function Movies({handleAddtoWatchlist , handleRemoveFromWatchlist , watchlist}) {
    const [movies , setMovies] = useState([])
    const [pageNo, setpageNo] = useState(1)

    const handlePrev =()=>{
        if(pageNo==1){
            setpageNo(pageNo)
        }
        else{
            setpageNo(pageNo-1)
        }
        
    }
    const handleNext =()=>{
        setpageNo(pageNo+1)
    }


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0bc7f30a131dd8b47559f10622c2c89f&language=en-US&page=${pageNo}`).then(function(res){
            setMovies(res.data.results)
        })
    } , [pageNo])
  return (
    <div className=''>
        <div className='text-2xl font-bold text-center'>
            Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around m-10 gap-4'>
            {movies.map((movieObj)=>{
                return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} original_title={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
            })}
        </div>
        <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=0bc7f30a131dd8b47559f10622c2c89f&language=en-US&page=1
