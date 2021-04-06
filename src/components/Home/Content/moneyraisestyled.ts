import styled from "styled-components";

export const ContinueButton = styled.button`
    background-color:#E1FEF7;
    border-radius:15px;
    color:#37B899;
    @media (max-width:800px){
        padding:15px 5px !important;
    }
    @media (min-width:801px){
        padding:15px 50px !important;
        font-size:22px;
    }
    border-style:none;
    width:100%;
    font-family: Sofiaprofont-semibold;
`;

export const Textfield = styled.input`
    border-radius:15px;
    height: 100%;
    border-style: none;
    width: 100%;
    font-family:Sofiaprofont;

`;

export const Borderedrow = styled.div`
    border-radius:20px;
    border-color:#FDA14D;
    border-style:solid;
    padding:30px;
    background-color:#2B3D5F;
`;

export const Borderedrowtitle = styled.h2`
    color:white;
    font-family:Sofiaprofont-semibold;
`;

export const Borderedrowraise = styled.h2`
    color:#FDA14D;
    font-family:Sofiaprofont-semibold;
`;

export const Borderedrowart = styled.img`
    position:absolute;
    z-index:0;
`;


