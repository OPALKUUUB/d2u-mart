import React, { useState } from "react";
import {
  Dropdown,
  IconDropdown,
  ImgLogo,
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
} from "./Navbar.style";
import { Link } from "react-router-dom";
import LogoImg from "../image/logo_none.png";
import { HiChevronDoubleDown } from "react-icons/hi";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
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
        <NavbarRight onClick={() => setDropdown(!dropdown)}>
          <div>
            <h5>Username</h5>
            <p>150 คะแนน</p>
          </div>
          <IconDropdown rotate={dropdown ? 1 : 0}>
            <HiChevronDoubleDown />
          </IconDropdown>
        </NavbarRight>
      </NavbarContainer>
      <Dropdown active={dropdown}>
        <ul>
          <li>ตะกร้า</li>
          <li>ประวัติการสั่งสินค้า</li>
          <li>ติดตามสินค้า</li>
          <li>ชำระเงิน</li>
          <li>จัดการโปรไฟล์</li>
        </ul>
      </Dropdown>
    </>
  );
};
