import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";
export const HeaderStyles = styled.div`

.navHeader{
  width: 100%; 

  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff !important;
  min-height: 120px;
  padding: 0px 40px;
  align-items: center
}
.right-nav{
  align-items: center
}
.mr-auto{
  margin-inline-start: 20px
}
.item{
  font-family: SourceSansPro;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${ThemeColor.colorBadge};
  margin: 0px 20px;
  a{
    color: ${ThemeColor.colorBadge};
    &:active: {
      color: ${ThemeColor.colorBadge};
    }
  }
}
.active{
  color: ${ThemeColor.red} !important;
  .dropdown-toggle{
    color: ${ThemeColor.red} !important;
  }
}
.logoImage{

    width: 90px;
    height: 72px;
    object-fit: contain
}
.searchContainer{
    margin-inline-start: 100px;
    @media (max-width: 1000px) {
        margin-inline-start: 0px;
      }
    display: flex;
    align-items: center;
    i{
        color: ${ThemeColor.red};
        margin-inline-end: 30px;
        font-size: 22px;
        @media (max-width: 1000px) {
            margin-inline-end: 10px;
          }
    }
    input{
        border: none;
        &::placeholder{
            color: ${ThemeColor.black} !important;
            opacity: .5;
            font-size: 16px;
            font-family: SourceSansPro;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;      
            letter-spacing: normal;
         
        }
    }
}
.right-nav{
  @media (max-width: 1000px) {
    // display: none;
  }
}
.notfication-container{
margin-inline-end: 40px;
@media (max-width: 1000px) {
    margin-inline-end: 10px;
  }
}

.logoSearch{
    @media (max-width: 1000px) {
        width: 66%;
      }
}
`;

export const PorfileDropDownStyles = styled.div`
margin: 0 0 0 35px;
padding: 13px;
border: solid 1px #e5e3e9;
background-color: #f1f3f5;
border-radius: 50%;
height: 70px;
width: 70px;
@media (max-width: 1000px) {
    margin: 0px 10px;
  }
  .dropdown{
    width: 100%;
  }
  .dropdown-menu{
    right: 0px !important;
    left: auto !important;
    z-index: 10;
    position: absolute;
  }
  .dropdown-toggle{
    width: 100%;
    background: transparent;
    outline: none;
    border: none;
    &:focus{
      box-shadow: none !important;
      background: transparent;
    }
    &:active{
      box-shadow: none !important;
      background: transparent !important;
    }
    &::after{
      display: none;
    }
  }
`;
