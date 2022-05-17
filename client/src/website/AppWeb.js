import React from "react";
import { Header } from "./component/Header";
import ImageSlider from "./component/ImageSlider";
import { Navbar } from "./component/Navbar";
import { WebProvider } from "./context/WebProvider";

const AppWeb = () => {
  return (
    <WebProvider>
      <Navbar />
      <Header />
      <ImageSlider />
    </WebProvider>
  );
};

export default AppWeb;
