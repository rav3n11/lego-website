import React from "react";
import config from "./config";
import HomeTabs from "../../tabs/Tabs";
import ItemCard from "../../ItemCard";
import { Link } from "react-router-dom";
// import Cup from '../../cup/Cup';
import JSX_withParallax from "../../../util/ParallaxJSXWrapper";
import batman from "../../../assets/icons/batman.svg";
// import superman from "../../../assets/icons/lego-superman.svg";
import yellow from "../../../assets/icons/yellow.svg";

import pool from "../../../assets/icons/pool.svg";
import hulk from "../../../assets/icons/hulk.svg";
import spidy from "../../../assets/icons/spidy.svg";
import supes from "../../../assets/icons/lego-superman.svg";
import loki from "../../../assets/icons/loki.svg";

import HorizontalScroll from "react-scroll-horizontal";
import MoreCard from "../../MoreCard";
import { useState } from "react";
import SectionHeader from "../../SectionHeader/SectionHeader";
export default function Body() {
  let title = config.title,
    description = config.description,
    subtitle = config.subtitle,
    socials = config.socials;

  const [hoverid, setHoverid] = useState(0);

  const setHover = (id) => {
    console.log("setting", id);
    setHoverid(id);
  };
  const resetHover = () => {
    console.log("resetting");
    setHoverid(0);
  };

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
                          <img
                            className="yellow-lego"
                            src={yellow}
                            id="yellow lego block"
                            alt="Lego block"
                          />
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
                {socials.map((val, i) => (
                  <li key={i}>
                    <Link to={`${val.link}`}>
                      {val.Social}{" "}
                      {val.data && <strong className="data">{val.data}</strong>}
                    </Link>
                  </li>
                ))}
              </ul>
              <SectionHeader
              color="red"
              number="1"
              title="New Characters"
              />
            </div>
          </div>
          <div className="about-overlay">
            <Batman />
            <div className="horizontal-wrapper">
              {/* <HorizontalScroll reverseScroll={true}> */}
              <div className="cards">
                <ItemCard
                  title="Cpt. Deadpool"
                  description="Merc with a mouth. This action figure is the only one knows about you. Some more lorem ipsum text here..."
                  image={pool}
                  color="red"
                />
                <ItemCard
                  title="HULK"
                  description="SMASH! By far the strongest avenger. Just don't let thor hear you say that. "
                  image={hulk}
                  color="green"
                />
                <ItemCard
                  title="Spider Man"
                  description="Something's tingling. Maybe its your sense of limitless adventure with this spiderman lego set."
                  image={spidy}
                  color="blue"
                />
                <ItemCard
                  title="Loki"
                  description="The God of mischeif. This set of the loki will make you feel like you're in a different universe. "
                  image={loki}
                  color="yellow"
                />
                <ItemCard
                  title="Superman"
                  description="Ready to win every game of top trumps ever. This leog set of the supes will surely accomplish that. "
                  image={supes}
                  img_size="small"
                  color="red"
                />
              </div>
              {/* </HorizontalScroll> */}
            </div>
          </div>
        </div>

        <div className="circle__red" />
        <div className="more-cards">
          <MoreCard
            hover={() => setHover(0)}
            hoverEnd={resetHover}
            title="More items"
            description="Check out more sets from our collection. These sets are all made with lego bricks. Tons of lots of stuff. I have a thriving incubator. It is thriving. You're lucky I've let you leach off so much of my time. Check out more sets from our collection. These sets are all made with lego bricks. Tons of lots of stuff. I have a thriving incubator. It is thriving. You're lucky I've let you leach off so much of my time."
            image={supes}
            img_size="small"
            color="yellow"
            small_card={hoverid === 0}
          />
          <MoreCard
            hover={() => setHover(1)}
            hoverEnd={resetHover}
            title="More items"
            description="Check out more sets from our collection. These sets are all made with lego bricks. Tons of lots of stuff. I have a thriving incubator. It is thriving. You're lucky I've let you leach off so much of my time. Check out more sets from our collection. These sets are all made with lego bricks. Tons of lots of stuff. I have a thriving incubator. It is thriving. You're lucky I've let you leach off so much of my time."
            image={supes}
            img_size="small"
            color="blue"
            small_card={hoverid === 1}
          />
        </div>

        <div className="circle__green" />
        <div className="black__wrapper">
          <div className="circle__black" />
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
