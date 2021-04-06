import {Card, Cardimgheader,Cardtext} from './raisemoneystepscardstyled';

export const RaisemoneyCard = (props: any) =>{
    return(
        <Card className="text-center">
            <Cardimgheader src={props.image} />
            <Cardtext>{props.children}</Cardtext>
        </Card>
    );
}

export default RaisemoneyCard;