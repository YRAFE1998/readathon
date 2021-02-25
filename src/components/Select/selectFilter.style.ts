import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";
export const SelectFilterStyleComponent = styled.div`
.filter-placeholder{
    width: 250px;
    margin: 5px ​0 7px 2px;
    padding: 15px 20px 15px 15px;
    border-radius: 4px;
    border: solid 1px ${ThemeColor.borderColor};
    background-color: #fff;
    outline: none;
box-shadow: none;
    &::after{
        display: none;
    }
    p{
        margin: 0px;
        font-family: SourceSansPro;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.07;
        letter-spacing: normal;
        color: ${ThemeColor.grayPlaceHolder};
    }

}
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle{
    border: solid 1px ${ThemeColor.borderColor};
background-color: #fff;
outline: none;
box-shadow: none;
&::after{
    display: none;
}
    
}
.dropdown-menu.show{
width: 100%;
padding: 0px;
}
.filter-search-container{
    padding: 15px 15px 15px 14px;
    background-color: #f4f5f9;
    margin-bottom: 20px;

    input{
        border: none;
    }
}
.search-icon{
    width:100%;
    background-color: #fff;
    padding: 5px 10px;
}
.item-filter{
    padding: 7px 15px;
   
}
.items-container{
    height: 180px;
    overflow: auto;
}
.label-name{
    margin: 0px 10px;
    font-family: SourceSansPro;
    font-size: 15px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #929292;
}
.border-bottom{
    margin: 20px 0 15px;
    background-color: #e5e3ea !important;
}
.filter-btn{
    padding: 7px 23px;
    margin-bottom: 15px;
}
.dropdown-item.active, .dropdown-item:active{
background-color: #fff;
}
.dropdown-item{
    &:hover{
        background-color: #fff;

    }
}

`;


