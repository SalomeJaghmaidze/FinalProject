import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: 50px auto;
 display: grid;
 grid-template-columns: 1fr 1fr;
 column-gap: 50px;

 @media (max-width: 1007px){
  grid-template-columns: 1fr;
}
`

export const Card = styled.div`
 max-height:500px;
 margin: 10px
 width: 50px;
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 transition: 0.3s;
 display: flex;
 padding: 20px;
 margin-bottom: 20px;

 &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
}
`

export const CardInfo = styled.div`
 width: 70%;

 @media screen and (max-width: 640px) {
  width: 100%;
}
`

export const CardTitle= styled.h1`
 font-size: 25px;
 margin-bottom: 5px;
 font-family: 'Poppins', sans-serif;
`
export const CardDescription = styled.p`
 font-size: 18px;
 font-family: 'Poppins', sans-serif;
`

export const Image = styled.img`
width: 180px;
margin: 10px;
`

export const CardImgSpace = styled.div`
 display: flex;
 flex-direction: column;
 align-items: stretch;
`

export const Cardview = styled.p`
 text-align: center;
 margin-top: 90px;
`
