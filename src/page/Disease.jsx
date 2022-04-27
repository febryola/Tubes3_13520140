import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Utilities";
import { apiUrl } from "./environtment";

const Penyakit = () => {
  const [penyakit, setPenyakit] = useState([]);

  const [name, setName] = useState("No Name");
  const [filename, setFilename] = useState("No File Selected");
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(false);
  const [isAllFilled, setIsAllFilled] = useState(true);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://${apiUrl}:8080/diseases`);
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
    setIsFileValid(_filename.endsWith(".txt"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    name === "" || !isFileValid ? setIsAllFilled(false) : setIsAllFilled(true);

    const reader = new FileReader();
    reader.onload = () => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `http://${apiUrl}:8080/add`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = () => {
        if (xhr.response.code != 200) {
          alert(xhr.response.message);
          return;
        }
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `http://${apiUrl}:8080/diseases`);
        xhr.responseType = "json";
        xhr.onload = () => {
          setPenyakit(xhr.response);
        };
        xhr.send();
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
    <div className="px-[1.75rem] pt-[4.5rem] pb-[3rem] lg:px-[9.75rem] lg:pt-[10rem] lg:pb-[8.5rem]">
      <h1 className="mb-[1.5rem] text-[1.5rem] font-extrabold lg:mb-[3rem] lg:text-[2.25rem]">
        Add Disease
      </h1>
      <form className="mb-[3rem] lg:mb-[4.5rem]">
        <div className="flex flex-col lg:flex-row lg:gap-[7.5rem]">
          {/* NAMA PENYAKIT */}
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
          <div className="mb-[1.5rem] basis-5/12 lg:mb-[3rem]">
            <p className="mb-[1rem] text-[1rem] font-bold font-medium lg:mb-[1.5rem] lg:text-[1.5rem]">
              File DNA
            </p>
            <div
              className={
                `mb-[0.75rem] text-[0.668rem] font-medium lg:mb-[1.125rem] lg:text-[1rem] ` +
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
                className={`!mr-[1rem] !bg-red !py-[0.6rem] !px-[0.8rem] !text-[0.667rem] !font-medium hover:!bg-orange lg:!mr-[1.5rem] lg:!p-[1rem] lg:!text-[1rem]`}
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
              accept=".txt,.text,text/plain"
              onChange={handleFileUpload}
              ref={fileInputRef}
            />
          </div>
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

      <div className="flex flex-col">
        <div className="rounded-t-[0.5rem font-bold] flex bg-red px-[0.667rem] py-[0.667rem] lg:py-[1.125rem] lg:px-[2.25rem]">
          <p className="flex-1 text-[0.667rem] font-medium lg:text-[1.5rem]">
            Nama Penyakit/Kelainan yang Sudah Terdaftar
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Penyakit;
