/**
 * PROFILE TITLE
 */
import React, { Fragment } from "react";

//imports
import { Avatar, Typography } from "@material-ui/core";
import styled from "styled-components";

//image
import profilePhotoUrl from "./profile-photo.jpeg";

//styles
const DivWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding:10px;
`;
const StyledAvatar = styled(Avatar)`
  margin-right: 10px;
`;
const NameTitle = styled.h1`
  color: rgb(94, 94, 94);
  font-size: 2rem;
`;

//render
const ProfileTitle = () => {
  return (
    <DivWrapper>
      <StyledAvatar src={profilePhotoUrl}></StyledAvatar>
      <NameTitle>Nick Phillips</NameTitle>
    </DivWrapper>
  );
};

export default ProfileTitle;
