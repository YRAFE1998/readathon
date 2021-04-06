import { useState } from 'react'
import { Container,Col, Row } from 'reactstrap';
import {Imageinsontainer} from '../imageincontainer';
import {GetStartedButton} from '../../Buttons/getStartednow';
import {Title} from '../textstyled';
import { Leftfirsttext} from '../frontpage/leftfirst';


export const Costblock = (props: any)=> {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
      <Container className="mt-5 pb-5">
        <Row className="d-flex">
            <Col  xs="12" md="6" className="align-self-center mt-md-0 mt-5">
                <Title className="mb-4">
                How much does it <span className="txt-orange">cost</span> ?
                </Title>
                <Leftfirsttext>
                You can start with Recite-A-Thon with $0 commitment. You do not have to pay anything to get started. 
                When your campaigns are launched and we are collecting 
                donations, we charge 20% of the total donation amount.

                </Leftfirsttext>
            </Col>
            <Col xs="12" md="6" className="mt-md-0 mt-5">
                <Imageinsontainer imagelink="/assets/Images/Main/pexels-karolina-grabowska-4968384.jpg" />    
            </Col>
        </Row>
      </Container>
    );
}

export default Costblock;