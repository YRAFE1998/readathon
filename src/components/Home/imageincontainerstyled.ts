import styled from 'styled-components';

export const Imagebox = styled.div<{imagelink: any}>`
    background-image:url(${props => props.imagelink});
    height:100%;
    width:100%;
    background-size:cover;
    border-radius:30px;
    min-height:400px;
    background-position:center;
`;
