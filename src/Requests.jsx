// API Key 81700d9e246363c42106cc78501c81e4

const API_KEY =  "81700d9e246363c42106cc78501c81e4"

const requests = {
     fetchTrender: `trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
     fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`
}



export default requests;