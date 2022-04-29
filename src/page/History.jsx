import React, { useEffect, useState } from "react";
import { Button } from "../Utilities";
import { apiUrl } from "./environtment";

const History = () => {
  const tableHeader = ["Name", "Date Test", "Disease", "Result"];
  const [query, setQuery] = useState("");
  const [listRiwayat, setList] = useState([]);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${apiUrl}/history`);
    xhr.responseType = "json";
    xhr.onload = () => {
      setList(xhr.response);
      console.log(xhr.response);
    };
    xhr.send();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${apiUrl}/history`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";
    xhr.onload = () => {
      setList(xhr.response);
      console.log(xhr.response);
    };
    xhr.send(
      JSON.stringify({
        query,
      })
    );
  }

  return (
    <div
      className={
        `px-[1.75rem] pt-[4.5rem] lg:px-[9.75rem] lg:pt-[10rem] lg:pb-[8.5rem] ` +
        (listRiwayat.length <= 2 ? `pb-[3rem]` : `pb-[1rem]`)
      }
    >
      <div className="mb-[1.5rem] flex flex-col lg:mb-[5rem] lg:flex-row lg:gap-[1.5rem]">
        <h1 className="mb-[1.5rem] basis-4/12 text-[1.5rem] font-extrabold lg:mb-0 lg:text-[2.25rem]">
          History
        </h1>
        <div className="flex basis-8/12 flex-nowrap justify-between gap-[0.5rem] lg:gap-[1.5rem]">
          <input
            type="text"
            name="search"
            placeholder="Search History Disease"
            className="w-full rounded-[0.5rem] bg-lightgrey px-[1rem] py-[0.75rem] text-[0.667rem] text-darkgrey lg:px-[1.75rem] lg:py-[1rem] lg:text-[1rem]"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            className={`py-[0.45rem] px-[2rem] text-[0.85rem] lg:py-[0.75rem] lg:px-[3.75rem]`}
            onClick={onSubmit}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-[1rem] rounded-t-[0.5rem]  bg-red px-[0.667rem] py-[0.667rem] lg:py-[1.125rem] lg:px-[2.25rem]">
          {tableHeader.map((item, index) => (
            <p
              key={index}
              className="flex-1 basis-1/4 text-[0.667rem] font-bold font-medium lg:text-[1.5rem]"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col divide-y-[1px] lg:divide-y-2">
          {listRiwayat.length === 0 ? (
            <div className="flex justify-center  py-[3rem] lg:py-[1.25rem]">
              <p className="text-[0.667rem] lg:text-[1.25rem]">Not Found!</p>
            </div>
          ) : (
            listRiwayat.map((item, index) => (
              <div
                key={index}
                className="flex flex-row gap-[1rem] px-[0.667rem] py-[0.25rem] lg:px-[2.25rem] lg:py-[1.25rem]"
              >
                <p className="basis-1/4 text-[0.667rem] lg:text-[1.25rem]">
                  {item.name}
                </p>
                <p className="basis-1/4 text-[0.667rem] lg:text-[1.25rem]">
                  {item.Date}
                </p>
                <p className="basis-1/4 text-[0.667rem] lg:text-[1.25rem]">
                  {item.Disease}
                </p>
                <p className="basis-1/4 text-[0.667rem] lg:text-[1.25rem]">
                  {item.result}
                </p>
              </div>
            ))
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default History;
