import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
  bottom: 0;
  background: #2C2640;
  // border-top-left-radius: 15px;
  // border-top-right-radius: 15px;
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
  width: 100wh;
  // margin-left: -5vw;
  // margin-right: -5vw;

  img {
    width: 80px;
  }

  p {
    text-align: center;
    color: grey;
    margin-top: 50px;
    margin-bottom: 20px;
  }

`;

export const Content = styled.div`
 width: 90%;
`

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  line-weight: 1.5;
  > * {
    &:last-child ul {
      display: flex;
      flex-direction: row;

      @media screen and (max-width: 640px) {
        justify-content: center;
      }
    }

    &:last-child li {
      margin-right: 10px;
    }
  }
`;

export const Col = styled.div`
  padding: 0 35px;

  @media screen and (max-width: 640px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    width: 50%;
  }
`;

export const Header = styled.h4`
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
`;

export const List = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  text-align: left;
  padding: 2px 1px 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
`;
