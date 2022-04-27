import React from "react";

const Profile = ({nim, nama }) => {
  return (
    <div className="flex w-[12rem] flex-col drop-shadow-lg lg:w-[17.5rem]">
      <div className="flex-1 rounded-b-[1rem] bg-white px-[1.125rem] pb-[2.5rem] pt-[1.125rem] lg:px-[1.5rem] lg:pb-[3.5rem] lg:pt-[1.5rem]">
        <p className="mb-[0.375rem] text-[0.7rem] font-bold text-grey lg:text-[1.5rem]">
          {nim}
        </p>
        <h3 className="text-[1.125rem] font-medium lg:text-[1.75rem]">{nama}</h3>
      </div>
    </div>
  );
};

export default Profile;
