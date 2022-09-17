import React, { useEffect, useState } from "react";
import instance from "../axios";
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixMovieOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className={`bg-cover bg-center relative object-contain text-white h-[448px]`}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      }}
    >
      <div className="ml-[30px] pt-[140px] h-[190px]">
        <h1 className="text-5xl font-extrabold pb-[1rem] ">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="w-[45rem] leading-[1.3] pt-4 text-[1rem] max-w-[360px] h-20">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>

      <div
        className="h-[7.4rem] absolute w-full bottom-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111",
        }}
      />
    </header>
  );
};

export default Banner;
