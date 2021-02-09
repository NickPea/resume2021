/**
 * SUMMARY
 */

import React from "react";
import { useSelector } from "react-redux";

//imports
import styled from "styled-components";

//styles
const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
  }
`;
const SummaryText = styled.h4`
  color: #777777;
  font-style: italic;
`;

//render
export default () => {
  const summary = useSelector((state) => state.landing_page.summary);

  return (
    <DivWrapper>
      <SummaryText>{summary}</SummaryText>
    </DivWrapper>
  );
};
