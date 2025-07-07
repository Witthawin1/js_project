export const TMDB_CONFIG = {
    BASE_URL : 'https://api.themoviedb.org/3',
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers : {
        accept : 'application/json',
        Authorization : `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query } : {query : string}) =>{
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint , {
        method : 'GET',
        headers: TMDB_CONFIG.headers
    })

    if(!response.ok){
        throw new Error('Failed to fetch movies : ' + response.statusText)
    }

    const data = await response.json()
    return data.results
}

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2ZmY2Y1M2YxM2M3MzhmMzY4ODE4MjhiZjk5ZTdjOSIsIm5iZiI6MTc1MTg1NzAxNy41NTMsInN1YiI6IjY4NmIzNzc5YmI2NGY3N2Y0NTcwMmIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mp81YDMTM1ETQpQd7XBjT3vaBNSAbtXyljcvtVGWpFM'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));