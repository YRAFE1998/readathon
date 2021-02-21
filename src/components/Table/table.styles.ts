import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";

export const TableStyles = styled.div`
.search-container{
    padding: 15px;  
    border-radius: 4px;
    border: solid 1px ${ThemeColor.borderColor};
    background-color: #ffffff;
    width: 250px;
    margin: 30px 0px 20px;
    display: flex;
    align-items: center;
    input{
        border: none;
    }           
    i{
        color: ${ThemeColor.grayPlaceHolder}
    }
}
.table{
    th{
        font-family: SourceSansPro;
        font-size: 15px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #948f90;
        border: 1px solid ${ThemeColor.borderColor};
        padding: 20px;
    }
    .tr-head{
        background: ${ThemeColor.tableHeadColor}
    }
    .tr-body{
        background: #fff;
        border: 1px solid  ${ThemeColor.borderColor}
    }
    td{
        font-family: SourceSansPro;
        font-size: 15px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${ThemeColor.grayColor};
        padding: 20px;
    }
}
.fa-trash-alt{
    color: ${ThemeColor.red}
}
.pagination{
    margin: 0px 4px;
    border: 1px solid #ececec;
    padding: 6px 6px 6px 7px;
    border-radius: 4px;  
    background-color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: normal;
    text-align: center;
    color: ${ThemeColor.paginationColor};

}
.active{
    background-color: ${ThemeColor.red};
    color: #fff;
}
.m-t-40{
    margin-top: 40px
}
.edit-btn{
    font-family: SourceSansPro;
    font-size: 15px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${ThemeColor.red} !important;
}
`;