import { useState } from 'react';
import { Container,Col, Row } from 'reactstrap';
import {Title} from '../textstyled';
import {Selectorscontainer, Selectorstext, Selectorstextactive} from './aboutstyled';

export const Aboutblock = (props: any)=> {
    const [selected,setSelected] = useState(0);
    const selectionarray = ['With Recite-A-Thon','Without Recite-A-Thon'];
    //const handleClick = (i: number) => {
    //    setSelected(i);
    //};
    const selectionarraycontent = selectionarray.map((item,i) => {
        if(i==selected)
            return <Selector active={true}>{item}</Selector>;
        else
            return <Selector >{item}</Selector>;
    });

    return (
        <Container fluid={true} className="bgr-lightwhite">
        <Container className="py-5">
            <Row className="d-flex">
                <Col xs="12" md="8" className="offset-md-2 mb-5 ">
                    <Title >
                    More money raised online than anywhere else. Learn about how <span style={{color:'#FDA14D'}}> Recite-A-Thon </span> works.
                    </Title>
                </Col>
                <div className="align-self-center col-12 col-md-4 d-md-flex align-items-center d-none" style={{zIndex:1}}>
                    <Row>
                    {selectionarraycontent}
                    </Row>
                </div>
                <Col xs="12" md="8" className="statscontainer" style={{zIndex:0}}>
                    <Row className="bg-white b-30 p-lg-4  dropshadow">
                        <Col xs="12" sm="6" className="py-4">
                            <Statitem icon="/assets/Exported Assets/Group 2493@2x.png">Minutes to get started</Statitem>
                        </Col>
                        <Col xs="12" sm="6" className="py-4">
                            <Statitem icon="/assets/Exported Assets/Group 2567@2x.png">A large pool of supporters</Statitem>
                        </Col>
                        <Col xs="12" sm="6" className="py-4">
                            <Statitem icon="/assets/Exported Assets/Group 2571@2x.png">$15,000 average amount raised per campaign</Statitem>
                        </Col>
                        <Col xs="12" sm="6" className="py-4">
                            <Statitem icon="/assets/Exported Assets/Group 2569@2x.png">Online communication</Statitem>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Container>
    );
}

export const Selector = (props: any) => {
    const content = (props.active? <Col xs="12"><Selectorscontainer style={{}}><Selectorstextactive>{props.children}</Selectorstextactive></Selectorscontainer></Col>:
        <Col xs="12"><Selectorstext>{props.children}</Selectorstext></Col>);

    return(
        <>
        {content}
        </>
    );
}

export const Statitem = (props: any) => {
    const icon = props.icon;
    const image = <img src={icon} className="b-15 bgr-paleorange" style={{width:"100%"}} />
    const text = <h6 className="txt-lightcyan txt-sofia">{props.children}</h6>
    return(
        <Row className="d-flex">
        <Col xs="4">
            {image}
        </Col>
        <Col xs="8 align-self-center">
            {text}
        </Col>
        </Row>
    );
}

export default Aboutblock;