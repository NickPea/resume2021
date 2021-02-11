/**
 * home page
 */

import { Avatar } from "@material-ui/core";
import React, { Fragment } from "react";
import styled from "styled-components";

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

//utils
const FlexCol = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
const FlexRow = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

//panels
const PanelWrapper = styled(FlexRow)`
  height: 100%;
`;
const LeftPanel = styled(FlexCol)`
  flex: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const RightPanel = styled(FlexCol)`
  flex: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

//content left
const MeAvatar = styled(Avatar)`
  height: 200px !important;
  width: 200px !important;
  box-shadow: 0 0 0px 3px rgb(75, 75, 75);

  margin: 30px 0;
`;
const Name = styled.span`
  font-size: 2rem;
  font-weight: 900;
`;
const Job = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: monospace;
`;

//content right
const PaperWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 10px 0 grey;
  height: 85%;
  width: 85%;
  padding: 20px;
`;
const BlurbTitle = styled.div``;
const BlurbText = styled.div``;

export default () => {
  return (
    <Fragment>
      <Background>
        <Overlay>
          {/*  */}
          <PanelWrapper>
            <LeftPanel>
              <MeAvatar src={meImageUrl} />
              <Name>Nicholas Phillips</Name>
              <Job>Javascript Developer</Job>
            </LeftPanel>
            <RightPanel>
              <PaperWrapper>
                  <BlurbTitle>G'day</BlurbTitle>
                  <BlurbText>Thanks for considering me.</BlurbText>
              </PaperWrapper>
            </RightPanel>
          </PanelWrapper>
          {/*  */}
        </Overlay>
      </Background>
    </Fragment>
  );
};
