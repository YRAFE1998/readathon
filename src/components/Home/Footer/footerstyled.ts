import styled from 'styled-components';

export const Footertitle = styled.h3`
    font-family:Sofiaprofont-semibold;
    color:white;
`;

export const Textfield = styled.input`
    border-radius:40px;
    height: 100%;
    border-style: none;
    width: 100%;
    font-family:Sofiaprofont;
`;

export const Submitbutton = styled.button`
    border-radius:40px;
    background-color:#37B899 ;
    backgrond-image:"/assets/Exported Assets/Send@2x.png";
    width:50px;
    height:50px;
    border-style:none;
    @media(min-width:770px){
        position:relative;
        left:-78%;
    }
`;

export const Line = styled.hr`
    background-color:#88A1C8;
    height:0.5px;
    border-style:none;
    filter:opacity(0.5);
`; 

export const FooterNav = styled.a`
    background-color:transparent;
    color:white !important;
    padding:10px;
    font-size:20px;
    max-width:70px;
    font-family: Sofiaprofont-medium;
    margin: 10px;
`;

export const Footertext = styled.span`
    color:#FDA14D;
    font-size:20px;

`;

export const Socialicon = styled.img`
    max-width:100%;
    max-height:100%;
    height:20px;
`;