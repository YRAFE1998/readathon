import { Container,Col, Row } from 'reactstrap';
import {Title} from '../textstyled';
import {Fitimage} from './donatestyled';
import {Howtosubtext} from './howtostyled';

export const Donateblock = (props: any)=> {
    
    return (
        <Container className="my-5">
            <Row>
                <Col xs="12" md="6">
                    <Title>
                        Fundraising has always a frustrating experience for Islamic Organizations. <span style={{color:'#FDA14D'}}>But we fixed it</span>
                    </Title>
                    <Howtosubtext className="mt-3">Islamic organizations rely on their members and community to
                    help raise funds for the school. The reality is, donations tend to
                    come from 25% of the members only. Those members get
                    exhausted over time
                    </Howtosubtext>
                    <Howtosubtext className="mt-3">
                    Islamic organizations rely on their members and community to
                    help raise funds for the school. The reality is, donations tend to
                    come from 25% of the members only. Those members get
                    exhausted over time
                    </Howtosubtext>
                </Col>
                <Col xs="12" md="6" className="mt-4 mt-md-1">
                    <Fitimage style={{borderRadius:"30px"}}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Donateblock;