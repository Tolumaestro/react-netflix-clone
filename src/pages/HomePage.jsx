import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import requests from "../Requests";

const HomePage = () => {
  return (
    <div>
      <Nav />

      <Banner />

      <Row
        title="Netflix Movie Originals"
        fetchURL={requests.fetchNetflixMovieOriginals}
        isLargeRow
      />
      <Row
        title="Netflix TV Originals"
        fetchURL={requests.fetchNetflixTvOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      {/* <Row title="Top Rated" fetchURL={requests.fetchTopRated} /> */}
      {/* <Row title="Action Movies" fetchURL={requests.fetchActionMovies} /> */}
      {/* <Row title="Comedy Movies" fetchURL={requests.fetchNetflixOriginals} /> */}
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomePage;
