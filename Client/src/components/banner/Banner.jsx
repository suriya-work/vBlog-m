import React from "react";
import Articles from "../articles/Articles";
import Card from "../card/Card";
// import SearchBar from "../serach/SearchBar";
import hero from '../../../public/image/hero.jpg'

const Banner = () => {
  return (
    <>
      <div className="container lg:block mx-auto">
        <img src={hero} alt="hero" className="w-[95%] h-[400px] m-auto mt-10 rounded-[15px]" />
      </div>
      <Articles />

      <Card />
    </>
  );
};

export default Banner;
