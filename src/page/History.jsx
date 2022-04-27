import React from "react";
import { Button } from "../Utilities";

const History = () => {
  const tableHeader = ["Name", "Date Test", "Disease", "Result"];
  const listRiwayat = [
    {
      name: "Dummy1",
      Date: "12/12/2020",
      Disease: "Cancer",
      result: "POSITIF",
    },
    {
      name: "Dummy2",
      Date: "13/12/2020",
      Disease: "Diabetes",
      result: "Negatif",
    },
    {
      name: "Dummy3",
      Date: "14/12/2020",
      Disease: "Autisme",
      result: "Negatif",
    }
  ];

  return (
    <div
      className={`px-[1.75rem] pt-[4.5rem] lg:px-[9.75rem] lg:pt-[10rem] lg:pb-[8.5rem] `+(listRiwayat.length <= 2 ? `pb-[3rem]` : `pb-[1rem]`)
      }
    >
      <div className="mb-[1.5rem] flex flex-col lg:mb-[5rem] lg:flex-row lg:gap-[1.5rem]">
        <h1 className="mb-[1.5rem] basis-4/12 text-[1.5rem] font-extrabold lg:mb-0 lg:text-[2.25rem]">
          History
        </h1>
        <div className="flex basis-8/12 flex-nowrap justify-between gap-[0.5rem] lg:gap-[1.5rem]">
          <input type="text" name="search" placeholder="Search History Disease"
            className="w-full rounded-[0.5rem] bg-lightgrey px-[1rem] py-[0.75rem] text-[0.667rem] text-darkgrey lg:px-[1.75rem] lg:py-[1rem] lg:text-[1rem]"
          />
          <Button
            className={`py-[0.45rem] px-[2rem] text-[0.85rem] lg:py-[0.75rem] lg:px-[3.75rem]`}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row rounded-t-[0.5rem] gap-[1rem]  bg-red px-[0.667rem] py-[0.667rem] lg:py-[1.125rem] lg:px-[2.25rem]">
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
            <div className="flex justify-center  lg:py-[1.25rem] py-[3rem]">
              <p className="text-[0.667rem] lg:text-[1.25rem]">
                Not Found!
              </p>
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
