/**
 * LANDING TEMPLATE
 */

import React from "react";

//imports
import { Avatar, Container, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

//components
import CareerTitle from "./career-title";
import NameTitle from "./name-title";

//styles
const LayoutWrapper = styled.div`
  padding: 30px 5%;
`;

//render
export default () => {
  return (
    <React.Fragment>
      {/*  */}

      <LayoutWrapper>
        <Grid container>
          <Grid item xs={12}>
            <NameTitle />
          </Grid>
          <Grid item xs={12}>
            <CareerTitle />
          </Grid>
          <Grid item xs={12}>
            {/* skill summary */}
          </Grid>
        </Grid>
        {/* //container */}
      </LayoutWrapper>

      {/*  */}
    </React.Fragment>
  );
};
