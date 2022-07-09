import React from 'react'
import config from "./config";
import HomeTabs from '../../tabs/Tabs';
import Cup from '../../cup/Cup';
import JSX_withParallax from '../../../util/ParallaxJSXWrapper'
export default function Body() {
    let title = config.title, description = config.description, subtitle = config.subtitle;

    const CoffeeCup = JSX_withParallax(<div style={styles.obj}><Cup/></div>,  0.05)

    return (

         <div id="about" className="fix">
         <div className="about-area ptb--120  bg_color--1">
             <div className="about-wrapper">
                    <div className='circle__blue'></div>
                <div className='body-card'>
                    <div className='circle__blue'>
                        <div className="container">
                     <div className="row row--35 align-items-center">
                         <div className="col-lg-7 visibleOverParticles">
                             <div className="about-inner inner">
                                 <div className="section-title">
                                     <p className="description">
                                               {subtitle}
                                     </p>
                                     <a href="/"><h2 className="title">{title}</h2></a>
                                     <p>
                                     <br/>
                                        {description}
                                     </p>
                                 </div>
                                 <div className="row mt--30">
                                    <HomeTabs/>
                                 </div>
                             </div>
                             <div className="cup">
                                 <CoffeeCup/>
                             </div>
                         </div>
                     </div>
                 </div>
                    </div>
                 
             </div>
                </div>
                
         </div>
     </div>
     
    )
}
const styles = {
	obj: {
		// margin: 0,
		// padding: 0,
		// height: '200px',
		// width: '200px',
		position: 'fixed',
		top: '-3%',
		left: '62%',
		transform: 'translate(0%, 0%)',
        // opacity: 0.8,
		// borderRadius: '50%',
		// backgroundColor: '#0083FF',
		// boxShadow: '0px 0px 20px 10px #0083FF'
	}
}