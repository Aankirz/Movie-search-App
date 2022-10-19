import React from "react";

export default function SearchMovie(){
    
    const searchMovie= async (e)=>{
        e.preventDefault();
        console.log("submitting");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=237ea183d45cfc31b78b348f43ba3eec&language=en-US&query=${query}&page=1&include_adult=false`;
        fetch(url)
        .then(res=>res.json)
        .then(data=>console.log(data))
    }

    return(
        <form onSubmit={searchMovie}>
         <label htmlFor="query" className="label">Movie Name</label>
         <input type="text" name="query" placeholder="Jurassic Park"/>
         <button type="submit">Search</button>
        </form>
    )
}