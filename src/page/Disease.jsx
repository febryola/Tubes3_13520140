import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Utilities";
import { apiUrl } from "./environtment";
const Disease = () => {
  const [penyakit, setPenyakit] = useState([]);

  const [name, setName] = useState("No Name");
  const [filename, setFilename] = useState("No File Selected");
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(false);
  const [isAllFilled, setIsAllFilled] = useState(true);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${apiUrl}/diseases`);
    xhr.responseType = "json";
    xhr.onload = () => {
      setPenyakit(xhr.response);
    };
    xhr.send();
  }, []);

  var DNA = "";
  const handleUploadFileButton = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const _file = e.target.files[0];
    setFilename(_file.name);
    setFile(_file);
    fileValidation(_file.name);
  };

  const fileValidation = (_filename) => {
    setIsFileValid(_filename != null || _filename != undefined);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    name === "" || !isFileValid ? setIsAllFilled(false) : setIsAllFilled(true);

    const reader = new FileReader();
    reader.onload = () => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${apiUrl}/add`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.responseType = "json";
      xhr.onload = () => {
        if (xhr.status != 200) {
          //
          alert(xhr.response.message);
          return;
        }
        const _xhr = new XMLHttpRequest();
        _xhr.open("GET", `${apiUrl}/diseases`);
        _xhr.responseType = "json";
        _xhr.onload = () => {
          setPenyakit(_xhr.response);
        };
        _xhr.send();
      };
      xhr.send(
        JSON.stringify({
          name,
          dnaSequence: reader.result,
        })
      );
    };
    reader.readAsText(file);
  };

  return (
    <div className="relative flex flex-col px-[1.75rem] pt-[4.5rem] pb-[3rem] lg:flex-row lg:px-[9.75rem] lg:pt-[10rem] lg:pb-[8.5rem]">
      <div className="mb-[3rem] basis-5/12 lg:mr-[7.5rem] lg:mb-[8.5rem]">
        <h1 className="mb-[3rem] text-[1.5rem] font-extrabold lg:mb-[3rem] lg:text-[2.25rem]">
          Add Disease
        </h1>
        <form className="mb-[1.5rem] lg:mb-[3rem]">
          <div className="mb-[1.5rem] basis-5/12 lg:mb-[3rem]">
            <p className="mb-[1rem] text-[1rem] font-bold  lg:mb-[1.5rem] lg:text-[1.5rem]">
              Input Name
            </p>
            <input
              type="text"
              name="nama penyakit"
              placeholder="name.."
              className="w-full rounded-[0.5rem] bg-lightgrey px-[1rem] py-[0.688rem] text-[0.688rem] text-darkgrey lg:px-[1.5rem] lg:py-[1rem] lg:text-[1rem]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-[1.5rem] lg:mb-[3rem]">
            <p className="mb-[1rem] text-[1rem] font-medium lg:mb-[1.5rem] lg:text-[1.5rem]">
              File DNA
            </p>
            <div
              className={
                `mb-[0.75rem] text-[0.668rem] font-medium text-darkgrey lg:mb-[1.125rem] lg:text-[1rem] ` +
                (isFileValid || filename === "No File Selected"
                  ? `text-darkgrey`
                  : `text-red`)
              }
            >
              <p>*Format File .txt</p>
              <p>
                *File hanya berisi huruf A, C, G, dan/atau T tanpa enter,spasi,
                dan harus huruf besar
              </p>
            </div>
            <p className="text-[0.667rem] font-medium lg:text-[1rem]">
              <Button
                className={`!mr-[1rem] !bg-red !p-[0.6rem] !text-[0.667rem] !font-medium hover:!bg-orange lg:!mr-[1.5rem] lg:!p-[1rem] lg:!text-[1rem]`}
                onClick={handleUploadFileButton}
              >
                Browse File
              </Button>
              {filename}
            </p>
            <input
              type="file"
              className="hidden"
              multiple={false}
              accept=".txt"
              onChange={handleFileUpload}
              ref={fileInputRef}
            />
          </div>

          <Button
            className={`mb-[1rem] px-[2.25rem] lg:px-[3.625rem]`}
            onClick={handleSubmit}
          >
            Add
          </Button>
          <p
            className={
              `text-[0.667rem] font-medium text-red lg:text-[1rem] ` +
              (isAllFilled ? `hidden` : `block`)
            }
          >
            *Input Can't be Empty
          </p>
        </form>
      </div>
      <div className="relative-flex">
        <div className="rounded-t-[0.5rem font-bold] flex bg-red px-[0.667rem] py-[0.667rem] lg:py-[1.125rem] lg:px-[2.25rem]">
          <p className="flex-1 text-[0.667rem] font-medium lg:text-[1.5rem]">
            Penyakit/Kelainan yang Sudah Terdaftar
          </p>
        </div>
        <div className="flex flex-col divide-y-[1px] lg:divide-y-2">
          {penyakit.length === 0 ? (
            <div className="flex justify-center py-[0.25rem] lg:py-[1.25rem]">
              <p className="text-[0.667rem] lg:text-[1.25rem]">
                *No Disease Available
              </p>
            </div>
          ) : (
            penyakit.map((item, index) => (
              <div
                key={index}
                className="flex flex-row justify-between px-[0.667rem] py-[0.25rem] lg:px-[2.25rem] lg:py-[1.25rem]"
              >
                <p className="text-[0.667rem] lg:text-[1.25rem]">{item}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Disease;
