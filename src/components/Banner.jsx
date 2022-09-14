import React from "react";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header className="bg-[url('https://frpnet.net/wp-content/uploads/2021/01/netflix-banner.jpg')] bg-cover bg-center relative object-contain text-white h-[448px]">
      <div className="ml-[30px] pt-[140px] h-[190px]">
        <h1 className="text-5xl font-extrabold pb-[0.3rem] ">Movie Name</h1>
        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="w-[45rem] leading-[1.3] pt-4 text-[0.8rem] max-w-[360px] h-20">
          {truncate("This is a test description", 150)}
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
