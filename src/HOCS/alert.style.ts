import styled from "styled-components";
export const AlertStyle = styled.div`
.color{
    background-color: red;
}
.alertContainer{
    position: fixed;
    width: 290px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    color: #fff;
    border-radius: 5px;
    top: 20px;
    left: 20px;
    z-index: 5;
    h4{
        margin: 0px;
    }
    .content{
        padding-top: 10px;
    }
}

`;