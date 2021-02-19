import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";

export const SideMenuStyles = styled.div`
margin: 30px 50px 30px 30px;
padding: 50px 0px;
border-radius: 18px;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
background-color: #ffffff;
@media (max-width: 1000px) {
    margin: 20px;
  }
.unOrderList{
    padding: 0px;
    list-style: none;
    .link{
        display: flex;
        align-items: stretch;
        margin-bottom: 50px;
        span{
            margin-inline-start: 50px;
            margin-inline-end: 17px;
        }
        p{
            font-family: SourceSansPro;
            font-size: 16px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #948f90;
            margin: 0px;
            .badge{
                font-family: SourceSansPro;
                background-color: ${ThemeColor.colorBadge};
                padding: 5px 3px;
                margin-inline-start: 6px;
                font-size: 11px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.64;
                letter-spacing: normal;
                color: #ffffff;
            }
        }
    }
}
.active{
    position: relative;
    p{
        color: ${ThemeColor.red} !important;
        width: 100%;
        border-inline-end: 3px solid ${ThemeColor.red};
        border-radius: 2px;
        margin-inline-end: 10px !important;
        .badge{
            background-color: ${ThemeColor.red} !important;
            
        }
    }
}
.footer{
    margin-top: 580px;
    @media (max-width: 1000px) {
        margin-top: 0px;
      }
}
.last{
    margin-bottom: 0px !important;
    
}
`;