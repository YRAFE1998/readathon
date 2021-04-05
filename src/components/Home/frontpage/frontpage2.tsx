import { Container,Col, Row } from 'reactstrap';
import './home.css';
import {Leftfirstbutton} from './leftfirst';
import {Mutedtext, Title} from './frontpage2styled';


export const Frontpage2 = (props: any)=> {    
    return (
        <Container fluid={true} style={{backgroundImage:"url('/assets/Exported Assets/Group 21@2x.png')"}}>
      <Container>
        <Row className="d-flex text-center" >
            <Col  xs="12" className="text-center mt-5">
            <Title> It's <span style={{color:"#FDA14D"}}>easy</span> as 1,2,3</Title>
            </Col>
        </Row>
        <Row className="mt-4 d-flex text-center">
            <Col xs="12" md="4" className="mt-md-0 mt-3">
                <img src="/assets/Exported Assets/Group 2633@2x.png" style={{width:"35%"}} className="frontpage2-icon"/> 
                <Mutedtext className="mt-4">$0 to Get Started</Mutedtext>
            </Col>
            <Col xs="12" md="4" className="mt-md-0 mt-3">
                <img src="/assets/Exported Assets/Group 2613@2x.png" style={{width:"35%"}} className="frontpage2-icon"/>
                <Mutedtext className="mt-4">Engage your community members with Quran-a-thons, read-a-thons, and walk-a-thons</Mutedtext></Col>
            <Col xs="12"  md="4" className="mt-md-0 mt-3">
                <img src="/assets/Exported Assets/Group 2641@2x.png" style={{width:"35%"}} className="frontpage2-icon"/>
                <Mutedtext className="mt-4">Risk-Free no obligation</Mutedtext>
                </Col>
            <Col xs="12" className="my-5" >
            <Leftfirstbutton >Get Started Today</Leftfirstbutton>
            </Col>
        </Row>
      </Container>
      </Container>
    );
}

export default Frontpage2;