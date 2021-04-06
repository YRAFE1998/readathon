import { Container, Row, Col } from 'reactstrap';
import {RaisemoneyCard} from './raisemoneycard';
import {Title} from '../textstyled';
import {GetStartedButton} from '../../Buttons/getStartednow';


export const Raisemoneyblock = (props: any) => {

    return(
        <Container fluid={true} className="bgr-lightwhite">
        <Container className="py-5 text-center">
            <Row>
                <Col xs="12" md="8" className="mb-5 offset-md-2">
                    <Title>Raise more money for your <span className="txt-orange">organization</span>, get your students and parents more excited, and more involved.</Title>
                </Col>
                <Col xs="12" md="4" className="mt-4">
                    <RaisemoneyCard image="/assets/Exported Assets/Group 2508@2x.png">
                    Start by adding your teachers and
students
                    </RaisemoneyCard>
                </Col>
                <Col xs="12" md="4" className="mt-4">
                    <RaisemoneyCard image="/assets/Exported Assets/Group 2517@2x.png">
                    Create a Recite-A-Thon
campaign

                    </RaisemoneyCard>
                </Col>
                <Col xs="12" md="4" className="mt-4">
                    <RaisemoneyCard image="/assets/Exported Assets/Group 2526@2x.png">
                    Teachers parents have full access
to track the progress of their
students
                    </RaisemoneyCard>
                </Col>
                <Col xs="12" md="4" className="mt-4">
                    <RaisemoneyCard image="/assets/Exported Assets/Group 2535@2x.png">
                    As parents share the campaigns on
social networks, you start collecting
funds
                    </RaisemoneyCard>
                </Col>
                <Col xs="12" md="4" className="mt-4">
                    <RaisemoneyCard image="/assets/Exported Assets/Group 2544@2x.png">
                    Get detailed reporting on how much
your campaign raised
                    </RaisemoneyCard>
                </Col>
                <Col xs="12" md="4" className="mt-4">
                    <RaisemoneyCard image="/assets/Exported Assets/Group 2558@2x.png">
                    When the campaign is done, you
receive your payment
                    </RaisemoneyCard>
                </Col>

                <Col xs="12" className="my-5 text-center">
                    <GetStartedButton />
                </Col>
            </Row>
        </Container>
        </Container>
    );
}


export default Raisemoneyblock;