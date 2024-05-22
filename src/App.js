import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import searchIcon from "./search.svg"
import developers from "./Assets/AJlogo.jpg"
import MovieCard from "./MovieCard";



/* Api Key = bcb2c4c7 */
const API_URL =  'http://www.omdbapi.com/?i=tt3896198&apikey=bcb2c4c7' ;
const App = ()=>{

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm ] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies();
    },[]);

    return (
        <div className="app">
            <h1>FilmEmpire</h1>

            {/* <div className="developer">
                <img 
                src={developers}
                alt="Developer Logo"
                />
                <p> AJ Developers</p>
            </div> */}

            <div className="search">
                <input placeholder="search for the movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)} 
                />

                <img
                src={searchIcon}
                alt="Search-Icon"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            { movies?.length >0 
                ? (
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie = 
                        { movie }/>
                    ))}
                </div>
                ) : (                          
                <div className="empty">
                    <h2>
                        No Movies Found               
                    </h2>
                </div>

                     )
            }
            
        </div>
    );
}
export default App;