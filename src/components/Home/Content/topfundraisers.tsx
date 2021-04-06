import { Container,Col, Row } from 'reactstrap';
import {Title} from '../textstyled';
import {GetStartedButton} from '../../Buttons/getStartednow';

import {Fundraisercontainer,FundraiserCard,FundraiserCardimgheader,FundraiserCardtitle,FundraiserCardsubtitle,FundraiserCardtext,FundraiserCardsubtext,Fundraisercardhr,Fundraisercardendtext} from './topfundraiserstyled';


export const Topfundraisers = (props: any)=> {
    
    return (
        <Container>
            <Row>
                <Col xs="12" className="text-center mt-5 mb-4">
                    <Title> Top <span style={{color:"#FDA14D"}}>Fundraisers</span></Title>
                </Col>
                <Col xs="12" md="4" className="mt-4 mt-md-1">
                <Fundraisercontainer>
                    <FundraiserCard >
                    <FundraiserCardimgheader src="/assets/Images/Main/pexels-amina-filkins-5561164.jpg"/>
                    <FundraiserCardtitle>TOPEKA, KS</FundraiserCardtitle>
                    <FundraiserCardsubtitle>Josh Jones Family Fundraiser</FundraiserCardsubtitle>
                    <FundraiserCardtext>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at...</FundraiserCardtext>
                    <FundraiserCardsubtext>Last Donation 1h ago</FundraiserCardsubtext>
                    <Fundraisercardhr />
                    <Fundraisercardendtext>$12,190 raised of $25,000</Fundraisercardendtext>
                    </FundraiserCard>
                </Fundraisercontainer>
                </Col>
                <Col xs="12" md="4" className="mt-4 mt-md-1">
                <Fundraisercontainer>
                    <FundraiserCard>
                    <FundraiserCardimgheader  src="/assets/Images/Main/pexels-victoria-borodinova-1648387.jpg"/>
                    <FundraiserCardtitle>TOPEKA, KS</FundraiserCardtitle>
                    <FundraiserCardsubtitle>Josh Jones Family Fundraiser</FundraiserCardsubtitle>
                    <FundraiserCardtext>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at...</FundraiserCardtext>
                    <FundraiserCardsubtext>Last Donation 1h ago</FundraiserCardsubtext>
                    <Fundraisercardhr />
                    <Fundraisercardendtext>$12,190 raised of $25,000</Fundraisercardendtext>
                    </FundraiserCard>
                </Fundraisercontainer>
                </Col>
                <Col xs="12" md="4" className="mt-4 mt-md-1">
                <Fundraisercontainer>
                    <FundraiserCard >
                    <FundraiserCardimgheader  src="/assets/Images/Main/pexels-gabby-k-5997171.jpg"/>
                    <FundraiserCardtitle>TOPEKA, KS</FundraiserCardtitle>
                    <FundraiserCardsubtitle>Josh Jones Family Fundraiser</FundraiserCardsubtitle>
                    <FundraiserCardtext>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at...</FundraiserCardtext>
                    <FundraiserCardsubtext>Last Donation 1h ago</FundraiserCardsubtext>
                    <Fundraisercardhr />
                    <Fundraisercardendtext>$12,190 raised of $25,000</Fundraisercardendtext>
                    </FundraiserCard>
                </Fundraisercontainer>
                </Col>
                <Col xs="12" className="mt-4 mb-5 text-center">
                <GetStartedButton />
                </Col>
            </Row>
        </Container>
    );
}

export default Topfundraisers;