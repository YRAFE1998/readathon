import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";
export const CustomsTopLabelStyles = styled.div`
margin-top: 20px;
.header{
    font-family: SourceSansPro;
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.91;
    letter-spacing: normal;
    color: ${ThemeColor.black};
    margin-bottom: 15px;

}
.name{
    font-family: SourceSansPro;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${ThemeColor.red};
    margin-bottom: 10px;

}
.value{
    font-family: SourceSansPro;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: end;
    color: ${ThemeColor.successColor}
}
`;