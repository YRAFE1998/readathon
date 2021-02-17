import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";
export const AuthModule = styled.div`
display: flex;
  .flexHeaderDiv{
    display: flex;
     justify-content: space-between; 
     align-items: center; 
     padding: 35px
  }
  .logoImage{
    transform: rotate(270deg);
     width: 90px;
     height: 56px;
     object-fit: contain
  }

  .p-r-l-35{
      padding: 0px 35px;
  }
  .imageAuth{
    width: 100%;
     height: 100%;
     object-fit: cover;
     
  }
  .auth-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        padding: 0px 15%

  }
  .btn-route{
    padding: 10px 20px;
    border-radius: 5px;
    border: solid 1px ${ThemeColor.grayLight};
    background-color: ${ThemeColor.greySecondary};
    font-family: SourceSansPro;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: center;
    color: ${ThemeColor.red};  
  }
  .footer{
    position: absolute;
    left: 60px;
    right: 60px;
    bottom: 0px;
      opacity: 0.3;
      font-family: SourceSansPro;
      font-size: 15px;
      font-weight: 600; 
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #000000;
  }
`;