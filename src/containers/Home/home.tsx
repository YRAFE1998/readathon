import React, { useContext, useEffect, useState } from 'react'
import Homeheader from '../../components/Home/Header/header';
import Frontpage from '../../components/Home/frontpage/frontpage';
import Frontpage2 from '../../components/Home/frontpage/frontpage2';
import Boxshadow from '../../components/Home/Header/box-shadow';
import Moneyraise from '../../components/Home/Content/moneyraise';
import Topfundraisers from '../../components/Home/Content/topfundraisers';
import './home.css';
export const Homepage = (props: any)=> {

    return(
        <>
        <Homeheader />
        <Boxshadow />
        <Frontpage />
        <Frontpage2 />
        <Moneyraise />
        <Topfundraisers/>
        </>
    );
}

export default Homepage;