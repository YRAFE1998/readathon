import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";
export const CardStyles = styled.div`
min-height: 284px;
margin: 40px 0px;
padding: 40px 20px;
border-radius: 6px;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.09);
background-color: #ffffff;
width: 100%;

.header{
    font-family: SourceSansPro;
    font-size: 24px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.42;
    letter-spacing: -0.9px;
    text-align: center;
    color: #2b3037;
}
.sub-header{
    opacity: 0.49;
    font-family: SourceSansPro;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: -0.9px;
    text-align: center;
    color: #576169;
}
.complated{
    margin-top: -50px;
    font-family: SourceSansPro;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.5px;
    text-align: center;
    color: #7c868f;
}
`;