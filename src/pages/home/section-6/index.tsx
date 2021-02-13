/**
 * section three
 */

import React from "react";
import styled from "styled-components";

import leaveCodeBubbleSVGURL from "./leave-code-bubble.svg";

const SectionWrapper = styled.div`
  height: 30vh;
  background: url(${leaveCodeBubbleSVGURL}) no-repeat;
  background-position: right;
  background-size: 200px;
`;
const FlexCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
`;
const Text = styled.div`
  margin: 10vh 0;
  font-size: 1.7rem;
  font-weight: 600;
`;

export default () => {
  return <SectionWrapper></SectionWrapper>;
};
