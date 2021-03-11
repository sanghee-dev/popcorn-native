import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import VideoSlider from "../../components/Detail/VideoSlider";
import CreditSlider from "../../components/Detail/CreditSlider";
import CollectionSlider from "../../components/Detail/CollectionSlider";
import Info from "../../components/Detail/Info";
import ReviewSlider from "../../components/Detail/ReviewSlider";
import CompanySlider from "../../components/Detail/CompanySlider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const Title = styled.Text``;
const RowContainer = styled.View`
  flex-direction: row;
`;

const Presenter = ({
  loading,
  video,
  credits,
  reviews,
  id,
  title,
  posterUrl,
  backdropUrl,
  vote,
  overview,
  release,
  detail,
}) => {
  console.log(detail);

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
          {video && <VideoSlider videoList={video} />}

          <RowContainer>
            <Info title={title} overview={overview} />
            {detail.production_companies && (
              <CompanySlider companies={detail.production_companies} />
            )}
          </RowContainer>

          {credits && <CreditSlider creditList={credits.cast} />}
          {detail.seasons && (
            <CollectionSlider collectionList={detail.seasons} />
          )}
          <RowContainer>
            {reviews && <ReviewSlider reviews={reviews} />}
          </RowContainer>
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
