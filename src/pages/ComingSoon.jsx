import React from 'react';
import Header from "../components/sections/header/Header";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";

export default function ComingSoon() {

    return (
        <>
           <Header />
            {/* Start Page Error  */}
            <div className="error-page-inner bg_color--4">
                <div className="container">
                    <div className="row">
                            <div className="inner">
                                <h3 className="sub-title">Coming Soon...</h3>
                            </div>
                    </div>
                    <div className='coming__soon'>
                    <a className="rn-btn-light" href='/'> <span>Go back home</span>
                            </a>
                    </div>
                </div>
            </div>
            {/* End Page Error  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
        </>
    )
}
