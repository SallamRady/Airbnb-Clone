const imageDownloader = require("image-downloader");
const path = require("path");

module.exports.uploadPhotoByLink = (req, res, next) => {
  let { url } = req.body;
  let arr = url.split("/"),
    len = arr.length;
  let fileName = Date.now().toString() + "_" + arr[len - 1];

  imageDownloader
    .image({
      url,
      dest: path.join(__dirname, "..", "public", fileName),
    })
    .then(() => {
      let response = {
        status: "success",
        data: { fileName },
      };
      return res.status(201).json(response);
    })
    .catch((err) => {
      let response = {
        status: "error",
        error: err,
      };
      console.error("Error in Upload file By Link :", err);
      return res.status(500).json(response);
    });
};

module.exports.uploadImages = (req, res, next) => {
  let images = req.files,
    uploadedFiles = [];
  for (let i = 0; i < images.length; i++) {
    let { filename } = images[i];
    uploadedFiles.push(filename);
  }
  return res.status(201).json(uploadedFiles);
};
