import React from "react";
import { ImgLogo, NavbarContainer, NavbarLeft } from "./Navbar.style";
import { Link } from "react-router-dom";
import LogoImg from "../image/logo_none.png";

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <p>
            <Link to="/home">Home</Link> |{" "}
            <Link to="/contact-us">Contact Us</Link> |{" "}
            <Link to="/auction">ประมูล</Link> | <Link to="/mart">Mart</Link> |{" "}
            <Link to="/our-service">บริการของเรา</Link>
          </p>
          <ImgLogo src={LogoImg} alt="logo-d2uservice" />
        </NavbarLeft>

        <div>
          <h5>Username</h5>
          <p>150 คะแนน</p>
        </div>
      </NavbarContainer>
      <div>
        <ul>
          <li>ตะกร้า</li>
          <li>ประวัติการสั่งสินค้า</li>
          <li>ติดตามสินค้า</li>
          <li>ชำระเงิน</li>
          <li>จัดการโปรไฟล์</li>
        </ul>
      </div>
    </>
  );
};
