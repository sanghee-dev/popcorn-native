import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import Slider from "../../components/Slider";
import Poster from "../../components/Poster";
import Vote from "../../components/Vote";
import NoPoster from "../../components/NoPoster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const Title = styled.Text``;
const PosterContainer = styled.View`
  width: ${WIDTH / 3}px;
  height: ${WIDTH / 2}px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const Presenter = ({
  loading,
  nowPlaying,
  id,
  title,
  posterUrl,
  backdropUrl,
  vote,
  overview,
  release,
}) => {
  return (
    <Container
      style={StyleSheet.Container}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? (
        <ActivityIndicator color="rgb(0, 255, 84)" />
      ) : (
        <>
          <Title style={StyleSheet.Title}>{title}</Title>
          <Vote vote={vote} />
          <PosterContainer>
            {posterUrl?.length > 0 ? (
              <Poster posterUrl={posterUrl} />
            ) : (
              <NoPoster id={id} />
            )}
          </PosterContainer>
          {/* <Slider movieList={nowPlaying} title="Now Playing Movies" /> */}
        </>
      )}
    </Container>
  );
};

Presenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string,
  vote: PropTypes.number.isRequired,
};

export default Presenter;
