import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";
export const CampaginDashboardStyles = styled.div`
margin: 50px 0px;
.header{
    font-family: SourceSansPro;

    font-size: 27px;
  
    font-weight: 600;
  
    font-stretch: normal;
  
    font-style: normal;
  
    line-height: 1;
  
    letter-spacing: normal;
  
    color: ${ThemeColor.red};
    margin-bottom: 20px;
}
.date{
    font-family: SourceSansPro;

    font-size: 20px;
  
    font-weight: normal;
  
    font-stretch: normal;
  
    font-style: normal;
  
    line-height: normal;
  
    letter-spacing: normal;
  
    color: ${ThemeColor.grayColor};
    span{
        color: ${ThemeColor.black};
    }
}
`;