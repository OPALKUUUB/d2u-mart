import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import Home from "../website/page/Home";
import Mart from "../website/page/Mart";


export const AppSystem = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/yahoo" element={<Auction />} />
        <Route path="/mart" element={<Mart />} />
        <Route path="/our-service" element={<OurService />} />
      </Routes>
    </>
  );
};

// const Home = () => {
//   return <h1 style={{ margin: "300px" }}>home</h1>;
// };

const ContactUs = () => {
  return <h1 style={{ margin: "300px" }}>Contact Us</h1>;
};

const Auction = () => {
  return <h1 style={{ margin: "300px" }}>Auction</h1>;
};

//const Mart = () => {
//  return (
//    <CardMart />
//  );
//};

const OurService = () => {
  return <h1 style={{ margin: "300px" }}>Our Service</h1>;
};
