import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";

export const RedOutlineButton = styled.button`
margin: 0 15px 8px;

padding: 12px 14px 12px 15px;

border-radius: 4px;

border: solid 1px ${ThemeColor.red};
font-family: SourceSansPro;

font-size: 14px;

font-weight: bold;

font-stretch: normal;

font-style: normal;

line-height: 1.07;

letter-spacing: normal;

text-align: center;

color: ${ThemeColor.red};
background: transparent;
&:focus{
    outline:  none;
border: solid 1px ${ThemeColor.red};
color: ${ThemeColor.red};
background: transparent;
}
`;