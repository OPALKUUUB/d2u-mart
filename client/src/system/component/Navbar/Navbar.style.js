import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  z-index: 60;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  background-color: #dbbba4;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const NavbarLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const NavMenu = styled.div`
  display: flex;
  column-gap: 20px;
  span {
    color: white;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const NavbarRight = styled.div`
  cursor: pointer;
  display: flex;
  &:last-child {
    align-items: center;
    column-gap: 10px;
  }
`;

export const ImgLogo = styled.img`
  width: 180px;
`;

export const Dropdown = styled.div`
  position: fixed;
  z-index: 10;
  top: ${(props) => (props.active ? "120px" : "-230px")};
  right: 0;
  background-color: white;
  transition: all 0.2s ease;
  ul {
    list-style-type: none;
  }
  ul li {
    padding: 15px 30px;
    cursor: pointer;
  }
  ul li:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
  }
  ul li:last-child {
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  }
`;

export const IconDropdown = styled.div`
  float: right;
  transform: rotate(0deg);
  transition: all 0.3s ease-out;
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : "")};
`;
