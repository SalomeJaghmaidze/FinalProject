import styled, {createGlobalStyle, css}  from 'styled-components'
export const GlobalStyle = createGlobalStyle
export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 99999;
`

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 99999;
    background: rgba(49,49,49,0.8);
`

export const Form = styled.form`
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
    background-color: #FFF;
	border-radius: 10px;
    padding: 20px;
	box-shadow: 0 10px 20px 0 rgba(#999, .25);
        @media screen and (max-width: 640px) {
            width: 450px;
        }

        @media (max-width: 1007px){
            width: 500px;
          }

          @media (max-width: 415px){
            width: 180px;
          }
`
export const Content = styled.div`
   display: flex;
   flex-direction: column;
   padding: 14px;
   border-top: 2px solid #F1F1F1;
   border-bottom: 2px solid #F1F1F1;
   line-height: 3.4;
   padding-bottom: 25px;
`
export const Header = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 10px 0;
`

export const Heading = styled.h1`
   font-size: 18px;
   font-family: 'Poppins', sans-serif;
`

export const LabelTitle = styled.label`
   font-size: 14px;
   color: #B8B8B8;
   font-family: 'Poppins', sans-serif;
`

export const InputTitle = styled.input`
    border: none;
    border-bottom: 2px solid #DEDEDE;
`

export const LabelDescription = styled.label`
    font-size: 14px;
    color: #B8B8B8;
    font-family: 'Poppins', sans-serif;
`

export const InputDescription = styled.input`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 1px solid black;
    background-color: #f8f8f8;
    resize: none;
` 

export const LabelImage = styled.label`
    font-size: 14px;
    color: #B8B8B8;
    font-family: 'Poppins', sans-serif;
`

export const InputFile = styled.input`

`

export const InputImage = styled.input`

`

export const Close = styled.span`
    font-size: 30px;
    font-weight: 600;
    display: inline-block;
    transform: rotate(45deg);
    cursor: pointer;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;
`

export const SaveBtn = styled.button`
    background-color: #347AB6;
    font-size: 12px;
    color: white;
    border: 2px solid #347AB6; 
    padding: 15px 24px;
    border-radius: 4px;
`

export const CloseBtn = styled.button`
    background-color: white;
    color: black;
    font-size: 12px;
    border: 2px solid #D5D5D5; 
    padding: 15px 24px;
    border-radius: 4px;
    margin-right: 10px;
`



