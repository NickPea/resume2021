/**
 * SKILL SET
 */

import { Avatar, Chip, LinearProgress, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import styled from "styled-components";

//icons/images
import reactIcon from "./react.png";

//styles
const DivWrapper = styled.div`
  padding: 15px 5px;
`;
const Title = styled.span`
  text-decoration: underline;
`;
const SkillListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const SkillItemWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default () => {
  return (
    <DivWrapper>
      <Title>Skill Summary</Title>
      <SkillListWrapper>
        <SkillItemWrapper>
            <Avatar src={reactIcon} />
            <span>React</span>
            <LinearProgress value={80} />
        </SkillItemWrapper>
      </SkillListWrapper>
    </DivWrapper>
  );
};
