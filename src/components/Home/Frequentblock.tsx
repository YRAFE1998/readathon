import { Container,Col, Row } from 'reactstrap';
import {Imageinsontainer} from './imageincontainer';
import {GetStartedButton} from '../Buttons/getStartednow';
import {Title} from './textstyled';
import { Leftfirsttext} from './frontpage/leftfirst';


export const Frequentblock = (props: any)=> {
    var content;
    const directionleft = props.directionleft;
    console.log(directionleft);
    if (!directionleft){
        content =  <><Col  xs="12" md="6" className="align-self-center mt-md-0 mt-5">
        <Title className="mb-4">
        {props.title}
        </Title>
        <Leftfirsttext>
        {props.children}
        </Leftfirsttext>
        <GetStartedButton />
        </Col>
        <Col xs="12" md="6" className="mt-md-0 mt-5">
            <Imageinsontainer imagelink={props.image} />    
        </Col></>;
    }
    else{
        content =<>
        <Col xs="12" md="6" className="mt-md-0 mt-5 order-2 order-md-1">
        <Imageinsontainer imagelink={props.image} />    
        </Col>
        <Col  xs="12" md="6" className="align-self-center mt-md-0 mt-5 order-1 order-md-2">
        <Title className="mb-4">
        {props.title}
        </Title>
        <Leftfirsttext>
        {props.children}
        </Leftfirsttext>
        <GetStartedButton className="mt-5"/>
        </Col>

        </>;
    }
    
    return (
      <Container className="mt-5 pb-5">
        <Row className="d-flex">
            {content}
        </Row>
      </Container>
    );
}

export default Frequentblock;