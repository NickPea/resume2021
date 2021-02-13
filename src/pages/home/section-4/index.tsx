/**
 * Section 4
 */

import React from "react";
import styled from "styled-components";

//images
import gitHubSVGUrl from "./github.svg";

const SectionWrapper = styled.div`
  margin: 10vh 0;
  text-align: center;
`;
const FlexColNoWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const FlexRowWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;
const FlexAlign = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;
const ImageIcon = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  object-fit: contain;
`;
const Text = styled.div`
  margin-bottom: 10vh;
  font-size: 1.7rem;
  font-weight: 600;
`;
const Subtext = styled.div`
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-family: monospace;
`;
const ProjectItem = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
  &:hover {
    background-color: rgb(50, 50, 50);
    color: white;
  }
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 grey;
  &:hover {
    box-shadow: 50px 50px 100px lightgreen, -50px -50px 100px yellow,
      50px -50px 100px blue, -50px 50px 100px red;
  }
  transition: box-shadow 300ms ease-out;
`;
const FakeHyperLink = styled.span`
  color: darkblue;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
const RealHyperLinkWrapper = styled.a`
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: unset;
`;

//inherited
const ProjectItemOne = styled(ProjectItem)``;
const ProjectItemTwo = styled(ProjectItem)``;

const ThisPageSourceCodeFakeLink = styled(FakeHyperLink)`
  ${ProjectItemOne}:hover & {
    color: white;
  }
`;
const GitHubAllFakeLink = styled(FakeHyperLink)`
  ${ProjectItemTwo}:hover & {
    color: white;
  }
`;
const GitHubIcon = styled(ImageIcon)`
  margin-right: 10px;
  ${ProjectItemTwo}:hover & {
    background-color: white;
    box-shadow: 0 0 0 1px white;
  }
`;
const AmazingHighlight = styled.span`
  display: inline-block;
  margin: 10px 0;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px black, -1px -1px black, -1px 1px black, 1px -1px black,
    5px 5px lightgreen, -5px -5px yellow, 5px -5px lightblue, -5px 5px pink;
`;
const Underline = styled.span`
  text-decoration: underline;
`;

export default () => {
  return (
    <SectionWrapper>
      <FlexColNoWrap>
        <Text>
          To turn your <Underline>digital ideas</Underline> into something&nbsp;
          <AmazingHighlight>"Amazing"</AmazingHighlight>
        </Text>
        <FlexRowWrap>
          <ProjectItemOne>
            <RealHyperLinkWrapper href="https://github.com/NickPea/resume2021">
              <Subtext>
                Check out this <br /> page's source code <br /> for a quick
                demonstration
              </Subtext>
              <ThisPageSourceCodeFakeLink>
                Click Here!
              </ThisPageSourceCodeFakeLink>
            </RealHyperLinkWrapper>
          </ProjectItemOne>
          <ProjectItemTwo>
            <RealHyperLinkWrapper href="https://github.com/NickPea">
              <Subtext>
                Or browse through some <br /> of the other projects <br /> I've
                previously worked on.
              </Subtext>
              <FlexAlign>
                <GitHubIcon src={gitHubSVGUrl} />
                <GitHubAllFakeLink>GitHub/NickPea</GitHubAllFakeLink>
              </FlexAlign>
            </RealHyperLinkWrapper>
          </ProjectItemTwo>
        </FlexRowWrap>
      </FlexColNoWrap>
    </SectionWrapper>
  );
};
