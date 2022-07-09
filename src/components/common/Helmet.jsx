import React from "react";
import { Helmet, HelmetData } from "react-helmet-async";

const helmetData = new HelmetData({});

export default function ReactHelmet({ pageTitle, url }) {
  return (
    <React.Fragment>
      <Helmet helmetData={helmetData}>
        <title>{pageTitle ? pageTitle : "Coffee Lessonz"}</title>
        <link rel="canonical" href={url ? url : "coffeelessonz.com"} />
      </Helmet>
    </React.Fragment>
  );
}
