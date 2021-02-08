/**
 * SUMMARY
 */

import React from "react";

//imports
import styled from "styled-components";

//styles
const DivWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;
const SummaryText = styled.h4`
    color: grey;
    font-style: italic;
`;

//render
export default () => {
    return (
        <DivWrapper>
            <SummaryText>
                Hello Joe, Lisa needs braces, dental plan.
                
             </SummaryText>
        </DivWrapper>
    )
}