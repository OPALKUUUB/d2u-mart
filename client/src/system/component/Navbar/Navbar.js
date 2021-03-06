import React, { useEffect, useRef, useState } from "react";
import {
  AuctionButton,
  AuctionDropdown,
  AuctionWrapper,
  AuctionWrapperItem,
  Dropdown,
  IconAuctionDropdown,
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
import { AiFillCaretDown } from "react-icons/ai";
import useToken from "../../../hook/useToken";

export const Navbar = () => {
  const { logout } = useToken();
  const dropdownRef = useRef(null);
  const buttonDropdownRef = useRef(null);
  const auctionDropdownRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  const [auctionDropdown, setAuctionDropdown] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        dropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        if (!buttonDropdownRef.current.contains(e.target)) {
          setDropdown(false);
        }
      }
      if (
        auctionDropdown &&
        auctionDropdownRef.current &&
        !auctionDropdownRef.current.contains(e.target)
      ) {
        setAuctionDropdown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropdown, auctionDropdown]);
  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <NavMenu>
            <StyledNavLink to="/home">Home</StyledNavLink>
            <span>|</span>
            <AuctionWrapper>
              <AuctionWrapperItem
                onClick={() => setAuctionDropdown(!auctionDropdown)}
              >
                <AuctionButton>
                  <StyledNavLink to="/yahoo">
                    <span>ประมูล</span>
                  </StyledNavLink>
                </AuctionButton>
                <IconAuctionDropdown rotate={auctionDropdown ? 1 : 0}>
                  <AiFillCaretDown className="icon" />
                </IconAuctionDropdown>
              </AuctionWrapperItem>
              <AuctionDropdown
                active={auctionDropdown}
                ref={auctionDropdownRef}
              >
                <ul>
                  <li>
                    <StyledNavLink to="/yahoo/auction">Auciton</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="/yahoo/order">Order</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="/yahoo/payment">Payment</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="/yahoo/history">History</StyledNavLink>
                  </li>
                </ul>
              </AuctionDropdown>
            </AuctionWrapper>
            <span>|</span>
            <StyledNavLink to="/mart">Tracking</StyledNavLink>
            <span>|</span>
            <StyledNavLink to="/mart">Mart</StyledNavLink>
            <span>|</span>
            <StyledNavLink to="/our-service">บริการของเรา</StyledNavLink>
            <span>|</span>
            <StyledNavLink to="/our-service">ชำระค่าบริการ</StyledNavLink>
            <span>|</span>
            <StyledNavLink to="/contact-us">Contact Us</StyledNavLink>
          </NavMenu>
          <ImgLogo src={LogoImg} alt="logo-d2uservice" />
        </NavbarLeft>
        <NavbarRight
          onClick={() => setDropdown(!dropdown)}
          ref={buttonDropdownRef}
        >
          <div>
            <h5>Username</h5>
            <p>150 คะแนน</p>
          </div>
          <IconDropdown rotate={dropdown ? 1 : 0}>
            <HiChevronDoubleDown />
          </IconDropdown>
        </NavbarRight>
      </NavbarContainer>
      <Dropdown active={dropdown} ref={dropdownRef}>
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
