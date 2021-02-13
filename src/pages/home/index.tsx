/**
 * Home Page Index
 */

import React, { Fragment } from "react";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import SectionThree from "./section-3";
import SectionFour from "./section-4";
import SectionFive from './section-5';
import SectionSix from "./section-6";

import SectionFooter from "./section-6";

export default () => {
  return (
    <Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </Fragment>
  );
};
