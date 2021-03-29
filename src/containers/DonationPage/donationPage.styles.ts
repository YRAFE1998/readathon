import styled from "styled-components";
import { ThemeColor } from "../../utils/colors";

export const DonationPageStyles = styled.div`
.header{
    font-weight: 900;
}
.read-more{
    cursor: pointer;
    text-decoration: underline !important;
    font-size: 20px;
}

.target{
    margin: 20px;
    margin-bottom: 10px;
}
.border-bottom-green{
    border-bottom: 4px solid ${ThemeColor.successColor};
    margin: 0px 20px;
    margin-bottom: 20px;
}
.share-donation{
    margin-bottom: 20px;

    button{
        width: 90%;
    padding: 10px;
    text-align: center;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 10px 20px;
    border-radius: 5px;
    font-weight: 900;
    font-size: 18px;

    }
    .donate-btn-8{
        background: linear-gradient( 180deg ,#ffde9e 50%,#fcb957);
        border-color: #c5912c;
        border: 1px solid #fdb933;
    }
    .share-btn-8{
        background: linear-gradient(180deg,#fdb933 35.42%,#f58131 139.58%);
        border-color: #c06828;  
        box-shadow: 0 6px 14px rgb(0 0 0 / 10%);
        font-size: 16px;
    }
}
.acuale{
    font-size: 15px;
    color: ${ThemeColor.grayColor};
    vertical-align: middle;
}
.img{
    width: 100%;
    height: 50vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover
    }
}
.desc{
    margin-top: 20px;
    height: 170px;
    margin-bottom: 0px;
    overflow: hidden;

}
.footer{
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    margin-top: 20px;

    button{
        width: 45%;
        font-size: 20px;
        font-weight: 900;
        outline: none;
        box-shadow: none;
        border: none;
        border-radius: 5px;
        }
    .donate-btn-8{
        padding: 10px 0px;
        background: #f2ac2f;
    }
    .share-btn-8{
        border: 1px solid #fdb933;
    color: #000;
    background: #fff;

    }
}
`