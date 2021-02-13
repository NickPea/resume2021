/**
 * Section 4
 */

import React, { Fragment } from "react";
import styled from "styled-components";
import Swing from "react-reveal/Swing";
import Tooltip from "@material-ui/core/Tooltip";

//images
import imageUrls from "./images";

const SectionWrapper = styled.div`
  background-color: rgb(50, 50, 50);
  color: white;
`;
//panels
const FlexRowLayout = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row wrap;
`;
const LeftPanelFlexItem = styled.div`
  /* background-color: lightgreen; */
  height: auto;
  flex: 40%;
  @media (max-width: 600px) {
    flex: 100%;
  }
`;
const RightPanelFlexItem = styled.div`
  /* background-color: orange; */
  height: 100%;
  flex: 60%;
  @media (max-width: 600px) {
    flex: 100%;
  }
`;
//content-left
const FlexCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Text = styled.div`
  margin: 10vh 0;
  font-size: 1.7rem;
  font-weight: 600;
`;
const SubText = styled.div`
  padding: 20px 0;
  font-size: 1.2rem;
  font-family: monospace;
`;
const Highlight = styled.span`
  font-style: italic;
  font-family: cursive;
`;
//content-right
const FlexRowWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;
const ImageList = styled(FlexRowWrap)`
  margin: 10vh 0;
  @media (max-width: 600px) {
    margin: 0 0 10vh 0;
  }
`;
const ImageIcon = styled.img`
  margin: 15px 0;
  height: 150px;
  width: 150px;
  object-fit: contain;
`;


export default () => {
  return (
    <SectionWrapper>
      <FlexRowLayout>
        <LeftPanelFlexItem>
          <FlexCenter>
            <Text>
              I come equipped <br /> with some of <br /> the{" "}
              <Highlight>finest</Highlight> tools <br /> available.
            </Text>
          </FlexCenter>
        </LeftPanelFlexItem>
        <RightPanelFlexItem>
          <ImageList>
            {imageUrls.map((img) => {
              return (
                <Swing>
                  <Tooltip
                    arrow
                    placement="top"
                    title={
                      <Fragment>
                        <SubText>{img.name}</SubText>
                      </Fragment>
                    }
                  >
                    <ImageIcon src={img.url} />
                  </Tooltip>
                </Swing>
              );
            })}
          </ImageList>
        </RightPanelFlexItem>
      </FlexRowLayout>
    </SectionWrapper>
  );
};
