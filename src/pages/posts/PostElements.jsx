import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  

  @media (max-width: 1007px) {
    grid-template-columns: 1fr;
  
  }
`;

export const Card = styled.div`
 max-height:500px;
 margin: 10px
 width: 50px;
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 transition: 0.3s;
 display: flex;
 position: relative;
 padding: 20px;
 margin-bottom: 20px;
 flex-direction: column;

 &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
}
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1007px) {
    margin-bottom: 10px;
  }
`;

export const CardDetails = styled.div``;

export const CardTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 5px;
  font-family: "Poppins", sans-serif;
`;
export const CardDescription = styled.p`
  font-size: 15px;
  font-family: "Poppins", sans-serif;
`;

export const Image = styled.img`
  width: 180px;
  margin: 10px;
`;

export const CardImgSpace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (max-width: 640px) {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
`;

export const Cardview = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;

export const CardButton = styled.button`
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  font-weight: bold;
  position: absolute;
  bottom: 15px;
  font-size: 15px;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 99999;
  overflow-y: scroll;
  max-height: 100vh;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 99999;
  background: rgba(49, 49, 49, 0.8);
  zindex: 1000;
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  border-radius: 3px;
  max-width: 900px;
  width: 600px;
  min-width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(#999, 0.25);

  @media screen and (max-width: 640px) {
    width: 450px;
  }

  @media (max-width: 1007px) {
    width: 500px;
  }

  @media (max-width: 415px) {
    width: 180px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 2px solid #f1f1f1;
  line-height: 4;
  padding-bottom: 25px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 15px;
  font-family: "Poppins", sans-serif;
`;

export const Close = styled.span`
  font-size: 30px;
  font-weight: 600;
  display: inline-block;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const Img = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  line-height: 1.5;
`;
