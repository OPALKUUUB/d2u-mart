import React, { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
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
            <li className="active">หน้าหลัก</li>
            <li>บริการนําเข้าสินค้า</li>
            <li>บริการของเรา </li>
            <li>ติดต่อเรา</li>
          </ul>
        </div>

        <div className="Navbar-sign">
          <a href="/#">เข้าสู่ระบบ</a> | <a href="/#">ลงทะเบียน</a>
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
          <li>เข้าสู่ระบบ</li>
        </ul>
      </div>
    </>
  );
};
