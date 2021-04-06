import Homeheader from '../../components/Home/Header/header';
import Frontpage from '../../components/Home/frontpage/frontpage';
import Frontpage2 from '../../components/Home/frontpage/frontpage2';
import Boxshadow from '../../components/Home/box-shadow';
import Moneyraise from '../../components/Home/Content/moneyraise';
import Topfundraisers from '../../components/Home/Content/topfundraisers';
import Howtoblock from '../../components/Home/Content/howto';
import Donateblock from '../../components/Home/Content/donate';
import Aboutblock from '../../components/Home/Content/about';
import Featuresblock from '../../components/Home/Content/features';
import Communityblock from '../../components/Home/Content/community';
import Footer from '../../components/Home/Footer/footer';
import './home.css';
export const Homepage = (props: any)=> {

    return(
        <>
        <Homeheader page={0}/>
        <Boxshadow />
        <Frontpage />
        <Frontpage2 />
        <Moneyraise />
        <Topfundraisers/>
        <Howtoblock />
        <Donateblock/>
        <Aboutblock />
        <Featuresblock />
        <Communityblock />
        <Footer />
        </>
    );
}

export default Homepage;