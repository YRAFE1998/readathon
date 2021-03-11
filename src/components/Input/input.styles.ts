import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";
export const InputStyleComponent = styled.div`
padding : 24px 25px 23px;
border-radius: 7px;
border: solid 1px #e5e3e9;
background-color: #ffffff;
display: flex;
position: relative;
align-items: center;
.dateIcon{
  position: absolute;
  right: 25px;
  z-index: 0;
}
.react-datepicker-wrapper{
  width: 100%;

}
.react-datepicker-wrapper{
  input{
    width: 100%;
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
}
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
     &:invalid::-webkit-datetime-edit {
      color: ${ThemeColor.grayPlaceHolder} !important;
      font-weight: normal !important; 
    } 
    
 }
 
 .input-file{
    width: 100px;
    height: 100px;
    margin: 0 7px 10px;
    padding: 37px;
    border-radius: 50px;
    border: solid 1px #e5e3e9;
    background-color: #ffffff;
    margin: auto;
    position: relative;
 }
 .delteIcon{
    position: absolute;
    top: 0px;
    left: 80px;
    padding: 3px 6px 6px 7px;
    box-shadow: 0 0 5px 0 rgb(255 0 0 / 11%);
    background-color: #fff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
 }
 .imageUpload{
     width: 100%;
     height: 100%;
     object-fit: cover;
     margin: auto
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

export const MaxSizeStyle = styled.div`
 color: ${ThemeColor.colorError};
margin-bottom: 10px;
 margin-top: 10px;
 font-size: 13px;
 font-weight: normal;
 font-stretch: normal;
 font-style: normal;
 line-height: normal;
 letter-spacing: normal;
 text-align: center;
 color: #666666;
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

export const TextAreaStyle = styled.textarea`
height: 140px;

margin: 10px 0 0;

padding: 20px 3px 60px 20px;

border-radius: 7px;

border: solid 1px #e5e3e9;

background-color: #ffffff;
&::-webkit-scrollbar-track {
    padding: 2px 0;
  }
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d8d8d8;
  }
`