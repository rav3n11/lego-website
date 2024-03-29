import React from 'react'
import sellingPoints from './config';

export default function SellingPoints() {
    let title = 'Why Coffee Lessons?',
    description = 'Here are a few reason why you should choose Coffee Lessonz to learn programming...';
    return (
        <div id="service" className="service-area ptb--80  bg_image padd">
            <div className="container">
            <React.Fragment>
            <div className="row">
                <div className="col-lg-4 col-12 visibleOverParticles">
                    <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                        <h2 className="title"><span className="blueify">{title}</span></h2>
                        <p>{description}</p>
                        
                    </div>
                </div>
                <div className="col-lg-8 col-12 mt_md--50 visibleOverParticles">
                    <div className="row creative-service">
                        {sellingPoints.map( (val , i) => (
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 servicesmain" key={i}>
                                
                                    <div className="service service__style--2 darkcontent">
                                        <div className={val.title === 'Fun' ? "fun" : "icon"}>
                                            {val.icon}
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
            </div>
     </div>

    )
}
