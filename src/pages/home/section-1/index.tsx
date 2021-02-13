/**
 * home page
 */

import { Avatar, rgbToHex } from "@material-ui/core";
import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { init as iTypedInit } from "ityped";

//images
import codeImageUrl from "./code.jpg";
import meImageUrl from "./me.jpg";

const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url(${codeImageUrl});
`;
const Overlay = styled.div`
  position: absolute;
  top: calc(50% - 45vh);
  left: calc(50% - 45vw);

  height: 90vh;
  width: 90vw;
  background-color: rgba(255, 255, 255, 0.8);
`;

const SectionFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

//content left
const MeAvatar = styled(Avatar)`
  margin: 20px;
  height: 300px !important;
  width: 300px !important;
  box-shadow: 0 0 0px 10px rgb(75, 75, 75);
  @media (max-width: 600px) {
    height: 200px !important;
    width: 200px !important;
  }
`;

const TitlesWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
`;

const Name = styled.span`
  font-size: 2.5rem;
  font-weight: 900;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
const Job = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: monospace;
`;

export default () => {
  useEffect(() => {
    //
    const iTypedElement = document.querySelector("#iTyped");
    iTypedInit(iTypedElement, {
      backDelay: 1500,
      showCursor: true,
      strings: ["Dev", "Advocate", "Composer"],
    });
    //
  }, []);

  return (
    <Fragment>
      <Background>
        <Overlay>
          <SectionFlex>
            <MeAvatar src={meImageUrl} />
            <TitlesWrapper>
              <Name>Nicholas Phillips</Name>
              <Job>
                Javascript&nbsp;<span id="iTyped">{/**/}</span>
              </Job>
            </TitlesWrapper>
          </SectionFlex>
        </Overlay>
      </Background>
    </Fragment>
  );
};
