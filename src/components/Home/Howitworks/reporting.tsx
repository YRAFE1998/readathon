import Frequentblock from '../Frequentblock'

const Orangetext = (props: any)=>{
     return(<span className="txt-orange">{props.children}</span>);
}

export const Reportingblock = (props: any) =>{
    return(
        <Frequentblock directionleft={false} image="/assets/Images/Main/pexels-liza-summer-6347729.jpg" 
        title="Keep everyone in the loop without a ton of paperwork"> With Recite-A-Thon, you get accurate up to the minute reporting
        of the progress of all and any of your students.
        You can see all the donations amounts collected and how much
        money your campaign raised.        
        </Frequentblock>
    );

}

export default Reportingblock;