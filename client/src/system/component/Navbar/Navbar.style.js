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

export const ImgLogo = styled.img`
  width: 180px;
`;
