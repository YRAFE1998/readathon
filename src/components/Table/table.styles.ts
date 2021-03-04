import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";

export const TableStyles = styled.div`
.fa-arrow-down{
    fontSize: 10px;
}
.fa-arrow-up{
    fontSize: 10px;

}
.custom-checkbox{
    color: ${ThemeColor.red}
}
.mr-20{
    margin: 30px 0px 20px;
    margin-inline-start: 20px;
    @media (max-width: 1000px) {
        margin-inline-start: 0px

      }
}
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
    cursor: pointer;
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
    color: ${ThemeColor.red};
    @media (max-width: 1000px) {
        margin: auto;
        margin-bottom: 0px;
        width: 26px;

      }
}
.active{
    border-radius: 4px;
    border: solid 1px rgba(245, 91, 111, 0.14);
    background-color: rgba(245, 91, 111, 0.14);
    color: ${ThemeColor.red}
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

.delete-content{
    font-size: 20px;
    color: ${ThemeColor.red};
    text-align: center
}
.delete-btn{
    padding: 12px 45px;
    margin: 0px;
    margin-inline-start: 30px;
    @media (max-width: 1000px) {
        margin-bottom: 30px;

      }
}
`;

export const DeleteModalStyle = styled.div`
.delete-content{
    color: ${ThemeColor.grayColor};
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: center;
    margin-bottom: 40px
}
.delete-btn{
    padding: 12px 45px;
    margin-bottom: 35px;
    
}
`

export const PaginationStyles = styled.div`
.containerPagination{
    padding: 15px;
    border-radius: 5px;
    border: solid 1px ${ThemeColor.borderColor};
    background-color: #ffffff;
}

.btn-prev-next{
    @media (max-width: 1000px) {
        margin: auto;
        margin-bottom: 20px;

      }
    margin: 0 10px;
    background: #fff !important;
    display: flex;
    border: none;
    font-family: SourceSansPro;
    font-size: 13px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.77;
    letter-spacing: normal;
    align-items: center;
    color: ${ThemeColor.red};
    span{
        margin: 0 10px;
    }
    &:disabled{
        color: #999999
    }
}
.next{
    @media (max-width: 1000px) {
        margin-top: 20px;
      }
}
.btn-success.dropdown-toggle{
    color: ${ThemeColor.red} !important;
    outline: none;
    &:focus{
        box-shadow: none;
    }
}
}

`