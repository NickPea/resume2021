/**
 * CAREER TITLE
 */

//imports
import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

//styles
const BackgroundDiv = styled.div`
  background: linear-gradient(125deg, orange, #ffe4b3);
  border-radius: 5px;
  padding: 5px;
  display: flex;
`;
const Title = styled.h2`
  margin-left: 1%;
  color: white;
  font-weight: bolder;
  text-shadow: 1px 1px orange, -1px -1px orange;
`;

//render
const CareerTitle = () => {
  return (
    <>
      <BackgroundDiv>
        <Title>Javascript Web Developer</Title>
      </BackgroundDiv>
    </>
  );
};

export default CareerTitle;
