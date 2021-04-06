import Frequentblock from '../Frequentblock'

const Orangetext = (props: any)=>{
     return(<span className="txt-orange">{props.children}</span>);
}

export const Securityblock = (props: any) =>{
    return(
        <Frequentblock directionleft={true} image="/assets/Images/Main/pexels-pixabay-60504.jpg" 
        title="Your security security is critical to us"> Our servers are hosted on Amazon AWS and we follow security
        guidelines to ensure no one has access to your data.
        All of our credit card transactions are encrypted and processed
        via Stripe. We do not store any credit card information. 
        </Frequentblock>
    );

}

export default Securityblock;