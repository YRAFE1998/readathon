import { useState } from 'react'
import { Container,Col, Row } from 'reactstrap';
import { Leftfirstsubtitle,Leftfirsttext,Leftfirsttitle} from './leftfirst';
import {GetStartedButton} from '../../Buttons/getStartednow';


export const Frontpage = (props: any)=> {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
      <Container>
        <Row className="d-flex">
            <Col  xs="12" md="6" className="align-self-center mt-md-0 mt-5 order-2 order-md-1">
                <Leftfirsttitle className="mb-5" style={{lineHeight:"inherit"}}>
                Fundraising for the Islamic schools has never been easier
                </Leftfirsttitle>
                <Leftfirstsubtitle className="mb-3">
                Get 10x more donations with the power of social networks.
                </Leftfirstsubtitle>
                <Leftfirsttext>
                Recite-A-Thon is an easy-to-use platform designed to help 
                Muslim organizations across the world create different types of 
                fundraising campaigns in minutes (not days) and to utilize the 
                power of social networks to help organizations generate 10x 
                more funds.

                </Leftfirsttext>
                <Row>
                <Col xs="12" className="text-center text-md-left mt-5">
                <GetStartedButton/>
                </Col>
                </Row>

            </Col>
            <Col xs="12" md="6" className="mt-md-0 mt-5 order-1 order-md-2">

              <img src='/assets/Exported Assets/Group 2673@2x.png' className="rightcontainerimage" />
            </Col>
        </Row>
      </Container>
    );
}

export default Frontpage;