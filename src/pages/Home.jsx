import React from 'react';
// import ScrollToTop from 'react-scroll-up';
// import { FiChevronUp } from "react-icons/fi";
import Helmet from "../components/common/Helmet";


import Body from '../components/sections/body/Body';
import SellingPoints from '../components/sections/selling-points/SellingPoints';

import Header from "../components/sections/header/Header";
import Footer from '../components/sections/footer/Footer';


const HomePage = () => {


    return (
        <div>
            {/* seo content */}
            <Helmet />
            <div className="active-light">
                <Header />
                <Body />
                <SellingPoints />
                <Footer />
                {/* Start Back To Top */}
                {/* <div className="backto-top">
                    <ScrollToTop showUnder={20} duration={10}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div> */}
                {/* End Back To Top */}
            </div>

        </div>
    )
}

export default HomePage;
