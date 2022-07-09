import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  bottom: 0;
  background: #2C2640;
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
  // margin-left: -5vw;
  // margin-right: -5vw;

  img {
    width: 80px;
  }

  p {
    text-align: center;
    color: #AF9377;
    margin-top: 50px;
    margin-bottom: 20px;
  }

`;

export const Content = styled.div`
 width: 90%;
 display: flex;
 flex-direction: column;
 margin: auto;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
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
  @media screen and (max-width: 640px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    width: 50%;
  }
`;

export const Info = styled.div`

width: 50%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const Header = styled.h4`
  font-size: 25px;
  border-bottom: 1px solid #fff;
  color: #AF9377;
  text-align: center;
  padding-bottom: 10px;
  text-transform: uppercase;
  margin-bottom: 40px;
  font-family: "Poppins", sans-serif;
  letter-spacing: 8px;
`;

export const List = styled.ul`
width: 200px;
  list-style-type: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-align: left;
  padding: 2px 1px 0;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
`;
