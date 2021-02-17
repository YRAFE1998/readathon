import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";
export const InputStyleComponent = styled.div`
padding : 24px 25px 23px;
border-radius: 7px;
border: solid 1px #e5e3e9;
background-color: #ffffff;
display: flex;
align-items: center;
 .input{
     width: 94%;
     border: none;
     font-family: SourceSansPro;
     font-size: 20px;
     font-weight: bold;
     font-stretch: normal;
     font-style: normal;
     line-height: 0.75;
     letter-spacing: normal;
     color: ${ThemeColor.black};
     outline: none !important;

     &::placeholder{
         color: ${ThemeColor.grayPlaceHolder} !important;
         font-weight: normal !important; 
     }

    
 }
 .input-file{
     color: ${ThemeColor.grayPlaceHolder} !important;
     font-weight: normal !important; 
     height: 20px;
     position: relative;
     label{
        position: absolute;
        left: 100%;
        right: 100%;
        top: 0px;
     }
 }
 .typeHeadContainer{
    border-inline-end: 1px solid ${ThemeColor.borderColor};
     border-radius: 0px;
     width: 70px;
     display: flex;
     justify-content: center;
     flex-direction: column;
     margin: 19px 20px;
     padding: 19px 0px;
     
 }
 .typeHead{
    display: block;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #666666;
    border: 0px;
    box-shadow: none;
    height: 0px;
    text-align: center;
    display: flex;
     justify-content: center;
     flex-direction: column;
 }
`;

export const InputValidationStyle = styled.div`
 color: ${ThemeColor.colorError};
 font-size: 16px;
 margin-top: 10px
`;

export const InputPalceholderStyle = styled.div`
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: #666666;
margin-bottom: 10px;
`;