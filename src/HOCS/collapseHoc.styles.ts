import styled from "styled-components";
import { ThemeColor } from "../utils/colors";
export const CollapseStyles = styled.div`
padding-top: 35px;

.collapseHeader{
    display: flex;
    justify-content: space-between;
    padding-bottom: 35px;
    align-items: center;
    width: 100%;
}
.header{
    font-family: SourceSansPro;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.83;
    letter-spacing: normal;
    color: #f55b6f;
}
.stepContainer{
    margin-inline-end:  20px;
    @media (max-width: 1000px) {
        margin-inline-end:  10px;


      }
    
}
.stepCounter{
    font-family: SourceSansPro;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: normal;
    color: ${ThemeColor.red};
    padding: 9px 10px 9px 11px;
    border: solid 1px #f55b6f;
    background-color: #ffffff;
    border-radius: 50%;
}
.border{
    border-inline-start: 1px solid black;
    height: 100%;
    margin: 0px 15px
}
.nextStep{
    font-family: SourceSansPro;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #775c4d;
    text-align: end;
    margin-bottom: 5px;
    text-decoration: underline;
}
`;