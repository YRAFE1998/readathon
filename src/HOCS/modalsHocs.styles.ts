import styled from "styled-components";
import { ThemeColor } from "../utils/colors";
export const ModalesStyles = styled.div`
.modal{
    border-radius: 10px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
}
.header{
    text-align: center;
    width: 100%;
    border: none;
    
}
.modal-header{
    border: none;
}
`;

export const ModalTitle = styled.div`
font-family: SourceSansPro;
font-size: 28px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.07;
letter-spacing: normal;
text-align: center;
color: #000000;
padding: 40px 0px;
`

export const ModalFooter = styled.div`
font-family: SourceSansPro;
display: flex;
justify-content: center;
margin-top: 40px;
.btn-save{
    padding: 12px 37px 12px 38px;
    border-radius: 4px;

}
`

export const ModalBody = styled.div`
font-family: SourceSansPro;

`
export const ImportStyle = styled.div`
.or-continer{
    padding: 30px 40px;
display: flex;
div{
    width: 50%;
    border-top: 1px solid #e5e3ea;
    margin-top: 10px;
}
span{
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #c2c1c2;
    padding: 0px 20px;
}
}
.import-btn{
    margin-bottom: 40px;
    .btn-imp{
        padding: 12px 14px 12px 15px;
    }
}


`