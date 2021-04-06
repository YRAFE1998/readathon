import { useState } from 'react';
import { Container,Col, Row } from 'reactstrap';
import {Line, Footertitle,Textfield,Submitbutton, FooterNav, Footertext,Socialicon} from './footerstyled';


export const Footer = (props: any)=> {
   /* const [selected,setSelected] = useState(0);
    const selectionarray = ['With Recite-A-Thon','Without Recite-A-Thon'];

    const selectionarraycontent = selectionarray.map((item,i) => {
        if(i==selected)
            return <Selector active={true}>{item}</Selector>;
        else
            return <Selector >{item}</Selector>;
    });
*/
    return (
        <Container fluid={true} className="bgr-blue">
        <Container className="py-5 text-center">
            <Row>
                <Col xs="12">
                    <Footertitle>Subscribe to our newsletter</Footertitle>
                </Col>
            </Row>
            <Row className="mt-2">
            <Col xs="8" md="4" className="px-0 offset-0 offset-md-4">
                <Textfield placeholder="Your business email"></Textfield>
            </Col>
            <Col xs="4" md="1" className="px-0">
                <Submitbutton> <img src="/assets/Exported Assets/Send@2x.png" style={{width:"80%"}} className=""/></Submitbutton>
            </Col>
            </Row>
            <Row>
                <Col xs="12" md="8" className="offset-0 offset-md-2 my-4">
                    <Line />
                </Col>
            </Row>

            <Row className="text-center">
                <Col xs="12">
                    Logo
                </Col>
                <Col xs="12 my-4">
                    <FooterNav>Home</FooterNav>
                    <FooterNav>How It Works</FooterNav>
                </Col>
                <Col xs="12" md="8" className="offset-0 offset-md-2">
                <Row>
                <Col xs="12" md="3" className="offset-0 offset-md-2 text-center text-md-right mb-3 mb-md-1">
                    <Footertext>Follow us:</Footertext>
                </Col>
                <Col xs="3" md="1" className="px-1"><Socialicon src="/assets/Exported Assets/Combined-Shape-path@2x.png"/></Col>
                <Col xs="3" md="1" className="px-1"><Socialicon src="/assets/Exported Assets/Shape@2x.png"/></Col>
                <Col xs="3" md="1" className="px-1"><Socialicon src="/assets/Exported Assets/Group 2483@2x.png"/></Col>
                <Col xs="3" md="1" className="px-1"><Socialicon src="/assets/Exported Assets/Group 2482@2x.png"/></Col>
                </Row>
                </Col>


            </Row>

        </Container>
        </Container>
    );
}


export default Footer;