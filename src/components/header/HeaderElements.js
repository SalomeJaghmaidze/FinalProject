import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const NavHeader = styled.div`
@media screen and (max-width: 1008px) {
    display: flex;
    justify-content: center;
}
`
export const Nav = styled.nav`
 height: 50px;
 width: 90%;
 display: flex;
 justify-content: flex-start;
 padding: 0.5rem;

 @media screen and (max-width: 1008px) {
    position: relative;
    display: flex;
    justify-content: center;
}
` 

export const NavLink = styled(Link)`
 color: #000000;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 10px 30px;
 height: 100% auto;
 cursor: pointer;
 width: 200px;
 justify-content: center;
 font-size: 11px;

 &.active {
     background-color: #2B8A44;
     color: #fff;
     border-radius: 30px;
 }
`

export const Bars = styled(FaBars)`
 display:none;
 color: black;

 @media screen and (max-width: 1008px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    margin-top: 15px;
    position: fixed;
}
`

export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 width: 90%;

 @media screen and (max-width: 1008px) {
    display: none;
 }
`

