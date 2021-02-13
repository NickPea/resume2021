/**
 * section two
 */

import React from "react";
import styled from "styled-components";

//images
import greetCodeBubbleSVGURL from "./greet-code-bubble.svg";

const SectionWrapper = styled.div`
  padding: 20vh 0 10vh 0;
  background: url(${greetCodeBubbleSVGURL}) no-repeat;
  background-position: 57% 0;
  background-size: 200px;
  /* @media (max-width: 750px) {
    background: none; */
  }
`;
const FlexCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Text = styled.div`
  padding: 20px 0;
  font-size: 1.7rem;
  font-weight: 600;
`;
const SubText = styled.div`
  padding: 20px 0;
  font-size: 1.2rem;
  font-family: monospace;
`;
const IntroText = styled(Text)`
  @media (max-width: 600px) {
    margin-top: 8vh;
  }
`;

export default () => {
  return (
    <SectionWrapper>
      <FlexCol>
        <IntroText>
          I'm Nick,
          <br />a React & NodeJs <br /> Developer,
        </IntroText>
        <SubText>"A creator of fun web applications", <br/> one might say.</SubText>
      </FlexCol>
    </SectionWrapper>
  );
};
