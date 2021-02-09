/**
 * LANDING TEMPLATE
 */

import React, { useEffect } from "react";

//imports
import { Avatar, Container, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

//components
import CareerTitle from "./career-title";
import NameTitle from "./name-title";
import Summary from "./summary";
import SkillSet from "./skill-set";
import { useDispatch, useSelector } from "react-redux";

//styles
const LayoutWrapper = styled.div`
  padding: 30px 5%;
`;

//render
export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "APP->SAGA:LANDING-PAGE/HYDRATE" });
  }, []);

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
            <Summary />
          </Grid>
          <Grid item xs={12}>
            <SkillSet />
          </Grid>
        </Grid>
        {/* //container */}
      </LayoutWrapper>

      {/*  */}
    </React.Fragment>
  );
};
