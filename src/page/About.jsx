import React from "react";
import Profile from "../Utilities/Profile";
import images from "../images/images.png";
import hiasan from "../images/hiasan.png";
import FRS from "../images/FRS.jpg";
import FRSSERVICE from "../images/FRSSERVICE.webp";


const About = () => {
  return (
    <div className="relative flex flex-col px-[1.75rem] pt-[4.5rem] pb-[3rem] lg:px-[9.75rem] lg:pt-[10rem] lg:pb-[8.5rem]">
      {/* About  */}
      <h1 className="mb-[1.5rem] text-[1.5rem] font-extrabold lg:mb-[3rem] lg:text-[2.25rem]">
        About <i></i>
      </h1>
      <div className="mb-[2.25rem] flex flex-col lg:mb-[3rem] lg:flex-row">
        <div className="order-2 lg:order-1 lg:basis-7/12">
          <p className="text-justify text-[1rem] font-bold lg:text-[1.5rem]">
            <i>DNA Pattern Matching</i> adalah cara mencocokkaan DNA user dengan DNA penyakit untuk 
            memprediksi berbagai macam penyakit yang tersimpan pada basis data berdasarkan urutan sekuens DNA-nya. 
            Sebuah sekuens DNA adalah proses atau teknik penentuan urutan basa nukleotida pada suatu molekul DNA
            serta merupakan suatu representasi <i>string of nucleotides</i> yang disimpan pada
            suatu rantai DNA, sebagai contoh: ATTCGTAACTAGTAAGTTA.
            <img
            src={FRSSERVICE}
            alt="DNA"
            className="w-full lg:w-[18rem]"
          />

          </p>
          
        </div>
        <div className="order-1 mb-[2.25rem] flex justify-center lg:order-2 lg:mb-0 lg:basis-5/12">
          <img
            src={images}
            alt="DNA"
            className="w-full lg:w-[18rem]"
          />
        </div>
      </div>
      <h1 className="mb-[1.5rem] text-[1.5rem] font-extrabold lg:mb-[3rem] lg:text-[2.25rem]">
        About FRS part 2
      </h1>
      <div className="mb-[2.25rem] flex flex-col lg:flex-row lg:mb-[1rem] ">
        <div className="order-2 lg:order-1 lg:basis-7/12">
          <p className="text-justify-center text-[1rem] font-bold lg:text-[1.5rem]">
            FRS Part 2 adalah kelompok yang membuat aplikasi web dalam pemenuhan tugas besar IF 2211. 
            Pada tugas ini akan dilakukan Penerapan String Matching dan Regular Expression dalam
            DNA Pattern Matching untuk membantu penyedia jasa kesehatan dalam memprediksi penyakit
            pasien. FRS adalah singkatan dari Febryola,Raden,dan Steven yang merupakan 3 anggota dari kelompok ini.
            <img src={FRS} alt="logo" className="w-full lg:w-[18rem]" />
          </p>
        </div>
        <div className="order-1 mb-[2.25rem] flex justify-center lg:order-2 lg:mb-0 lg:basis-5/12">
        </div>
      </div>

      {/* Tim Kami */}
      <h1 className="mb-[1.5rem] text-center text-[1.5rem] font-extrabold lg:mb-[3rem] lg:text-[2.25rem]">
        Our Team
      </h1>
      <div className="mb-[2.25rem] flex flex-col gap-[1.5rem] self-center lg:mb-[3rem] lg:flex-row lg:gap-[3rem]">
        <Profile
          nim="13520140"
          nama="Febryola Kurnia Putri"
        />
        <Profile
          nim="13520145"
          nama="Steven Gianmarg Haposan Siahaan"
        />
        <Profile
          nim="13520166"
          nama="Raden Rifqi Rahman"
        />
      </div>

      <img src={hiasan} className="absolute right-0 bottom-0 -z-10" />
    </div>
  );
};
export default About;
