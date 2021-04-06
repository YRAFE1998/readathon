import { Container,Col, Row } from 'reactstrap';
import {Title} from '../textstyled';

import {Howtosubtext} from './howtostyled';

export const Howtoblock = (props: any)=> {
    
    return (
        <Container fluid={true} style={{backgroundColor:"#FAFBFF"}}>
        <Container>
            <Row className="text-center pt-5 d-flex" >
                <Col xs="12" className="mb-4">
                    <Title> How does <span style={{color:'#FDA14D'}}>Recite-A-Thon work?</span></Title>
                </Col>
                <Col xs="12" md="6" className="align-self-end d-none d-md-block"> <img src="/assets/Exported Assets/Path 11749@2x.png" style={{width:"25%"}}/></Col>
                <Col xs="12" md="6" className="align-self-end d-none d-md-block"><img src="/assets/Exported Assets/Path 11749@2x.png" style={{width:"25%"}}/></Col>
                </Row>
                <Row className="text-center" style={{minHeight:"200px"}}>
                <Col xs="12" md="3" className="align-self-start">
                    <img src="/assets/Exported Assets/Group 2488@2x.png" style={{width:"50%" }} />
                    <Howtosubtext>Create a free account</Howtosubtext>
                </Col>

                <Col xs="12" md="3" className="align-self-end">
                    <img src="/assets/Exported Assets/Group 2489@2x.png" style={{width:"50%", }}/>
                <Howtosubtext>Update your list of students</Howtosubtext>
                </Col>

                <Col xs="12" md="3" className="align-self-start">
                    <img src="/assets/Exported Assets/Group 2490@2x.png" style={{width:"50%", }}/>
                <Howtosubtext>Students read Quran</Howtosubtext>
                </Col>

                <Col xs="12" md="3" className="align-self-end">
                    <img src="/assets/Exported Assets/Group 2492@2x.png" style={{width:"50%", }}/>
                <Howtosubtext>Collect donations</Howtosubtext>
                </Col>
                </Row>
                <Row className="text-center pb-5 ">
                <Col xs="12" className="align-self-start d-none d-md-block"> <img src="/assets/Exported Assets/Path 11750@2x.png" style={{width:"12.5%"}}/></Col>
                </Row>
        </Container>
        </Container>
    );
}

export default Howtoblock;