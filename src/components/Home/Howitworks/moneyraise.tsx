import { Container,Col, Row } from 'reactstrap';
import {Mutedtext, Title} from '../textstyled';
import {ContinueButton,Textfield,Borderedrow, Borderedrowtitle, Borderedrowraise, Borderedrowart} from '../Content/moneyraisestyled';


export const Moneyraise = (props: any)=> {
    
    return (
        <Container fluid={true} style={{backgroundColor:"#2B3D5F"}} className="pb-5">
            <Container className="text-center">
              <Row className="d-flex text-center">
                  <Col xs="2" className="mt-5 px-0 d-none d-md-block">
                    <img src="/assets/Exported Assets/Path 11786@2x.png" style={{width:"100%"}} />
                  </Col>
                  <Col xs="12" md="8" className="mt-5" >

                      <Title><span style={{color:"white"}}> How much could you</span> <span style={{color:"#FDA14D"}}>raise</span><span style={{color:"white"}}>?</span></Title>
                  </Col>
              </Row>
              <Row>
                  <Col xs="8" className="offset-2 mt-4">
                      <Mutedtext>Enter the number of students you have to see how much your organization could raise</Mutedtext>
                  </Col>
              </Row>
              <Row className="mt-2">
                  <Col xs="7" md="5" className="offset-0 offset-md-2 px-md-0 mr-md-2">
                      <Textfield placeholder="Enter number of students here"></Textfield>
                  </Col>
                  <Col xs="5" md="3" className="px-md-0 ml-md-2">
                      <ContinueButton>Continue</ContinueButton>
                  </Col>
              </Row>

            </Container>
        </Container>
    );
}

export default Moneyraise;