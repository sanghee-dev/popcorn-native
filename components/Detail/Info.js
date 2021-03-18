import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  width: ${WIDTH / 2 - 32}px;
  margin-right: 32px;
  margin-bottom: 32px;
`;
const InfoContainer = styled.View`
  width: ${WIDTH / 2 - 32}px;
`;
const Title = styled.Text``;
const SubInfo = styled.Text`
  margin-top: 4px;
`;
const Overview = styled.Text``;
const MoreContainer = styled.TouchableOpacity`
  width: ${WIDTH / 2 - 32}px;
  height: 22px;
  align-items: flex-end;
`;
const More = styled.Text`
  width: 50px;
  color: rgb(0, 255, 84);
`;

const Info = ({ title, overview, release, runtime }) => {
  const [more, setMore] = useState(false);

  return (
    <Container>
      <InfoContainer>
        <Title style={StyleSheet.Title} numberOfLines={1}>
          {title}
        </Title>
        <SubInfo style={StyleSheet.Subtitle}>
          <Title>{release.substring(0, 4)} </Title>
          <Title>{" 19+ "}</Title>
          <Title>{runtime}min</Title>
        </SubInfo>
        <Overview style={StyleSheet.Subtitle} numberOfLines={more ? 15 : 6}>
          {overview}
        </Overview>
        <MoreContainer>
          <More
            style={StyleSheet.Subtitle}
            onPress={() => setMore((prev) => !prev)}
          >
            More
          </More>
        </MoreContainer>
      </InfoContainer>
    </Container>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  release: PropTypes.string,
  runtime: PropTypes.number,
};

export default Info;
