import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-red px-[1.75rem] pt-[1.5rem] pb-[3rem] text-left text-white lg:flex-row lg:px-[9.75rem] lg:pt-[3.5rem] lg:pb-[4rem]">
      <div className="md:basis-1/3 lg:basis-7/12">
        <h1 className="flex items-start pb-[1.125rem] text-[2.25rem] font-extrabold lg:pb-[2.25rem]">
          <Link to="/"></Link>
        </h1>
        <p className="pb-[1.125rem] text-[2.125rem] font-extrabold lg:pb-[2.25rem] lg:text-[2rem]">
          FRS Part 2 Ceunah
        </p>
        <p className="pb-[1.125rem] text-[0.875rem] lg:pb-[2.25rem] lg:text-[1.75rem]">
          Tugas Besar 3 IF2211 Strategi Algoritma <br />
          Penerapan String Matching dan Regular Expression dalam DNA Pattern Matching
          Semester II Tahun 2021/2022
        </p>
      </div>

      <div className="md:basis-1/3 lg:basis-2/12">
        <h2 className="pb-[1.125rem] text-[1.125rem] font-extrabold lg:pb-[2.25rem] lg:text-[2rem]">
          Product
        </h2>
        <p className="pb-[1.125rem] text-[1rem] lg:pb-[2.25rem] lg:text-[1.5rem] hover:underline">
          <Link to="/Prediction">Prediction</Link>
        </p>
        <p className="pb-[1.125rem] text-[1rem] lg:pb-[2.25rem] lg:text-[1.5rem] hover:underline">
          <Link to="/History">History</Link>
        </p>
        <p className="pb-[1.125rem] text-[1rem] lg:pb-[2.25rem] lg:text-[1.5rem] hover:underline">
          <Link to="/Disease">Disease</Link>
        </p>
      </div>

      {/* TENTANG */}
      <div className="md:basis-1/3 lg:basis-3/12">
        <h2 className="pb-[1.125rem] text-[1.125rem] font-extrabold lg:pb-[2.25rem] lg:text-[2rem]">
          About Us
        </h2>
        <p className="pb-[1.125rem] text-[1rem] lg:pb-[2.25rem] lg:text-[1.5rem] hover:underline">
          <Link to="/About">About</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
