import React from "react";
import styled from "styled-components/native";
import StyleSheet from "../StyleSheet";
import { Dimensions, Platform } from "react-native";
import Swiper from "react-native-web-swiper";
import { WebView } from "react-native-webview";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 32px;
`;
const SwiperContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 1.7}px;
`;
const VideoContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 1.7}px;
  overflow: hidden;
`;

const VideoSlider = ({ videoList }) => {
  return (
    <Container>
      <SwiperContainer>
        <Swiper controlsEnabled={false}>
          {videoList.map((video) => (
            <VideoContainer key={video.key} style={StyleSheet.BorderRadius}>
              {Platform.OS === "web" ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  style={{ height: "100%" }}
                />
              ) : (
                <WebView
                  allowsFullscreenVideo
                  allowsInlineMediaPlayback
                  mediaPlaybackRequiresUserAction
                  source={{ uri: `https://www.youtube.com/embed/${video.key}` }}
                />
              )}
            </VideoContainer>
          ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  );
};

export default VideoSlider;
