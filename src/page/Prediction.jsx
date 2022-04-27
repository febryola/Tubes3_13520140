import React, { useRef, useState } from "react";
import { Button } from "../Utilities";
import hiasan from "../images/hiasan.png";

const Prediksi = () => {
  const listPenyakit = ["Select Disease","Autisme","Cancer","Diabetes","Hipertensi",];
  const [name, setName] = useState("Empty");
  const [penyakit, setPenyakit] = useState(listPenyakit[0]);
  const [filename, setFilename] = useState("Tidak ada berkas yang dipilih");
  const fileInputRef = useRef(null);
  const [isFileValid, setIsFileValid] = useState(false);
  const [isAllFilled, setIsAllFilled] = useState(true);

  var DNA = "";
  const today = new Date();

  const date =
    String(today.getDate()).padStart(2, "0") +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    today.getFullYear();

  const handleUploadFileButton = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFilename(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      DNA = e.target.result;
      fileValidation();
    };
    reader.readAsText(file);
  };

  const fileValidation = () => {
    const regex = /^[AGCT]*$/;
    if (regex.test(DNA)) {
      setIsFileValid(true);
    } else {
      setIsFileValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      name === "Empty" || penyakit === listPenyakit[0] || !isFileValid
        ? setIsAllFilled(false)
        : setIsAllFilled(true);
    }
  };

  return (
    <div className="relative flex flex-col px-[1.75rem] pt-[4.5rem] pb-[3rem] lg:flex-row lg:px-[9.75rem] lg:pt-[10rem] lg:pb-[8.5rem]">
      <div className="mb-[3rem] basis-5/12 lg:mr-[7.5rem] lg:mb-[8.5rem]">
        {/* FORM */}
        <h1 className="mb-[1.5rem] text-[1.5rem] font-extrabold lg:mb-[3rem] lg:text-[2.25rem]">
          Test DNA!
        </h1>
        <form>
          {/* NAME */}
          <div className="mb-[1.5rem] lg:mb-[3rem]">
            <p className="mb-[1rem] text-[1rem] font-medium lg:mb-[1.5rem] lg:text-[1.5rem]">
              Name
            </p>
            <input
              type="text"
              name="nama"
              placeholder="Name.."
              className="w-full rounded-[0.5rem] bg-lightgrey px-[1rem] py-[0.688rem] text-[0.688rem] text-darkgrey lg:px-[1.5rem] lg:py-[1rem] lg:text-[1rem]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* FILE DNA */}
          <div className="mb-[1.5rem] lg:mb-[3rem]">
            <p className="mb-[1rem] text-[1rem] font-medium lg:mb-[1.5rem] lg:text-[1.5rem]">
              File DNA
            </p>
            <div
              className={
                `mb-[0.75rem] text-[0.668rem] font-medium text-darkgrey lg:mb-[1.125rem] lg:text-[1rem] ` +
                (isFileValid || filename === "Tidak ada berkas yang dipilih"
                  ? `text-darkgrey`
                  : `text-red`)
              }
            >
              <p>*Format File .txt</p>
              <p>*File hanya berisi huruf A, C, G, dan/atau T tanpa enter,spasi, dan harus huruf besar</p>
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
              accept=".txt,.text,text/plain"
              onChange={handleFileUpload}
              ref={fileInputRef}
            />
          </div>
          <div className="mb-[1.5rem] lg:mb-[3rem]">
            <p className="mb-[1rem] text-[1rem] font-medium lg:mb-[1.5rem] lg:text-[1.5rem]">
              Disease
            </p>
            <select
              name="penyakit"
              className="w-full rounded-[0.5rem] bg-lightgrey px-[1rem] py-[0.688rem] text-[0.688rem] text-darkgrey lg:px-[1.5rem] lg:py-[1rem] lg:text-[1rem]"
              onChange={(e) => setPenyakit(e.target.value)}
            >
              {listPenyakit.map((item, index) => (
                <option
                  key={index}
                  value={item}
                  className={index === 0 ? "disabled hidden" : ""}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <Button className={`mb-[1rem]  px-[2.25rem] lg:px-[3.625rem]`} onClick={handleSubmit}>
            Result
          </Button>
          <p
            className={
              `text-[0.667rem] font-medium text-red lg:text-[1rem] ` +
              (isAllFilled ? `hidden` : `block`)
            }
          >*Input Can't be empty
          </p>
        </form>
      </div>

      {/* HASIL */}
      <div className="mb-[3rem] basis-6/12">
        <h1 className="mb-[1.5rem] text-[1.5rem] font-extrabold lg:mb-[3rem] lg:text-[2.25rem]">
         Result
        </h1>
        <div className="flex flex-col gap-[1.5rem] lg:gap-[2.25rem]">
          <div className="flex flex-1 flex-row">
            <p className="basis-1/2 text-[1rem] font-semibold lg:text-[1.5rem]">
              Name
            </p>
            <p className="basis-1/2 text-[1rem] text-darkgrey lg:text-[1.5rem]">
              <i>{name === "" ? "Empty" : name}</i>
            </p>
          </div>
          <div className="flex flex-1 flex-row">
            <p className="basis-1/2 text-[1rem] font-semibold lg:text-[1.5rem]">
              Date Test
            </p>
            <p className="basis-1/2 text-[1rem] text-darkgrey lg:text-[1.5rem]">
              <i>
                {name === "" || name === "Empty" ? "Empty" : date}
              </i>
            </p>
          </div>
          <div className="flex flex-1 flex-row">
            <p className="basis-1/2 text-[1rem] font-semibold lg:text-[1.5rem]">
              Disease
            </p>
            <p className="basis-1/2 text-[1rem] text-darkgrey lg:text-[1.5rem]">
              <i>{penyakit === listPenyakit[0] ? "Empty" : penyakit}</i>
            </p>
          </div>
          <div className="flex flex-1 flex-row">
            <p className="basis-1/2 text-[1rem] font-semibold lg:text-[1.5rem]">
              Result
            </p>
            <p className="basis-1/2 text-[1rem] text-darkgrey lg:text-[1.5rem]">
              <i>
                {name === "" || name === "Empty"
                  ? "Empty"
                  : "Click Result to see the result"}
              </i>
            </p>
          </div>
        </div>
      </div>

      <img
        src={hiasan}
        alt=""
        className="absolute right-0 bottom-0 -z-10"
      />
    </div>
  );
};

export default Prediksi;
