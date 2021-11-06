import React, {useState,useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Row.css';
const baseUrl = "https://images.tmdb.org/t/p/original/";
function Row({title,fetchUrl,islargeRow}){
const [movies,setMovies] = useState([]);
//run  once when row component is called 
//(second param)if empty array is passed
//else if we put movies suppose, it will call whenever movies variable changes
useEffect(()=>{
    //since this is an asycn call
    //we are emplying below asyn method
    //called within
   async function fetchData(){
        const request = await axios.get(fetchUrl);
    
        setMovies(request.data.results);
        return request;
   } 

   fetchData();
   //any outside variable used inside useEfect need to put in bwelow array
},[fetchUrl]);
console.table(movies);
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className ="row_posters">
                
                {movies.map(movie => (
                   
                    <img 
                    //added to improve rendering speed while iterating
                    key= {movie.id}
                    className={`row_poster ${islargeRow && "row_posterlargeRow"}`}
                    src={`${baseUrl}${islargeRow ? movie.poster_path:movie.backdrop_path}`} alt= {movie.name}/>
    ))}
            </div>
        </div>
    )
}


export default Row;