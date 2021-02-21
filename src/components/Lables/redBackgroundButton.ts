import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";

export const RedBackgroundButton = styled.button`
margin: 0 0 8px 15px;

padding: 12px;

border-radius: 4px;

background-color: ${ThemeColor.red};
font-family: SourceSansPro;

font-size: 14px;

font-weight: bold;

font-stretch: normal;

font-style: normal;

line-height: 1.07;

letter-spacing: normal;

text-align: center;
color: #ffffff;
border: 1px solid ${ThemeColor.red}
`;