import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import StyleSheet from "../../components/StyleSheet";
import { Dimensions, ActivityIndicator, RefreshControl } from "react-native";
import PropTypes from "prop-types";
import VideoSlider from "../../components/Detail/VideoSlider";
import CreditSlider from "../../components/Detail/CreditSlider";
import CollectionSlider from "../../components/Detail/CollectionSlider";
import Info from "../../components/Detail/Info";
import ReviewSlider from "../../components/Detail/ReviewSlider";
import CompanySlider from "../../components/Detail/CompanySlider";
import LinkButton from "../../components/Detail/LinkButton";
import { movieApi } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.ScrollView``;
const Title = styled.Text``;
const InfoContainer = styled.View`
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
  collection,
  refreshFn,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };

  console.log(detail);

  return (
    <Container
      style={StyleSheet.Container}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor="rgb(0, 255, 84)"
        />
      }
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
          <InfoContainer>
            <Info
              title={title}
              overview={overview}
              release={release}
              vote={vote}
              runtime={detail.runtime}
              adult={detail.adult}
              tagline={detail.tagline}
            />
            {detail.production_companies && (
              <CompanySlider companies={detail.production_companies} />
            )}
          </InfoContainer>
          {credits && <CreditSlider creditList={credits.cast} />}
          {detail.seasons && (
            <CollectionSlider collectionList={detail.seasons} />
          )}
          {collection?.parts && (
            <CollectionSlider collectionList={collection.parts} />
          )}

          {/* {reviews && <ReviewSlider reviews={reviews} />} */}

          {detail.imdb_id && <LinkButton imdb_id={detail.imdb_id} />}
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
