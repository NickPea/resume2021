/**
 * Section 4
 */

import React from "react";
import styled from "styled-components";
import { Slide } from "react-reveal";

//icons
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const SectionWrapper = styled.div`
  padding: 10vh 0;
  background-color: rgb(50, 50, 50);
  color: white;
  text-align: center;
`;
const FlexRowWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;
const FlexColNoWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;
const ContactItem = styled.a`
  color: white;
  text-decoration: none;

  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  margin: 5px 0;
  &:hover {
    background-color: white;
    color: black;
  }

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
const Text = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;
const SubText = styled.div`
  font-size: 1.2rem;
  font-family: monospace;
`;
const IconMarginRight = styled.span`
  margin-right: 15px;
`;
const HeadingText = styled(Text)`
  margin: 10vh 0;
  height: 300px;
  width: 300px;
  border: 3px solid white;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <SectionWrapper>
      <FlexRowWrap>
        <HeadingText>
          Lets chat <br /> about your next <br /> project
        </HeadingText>
        <FlexColNoWrap>
        <SubText>Contact me on</SubText>
          <Slide right big>
            <ContactItem href="tel:61+492987804">
              <IconMarginRight>
                <PhoneAndroidOutlinedIcon />
              </IconMarginRight>
              <SubText>0492 987 804</SubText>
            </ContactItem>
          </Slide>
          <SubText>- OR -</SubText>
          <Slide right big>
            <ContactItem href="mailto:nickp2287@gmail.com">
              <IconMarginRight>
                <EmailOutlinedIcon />
              </IconMarginRight>
              <SubText>nickp2287@gmail.com</SubText>
            </ContactItem>
          </Slide>
        </FlexColNoWrap>
      </FlexRowWrap>
    </SectionWrapper>
  );
};
