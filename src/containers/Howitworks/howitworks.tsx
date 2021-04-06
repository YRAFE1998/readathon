import Homeheader from '../../components/Home/Header/header';
import Frontpage from '../../components/Home/Howitworks/frontpage';
import Boxshadow from '../../components/Home/box-shadow';
import Raisemoneyblock from '../../components/Home/Howitworks/raisemoney';
import Costblock from '../../components/Home/Howitworks/cost';
import Moneyraise from '../../components/Home/Howitworks/moneyraise';
import Securityblock from '../../components/Home/Howitworks/security';
import Reportingblock from '../../components/Home/Howitworks/reporting';
import Footer from '../../components/Home/Footer/footer';

import '../Home/home.css';
export const Howitworkspage = (props: any)=> {

    return(
        <>
        <Homeheader page={1}/>
        <Boxshadow />
        <Frontpage />
        <Raisemoneyblock />
        <Costblock />
        <Moneyraise />
        <Securityblock />
        <Reportingblock />
        <Footer/>
        </>
    );
}

export default Howitworkspage;