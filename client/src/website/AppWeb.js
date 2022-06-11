import { Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./component/Navbar";
import { WebProvider } from "./context/WebProvider";
import Home from "./page/Home";
import { MartShowTest } from "./page/Mart/MartShowTest";

const AppWeb = () => {
  return (
    <WebProvider>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/import-service" element={<ImportService />} />
        <Route path="/our-service" element={<OurService />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/test" element={<MartShowTest />} />
      </Routes>
    </WebProvider>
  );
};

const ImportService = () => {
  return <h1 style={{ margin: "300px" }}>Import Service</h1>;
};

const OurService = () => {
  return <h1 style={{ margin: "300px" }}>Our Service</h1>;
};

const ContactUs = () => {
  return <h1 style={{ margin: "300px" }}>Contact Us</h1>;
};
export default AppWeb;
