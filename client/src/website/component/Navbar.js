import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WebContext } from "../context/WebProvider";
import "./Navbar.css";

const StyleNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const Navbar = () => {
  const { handleLoginModal } = useContext(WebContext);
  const [showResp, setShowResp] = useState(false);
  return (
    <>
      <div className="Navbar">
        <img
          className="Navbar-logo"
          src="image/logo.png"
          alt="logo-d2uservice"
        />

        <div className="Navbar-menu">
          <ul>
            <li>
              <StyleNavLink to="/home">หน้าหลัก</StyleNavLink>
            </li>
            <li>
              <StyleNavLink to="/import-service">
                บริการนําเข้าสินค้า
              </StyleNavLink>
            </li>
            <li>
              <StyleNavLink to="/our-service">บริการของเรา</StyleNavLink>
            </li>
            <li>
              <StyleNavLink to="/contact-us">ติดต่อเรา</StyleNavLink>
            </li>
          </ul>
        </div>

        <div className="Navbar-sign">
          <a href="/#" onClick={() => handleLoginModal()}>
            เข้าสู่ระบบ
          </a>{" "}
          | <a href="/#">ลงทะเบียน</a>
        </div>

        <div className="Navbar-bar">
          <button
            className=""
            type="button"
            onClick={() => setShowResp(!showResp)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div className={`Navbar-menu_resp ${showResp && "show"}`}>
        <ul>
          <li>หน้าหลัก</li>
          <li>บริการนําเข้าสินค้า</li>
          <li>บริการของเรา </li>
          <li>ติดต่อเรา</li>
          <li>ลงทะเบียน</li>
          <li onClick={() => handleLoginModal()}>เข้าสู่ระบบ</li>
        </ul>
      </div>
    </>
  );
};
