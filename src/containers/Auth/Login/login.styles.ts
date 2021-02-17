import styled from "styled-components";
import { ThemeColor } from "../../../utils/colors";
export const LoginStyles = styled.div`
.formContainer{
    
}
.inputSpaces{
    margin-bottom: 20px;
}
.btnSpaces{
    margin: 60px 0px;
}
.link{
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.88;
    letter-spacing: normal;
    color: ${ThemeColor.red};
    margin-top: 25px;
}
.subHeaderAuth{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${ThemeColor.grayColor};
    margin-bottom: 10px;
    margin-top: 10px;
}
`;