const API_KEY = "";


const requests={

    retrieveTrending: `/trending/all/week/?api_key=${API_KEY}&language=en-US`,
    retrieveNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    retrieveTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    retrieveActionMovies: `/discover/movie?api_key=${API_KEY}&withe_genres=28`,
    retrieveComedyMovies: `/discover/movie?api_key=${API_KEY}&withe_genres=35`,
    retrieveHorrorMovies: `/discover/movie?api_key=${API_KEY}&withe_genres=27`,
    retrieveRomanceMovies: `/discover/movie?api_key=${API_KEY}&withe_genres=10749`,
    retriveDocumentaries:  `/discover/movie?api_key=${API_KEY}&withe_genres=99`,

}

export default requests;