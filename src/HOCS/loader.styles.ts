import styled from "styled-components";
import { ThemeColor } from "../utils/colors";
export const LoaderStyles = styled.div`
position: absolute;
width: 100%;
text-align: center;
display: flex;
justify-content: center;
z-index: 11;
flex-direction: column;
align-items: center;
height: 100%;
.loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #f55b6f;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;