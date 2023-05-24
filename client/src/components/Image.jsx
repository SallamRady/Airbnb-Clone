import React from "react";

export const Image = ({ src, ...options }) => {
  src = src && src.includes("https://") ? src : "http://localhost:2030/" + src;
  return <img {...options} src={src} />;
};
