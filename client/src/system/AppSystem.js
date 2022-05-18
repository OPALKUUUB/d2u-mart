import React from "react";
import { Route, Routes } from "react-router-dom";
import useToken from "../hook/useToken";
import { Navbar } from "./component/Navbar/Navbar";

export const AppSystem = () => {
  const { logout } = useToken();
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/mart" element={<Mart />} />
        <Route path="/our-service" element={<OurService />} />
      </Routes>

      <button onClick={logout}>logout</button>
    </>
  );
};

const Home = () => {
  return <div>home</div>;
};

const ContactUs = () => {
  return <h1>Contact Us</h1>;
};

const Auction = () => {
  return <h1>Auction</h1>;
};

const Mart = () => {
  return <h1>Mart</h1>;
};

const OurService = () => {
  return <h1>Our Service</h1>;
};
