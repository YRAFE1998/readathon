import styled from "styled-components";
export const HeadernavItem = styled.a<{active: boolean}>`
    background-color:transparent;
    color:${props=> (props.active?'#fda14d':'#324367')} !important;
    padding:10px;
    font-size:22px;
    max-width:70px;
    font-family: Sofiaprofont-medium;
    margin: 10px;
`;

export default HeadernavItem;