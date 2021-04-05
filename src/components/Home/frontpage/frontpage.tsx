import { useState } from 'react'
import { Container,Col, Row } from 'reactstrap';
import './home.css';
import { Leftfirstsubtitle,Leftfirsttext,Leftfirsttitle,Leftfirstbutton} from './leftfirst';


export const Frontpage = (props: any)=> {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
      <Container>
        <Row className="d-flex">
            <Col  xs="12" md="6" className="align-self-center mt-md-0 mt-5">
                <Leftfirsttitle className="mb-4">
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
                <Leftfirstbutton>
                    Get Started Today
                </Leftfirstbutton>
            </Col>
            <Col xs="12" md="6" className="mt-md-0 mt-5">

              <img src='/assets/Exported Assets/Group 2673@2x.png' className="rightcontainerimage" />
            </Col>
        </Row>
      </Container>
    );
}

export default Frontpage;