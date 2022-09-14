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

  console.log(movies);

  return (
    <div className="text-white ml-5">
      <h1 className="text-2xl">{title}</h1>

      <div className="flex overflow-y-hidden overflow-x-scroll p-5 scroll scrollbar">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`${
                  isLargeRow
                    ? "max-h-[250px] hover:scale-[1.09]"
                    : "max-h-[100px] hover:scale-[1.08]"
                }  object-contain mr-[10px] w-full transition-all duration-500  hover:opacity-100`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt="Movie"
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
