import React, { useEffect, useState } from "react";
import instance from "../axios";
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [brightness, setBrightness] = useState(null);

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

  useEffect(() => {
    var img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
    img.style.display = "none";
    img.setAttribute("crossOrigin", "");
    document.body.appendChild(img);

    var colorSum = 0;

    img.onload = function () {
      // create canvas
      var canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(this, 0, 0);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;
      var r, g, b, avg;

      for (var x = 0, len = data.length; x < len; x += 4) {
        r = data[x];
        g = data[x + 1];
        b = data[x + 2];

        avg = Math.floor((r + g + b) / 3);
        colorSum += avg;
      }

      var bri = Math.floor(colorSum / (this.width * this.height));
      console.log(bri);
      setBrightness(bri);
    };
  }, [movie]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className={`bg-cover bg-center relative object-contain ${
        brightness > 120 ? "text-red-600" : "text-white"
      } h-[448px] mb-8`}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        mixBlendMode: "difference",
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
        <h1 className="w-[45rem] leading-[1.3] pt-4 text-[1rem] max-w-[90%] md:max-w-[360px] h-20">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>

      <div
        className="h-[10rem] absolute w-full bottom-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111",
        }}
      />
    </header>
  );
};

export default Banner;
