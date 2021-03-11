import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import Poster from "../../components/Poster";
import Vote from "../../components/Vote";
import NoPoster from "../../components/NoPoster";
import VideoSlider from "../../components/Detail/VideoSlider";
import CreditSlider from "../../components/Detail/CreditSlider";

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
  video,
  credits,
  collection,
  reviews,
  videoError,
  creditsError,
  collectionError,
  reviewsError,
  id,
  title,
  posterUrl,
  backdropUrl,
  vote,
  overview,
  release,
}) => {
  console.log(credits);

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
          <VideoSlider videoList={video} />
          <CreditSlider creditList={credits.cast} />

          <Vote vote={vote} />
          <PosterContainer>
            {posterUrl?.length > 0 ? (
              <Poster posterUrl={posterUrl} />
            ) : (
              <NoPoster id={id} />
            )}
          </PosterContainer>
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
