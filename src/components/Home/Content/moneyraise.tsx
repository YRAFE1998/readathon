import { Container,Col, Row } from 'reactstrap';
import {Mutedtext, Title} from '../frontpage/frontpage2styled';
import {ContinueButton,Textfield,Borderedrow, Borderedrowtitle, Borderedrowraise, Borderedrowart} from './moneyraisestyled';
import {Leftfirstbutton} from '../frontpage/leftfirst';


export const Moneyraise = (props: any)=> {
    
    return (
        <Container fluid={true} style={{backgroundColor:"#2B3D5F"}}>
            <Container className="text-center">
              <Row className="d-flex text-center">
                  <Col xs="2" className="mt-5 px-0">
                    <img src="/assets/Exported Assets/Path 11786@2x.png" style={{width:"100%"}} />
                  </Col>
                  <Col xs="8" className="mt-5" >

                      <Title><span style={{color:"white"}}> How much could you</span> <span style={{color:"#FDA14D"}}>raise</span><span style={{color:"white"}}>?</span></Title>
                  </Col>
              </Row>
              <Row>
                  <Col xs="8" className="offset-2 mt-4">
                      <Mutedtext>Enter the number of students you have to see how much your organization could raise</Mutedtext>
                  </Col>
              </Row>
              <Row className="mt-2">
                  <Col xs="5" className="offset-2 px-0 mr-2">
                      <Textfield placeholder="example:100"></Textfield>
                  </Col>
                  <Col xs="3" className="px-0 ml-2">
                      <ContinueButton>Continue</ContinueButton>
                  </Col>
              </Row>
            <Row>
                <Col xs="1" className="offset-2">
                    <Borderedrowart style={{top: "15px", left: "-40px", width:"100%"}} src="/assets/Exported Assets/Group 2500@2x.png"/>
                </Col>

                <Borderedrow className="my-5 col-8 offset-2">
                    <Borderedrowtitle>
                    You can raise with Recite-A-Thon
                    </Borderedrowtitle>
                    <Borderedrowraise>
                        $15,000
                    </Borderedrowraise>
                    <Leftfirstbutton>Get Started Today</Leftfirstbutton>
                </Borderedrow>
                {/*<Col xs="1" className="offset-7">
                    <Borderedrowart style={{top: "15px", left: "-40px", width:"100%"}} src="/assets/Exported Assets/Group 2500@2x.png"/>
                </Col>*/
    }
            </Row>
            </Container>
        </Container>
    );
}

export default Moneyraise;