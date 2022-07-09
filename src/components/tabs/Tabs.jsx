import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { mobile_tabs} from "./config";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function HomeTabs() {
  let tab1 = "Download the app",
    tab3 = "Use the web version";
  let tabStyle = "tab-style--1";

  const [downloading, setDownloading] = React.useState(-1);

  useEffect(() => {
    if(downloading !== -1)
      setTimeout(() => {
        setDownloading(-1);
      }, 2500);
  }, [downloading]);

  return (
    <div className="padd-topp">
      {/* Start Tabs Area */}
      <div className="tabs-area">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{tab1}</Tab>
                  {/*   <Tab>{tab2}</Tab>   */}
                  <Tab>{tab3}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content inline">
                    {mobile_tabs.map((e, i) => (
                      <div
                        className="col-lg-6 col-md-6 col-sm-6 col-12 servicesmain"
                        key={i}
                      >
                        {/* temporarily until we add an ios app */}
                        <Link onClick={() => setDownloading(i)} to="/files/coffeeLessonz-v1.0.apk" target="_blank" download>
                        <div className={`service service__style--3 darkcontent ${i!==0? 'disabled' : ''}`}>
                          <div className="icon">{downloading===i ? <AiOutlineLoading3Quarters className="spin"/> : e.icon}</div>
                          <div style={{ opacity: 0 }}>spacer</div>
                          <div className="content">
                            <h3 className="title">{e.title}</h3>
                          {e.element && <div className="chip">
                            <button className="element">{e.element}</button>
                          </div>}
                          </div>
                        </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="coming__soon padd padd-topp" style={{height: '340px'}}>
                    <h3 className="title">Coming soon...</h3>
                  </div>
                </TabPanel>
                {/* ------left for when there is a button here-----
                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      {experience.map((val, i) => (
                        <li key={i}>
                          <span className="tabHeader">
                            {val.title} -{" "}
                            <span className="lvl">{val.company}</span>
                          </span>
                          <br />
                          {val.timeline}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel> */}
              </Tabs>
            </div>
          </div>
      </div>
      {/* End Tabs Area */}
    </div>
  );
}
