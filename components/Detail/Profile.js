import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { imageApi } from "../api";

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Profile = ({ profileUrl }) => {
  return <Image resizeMode="cover" source={{ uri: imageApi(profileUrl) }} />;
};

Profile.propTypes = { profileUrl: PropTypes.string.isRequired };

export default Profile;
