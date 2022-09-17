const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&with_networks=213`,
  fetchNetflixMovieOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchNetflixTvOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_networks=213`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_networks=213`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&with_networks=213`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&with_networks=213`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_networks=213`,
};

export default requests;
