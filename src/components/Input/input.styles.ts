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
`;