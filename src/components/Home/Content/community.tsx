import { Container,Col, Row } from 'reactstrap';
import {Title} from '../textstyled';
import {Fitimage2} from './donatestyled';
import {Howtosubtext} from './howtostyled';

export const Communityblock = (props: any)=> {
    
    return (
        <Container fluid={true} style={{backgroundImage:"url('/assets/Exported Assets/Group 21@2x.png')"}}>
        <Container className="py-5">
            <Row>
                <Col xs="12" md="6" className="order-2 order-md-1 mt-4 mt-md-1">
                    <Fitimage2 style={{borderRadius:"30px"}}/>
                </Col>
                <Col xs="12" md="6" className="order-1 order-md-2">
                    <Title>
                    Built by community <span style={{color:'#FDA14D'}}>members</span> like you. Supported by people who'll know your name.
                    </Title>
                    <Howtosubtext className="mt-3">We have been there. Trying to raise money for our small Muslim 
                    school in Detroit, collecting funds for a mosque in Texas, we have 
                    been there. exhausted over time
                    </Howtosubtext>
                    <Howtosubtext className="mt-3">
                    Trying to figure out how to raise money for organizations. We 
                    chased community members to give us a donation or hold a 
                    drive. We believe that we have a better way to fundraise!
                    </Howtosubtext>
                </Col>
            </Row>
        </Container>
        </Container>
    );
}

export default Communityblock;