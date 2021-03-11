import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions } from "react-native";
import Vote from "../Vote";
import Poster from "../Poster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 32px;
  height: ${WIDTH / 2}px;
  flex-direction: row;
`;
const PosterContainer = styled.View`
  width: ${WIDTH / 3}px;
  height: ${WIDTH / 2}px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
`;
const InfoContainer = styled.View`
  width: ${(WIDTH / 3) * 2 - 50}px;
`;
const VoteContainer = styled.View`
  margin: 4px 0;
`;
const Title = styled.Text``;

const Info = ({ title, vote, overview, posterUrl }) => {
  return (
    <Container>
      <PosterContainer>
        <Poster posterUrl={posterUrl} />
      </PosterContainer>
      <InfoContainer>
        <Title style={StyleSheet.Title} numberOfLines={2}>
          {title}
        </Title>
        <VoteContainer>
          <Vote vote={vote} />
        </VoteContainer>
        <Title style={StyleSheet.Subtitle} numberOfLines={7}>
          {overview}
        </Title>
      </InfoContainer>
    </Container>
  );
};

export default Info;
