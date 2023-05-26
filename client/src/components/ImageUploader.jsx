import React, { useState } from "react";
import axois from "axios";
import { Image } from "./Image";

const ImageUploader = ({ addedPhotos, setAddedPhotos }) => {
  const [url, setUrl] = useState("");

  const uploadImageViaURL = (e) => {
    e.preventDefault();
    if (url.trim().length == 0) return;
    axois
      .post("/upload-image-via-url", { url })
      .then((res) => {
        let { fileName } = res.data.data;
        setAddedPhotos((prev) => {
          return [...prev, fileName];
        });
        setUrl("");
      })
      .catch((err) => {
        console.log("error =>", err);
      });
  };
  const uploadImages = (e) => {
    e.preventDefault();
    let files = e.target.files;
    let data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("images", files[i]);
    }
    console.log("files : ", files);
    axois
      .post("/upload-images", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setAddedPhotos((prev) => {
          return [...prev, ...response.data];
        });
      })
      .catch((err) => {
        console.log("Error :", err);
      });
  };
  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={"Add using a link ....jpg"}
        />
        <button
          onClick={uploadImageViaURL}
          className="bg-gray-200 px-4 rounded-2xl"
        >
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((imgSrc) => {
            return (
              <Image
                key={imgSrc}
                className="h-32 rounded-2xl w-full object-cover"
                src={imgSrc}
                alt=""
              />
            );
          })}
        <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadImages}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
};

export default ImageUploader;
