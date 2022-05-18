import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: auto;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
 padding: 2px 16px;
`

export const Card = styled.div`
 height:auto;
 margin: 10px
 width: 50%;
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 transition: 0.3s;
 display: flex;
 padding: 10px;
 margin-bottom: 20px;

 &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export const CardInfo = styled.div`

`

export const CardTitle= styled.h1`

`
export const CardDescription = styled.p`

`

export const Image = styled.img`
width: 100px;
margin: 10px;
`

export const CardImgSpace = styled.div`

`
