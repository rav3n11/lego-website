import React from "react";
import config from "./config";
import HomeTabs from "../../tabs/Tabs";
import { Link } from "react-router-dom";
// import Cup from '../../cup/Cup';
import JSX_withParallax from "../../../util/ParallaxJSXWrapper";
import batman from "../../../assets/icons/batman.svg";
// import superman from "../../../assets/icons/lego-superman.svg";
import yellow from "../../../assets/icons/yellow.svg";
export default function Body() {
  let title = config.title,
    description = config.description,
    subtitle = config.subtitle,
    socials = config.socials;

  const Batman = JSX_withParallax(
    <div className="batman">
      <img src={batman} id="batman" alt="Lego batman" />
    </div>,
    0.05
  );

  return (
    <div id="about" className="fix">
      <div className="about-area ptb--120  bg_color--1">
        <div className="about-wrapper">
        <div className="banner">
                        <p className="banner__text">New Sets 2018</p>
                      </div>
          <div className="circle__blue"></div>
          <div className="body-card">
            <div className="circle__blue">
              <div className="container">
                <div className="row row--35 align-items-center">
                  <div className="col-lg-7 visibleOverParticles">
                    <div className="about-inner inner">
                      <div className="section-title">
                        <a href="/">
                          <h2 className="title">{title}</h2>
                        </a>
                        <p className="sub-title">{subtitle}</p>
                        <p className="description">
                          <br />
                          {description}
                        </p>
                      <div className="yellow-lego__parent">
                        <img className="yellow-lego" src={yellow} id="yellow lego block" alt="Lego block" />
                        <p className="yellow-lego-text">see collection</p>
                      </div>
                      </div>
                      {/* <div className="row mt--30">
                        <HomeTabs />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-socials">
            <p className="media-title">Our social media</p>
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {socials.map((val , i) => (
                                    <li key={i}><Link to={`${val.link}`}>{val.Social} {val.data && <strong className='data'>{val.data}</strong>}</Link></li>
                                ))}
                            </ul>
            </div>
          </div>
          <div>
              <Batman />
            </div>
        </div>
      </div>
    </div>
  );
}
// const styles = {
// 	obj: {
// 		// margin: 0,
// 		// padding: 0,
// 		// height: '200px',
// 		// width: '200px',
// 		position: 'fixed',
// 		top: '-3%',
// 		left: '62%',
// 		transform: 'translate(0%, 0%)',
//         // opacity: 0.8,
// 		// borderRadius: '50%',
// 		// backgroundColor: '#0083FF',
// 		// boxShadow: '0px 0px 20px 10px #0083FF'
// 	}
// }
