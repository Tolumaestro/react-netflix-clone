import React, { useEffect, useState } from "react";
import instance from "../axios";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);

      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchURL]);

  return (
    <div className="text-white ml-5">
      <h1 className="text-2xl">{title}</h1>

      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scrollbar">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div
                key={movie.id}
                className={`${
                  isLargeRow
                    ? "min-w-[177px] hover:scale-[1.09]"
                    : "min-w-[188px] hover:scale-[1.08]"
                } transition-all duration-500  hover:opacity-100 `}
              >
                <img
                  className={`${
                    isLargeRow ? "max-h-[250px] " : "max-h-[100px] "
                  }  object-contain mr-[10px] w-full `}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt="Movie"
                />
                <h1 className="pl-[5px]">
                  {movie?.title || movie?.name || movie?.original_name}
                </h1>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Row;
