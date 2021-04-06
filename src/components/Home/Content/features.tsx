import { Container,Col, Row } from 'reactstrap';
import {Title} from '../textstyled';
import {GetStartedButton} from '../../Buttons/getStartednow';
import {Featureicon} from './featuresstyled';
export const Featuresblock = (props: any)=> {
    
    return (
        <Container className="py-5">
            <Row className="text-center d-flex">
            <Col xs="12" md="8" className="offset-md-2 mb-5 ">
                    <Title >
                    <span style={{color:'#FDA14D'}}> Recite-A-Thon</span> Difference
                    </Title>
                </Col>

            <Col xs="12" md="4">
                <Row>
                    <Col xs="12">
                        <Featureicon src="/assets/Exported Assets/Group 2605@2x.png"></Featureicon>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-cyan">Simple setup</h5>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-lightcyan">You can personalize and share your fundraising campaigns in just a few minutes. </h5>
                    </Col>
                </Row>

            </Col>
            <Col xs="12" md="4">
            <Row>
                    <Col xs="12">
                        <Featureicon src="/assets/Exported Assets/Group 2606@2x.png"></Featureicon>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-cyan">Different Campaigns</h5>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-lightcyan">Choose from read-a-thons or walk-athons to raise money for your organization
throughout the year</h5>
                    </Col>
                </Row>
            </Col>
            <Col xs="12" md="4">
            <Row>
                    <Col xs="12">
                        <Featureicon src="/assets/Exported Assets/Group 2607@2x.png"></Featureicon>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-cyan">Secure
</h5>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-lightcyan">We use the highest levels of security to
protect your campaigns against fraud.</h5>
                    </Col>
                </Row>
            </Col>
            <Col xs="12" md="6">
            <Row>
                    <Col xs="12">
                        <Featureicon src="/assets/Exported Assets/Group 2604@2x.png"></Featureicon>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-cyan">Social Reach
</h5>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-lightcyan">Spread your campaigns on social
networks to get a bigger reach</h5>
                    </Col>
                </Row>
            </Col>
            <Col xs="12" md="6">
            <Row>
                    <Col xs="12">
                        <Featureicon src="/assets/Exported Assets/Group 2603@2x.png"></Featureicon>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-cyan">Expert Advice And Amazing Support
</h5>
                    </Col>
                    
                    <Col xs="12">
                        <h5 className="txt-lightcyan">We are with you every step of the way to
make sure you succeed
 </h5>
                    </Col>
                </Row>
            </Col>
            <Col xs="12" className="mt-5">
            <GetStartedButton />

            </Col>
            </Row>
        </Container>
    );
}

export default Featuresblock;