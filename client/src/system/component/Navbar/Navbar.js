import React, { useState } from "react";
import {
  Dropdown,
  IconDropdown,
  ImgLogo,
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
  NavMenu,
  StyledNavLink,
} from "./Navbar.style";
import LogoImg from "../image/logo_none.png";
import { HiChevronDoubleDown } from "react-icons/hi";
import useToken from "../../../hook/useToken";

export const Navbar = () => {
  const { logout } = useToken();
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <NavMenu>
            <StyledNavLink to="/home">Home</StyledNavLink>
            <span>|</span>
            <StyledNavLink to="/contact-us">Contact Us</StyledNavLink>
            <span>|</span>
            <StyledNavLink to="/auction">ประมูล</StyledNavLink>
            <span>|</span>
            <StyledNavLink to="/mart">Mart</StyledNavLink>
            <span>|</span>
            <StyledNavLink to="/our-service">บริการของเรา</StyledNavLink>
          </NavMenu>
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
          <li onClick={logout}>ออกจากระบบ</li>
        </ul>
      </Dropdown>
    </>
  );
};
