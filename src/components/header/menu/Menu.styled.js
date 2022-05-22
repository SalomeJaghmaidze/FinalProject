import styled from 'styled-components'
import { Link as Link } from 'react-router-dom'
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #3C78DC;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 640px) {
      width: 100%;
    }

    @media (max-width: 1008px) {
        width: 70%;
      }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 640px) {
      font-size: 1.5rem;
      text-align: center;
    }
     
    @media (max-width: 1008px) {
        font-size: 4.5rem;
        margin-left: 30px;
      }

    &:hover {
      color: #343078;
    }
  }
`

export const LinkNav = styled(Link)`
   font-size: 14px;
   color: white;
`

export const Page = styled.h1`
   font-size: 16px;
   color: white;
`