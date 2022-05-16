import React from "react";
import { Header } from "./component/Header";
import ImageSlider from "./component/ImageSlider";
import { Navbar } from "./component/Navbar";

const AppWeb = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ImageSlider />
    </>
  );
};

export default AppWeb;
