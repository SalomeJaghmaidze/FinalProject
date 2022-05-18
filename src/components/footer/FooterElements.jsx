import styled from 'styled-components'


export const Container = styled.footer`
 position: absolute; 
 bottom:0;
 width:100%;   
 background:#3C78DC;
 padding: 70px 0;
 display: flex;
 justify-content: space-around;
`

export const Row = styled.div`
 display: flex;
 flex-wrap: wrap;
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
`

export const Col = styled.div`
 padding: 0 35px;

 @media screen and (max-width: 640px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
}

@media (min-width: 641px) and (max-width: 1007px){
    width: 50%;
}
`

export const Header = styled.h4`
 font-size: 18px;
 color:  #fff;
 margin-bottom: 10px;
 font-family: 'Poppins', sans-serif;
`

export const List = styled.ul`
 list-style-type: none;
`

export const Item = styled.li`
 margin: 10px 0;
`


