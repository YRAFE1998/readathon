import { useState } from 'react'
import { Container,Col, Row } from 'reactstrap';
import {Imageinsontainer} from '../imageincontainer';
import {GetStartedButton} from '../../Buttons/getStartednow';
import { Leftfirsttext,Leftfirsttitle} from '../frontpage/leftfirst';


export const Frontpage = (props: any)=> {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
      <Container className="mt-5 pb-5">
        <Row className="d-flex">
            <Col  xs="12" md="6" className="align-self-center order-2 order-md-1 mt-md-0 mt-5">
                <Leftfirsttitle className="mb-4">
                Get 10x more donations with the power of social networks.
                </Leftfirsttitle>
                <Leftfirsttext>
                Recite-A-Thon is the new way Muslim schools are able to raise more money without the hassle of chasing donors. 
                Using our innovative technology, Islamic schools are able to raise 
                10x more money, get more students reading Quran, walking and 
                excited.
                </Leftfirsttext>
                <GetStartedButton />
            </Col>
            <Col xs="12" md="6" className=" order-1 order-md-2">
                <Imageinsontainer imagelink="/assets/Images/Main/pexels-andrea-piacquadio-3868869.jpg" />    
            </Col>
        </Row>
      </Container>
    );
}

export default Frontpage;