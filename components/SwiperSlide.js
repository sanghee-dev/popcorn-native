import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Backdrop from "./Backdrop";
import Vote from "./Vote";
import NoPoster from "./NoPoster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  height: 100%;
`;
const Movie = styled.View`
  width: 100%;
  height: 100%;
`;
const BackdroprContainer = styled.View`
  width: 100%;
  height: ${WIDTH / 2.5}px;
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 0;
`;
const Info = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const VoteContainer = styled.View`
  font-size: 24px;
`;
const Text = styled.Text``;
const LikeButton = styled.Text`
  position: absolute;
  left: ${WIDTH - 60}px;
  bottom: 12px;
`;

const SwiperSlide = ({ title, id, backdropUrl, vote, overview, release }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <Movie>
        <Info>
          <Text style={StyleSheet.Title} numberOfLines={1}>
            {title}
          </Text>
          {/* <Text style={StyleSheet.Title} numberOfLines={1}>
            {release.substring(2).replaceAll("-", ".")}
          </Text> */}
          <VoteContainer>
            <Vote vote={vote} />
          </VoteContainer>
        </Info>

        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <BackdroprContainer>
            {backdropUrl?.length > 0 ? (
              <Backdrop backdropUrl={backdropUrl} />
            ) : (
              <NoPoster id={id} />
            )}
          </BackdroprContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <LikeButton>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={20}
              color={liked ? "rgb(255, 0, 84)" : "rgb(190, 184, 184)"}
            />
          </LikeButton>
        </TouchableOpacity>

        <Info>
          <Text style={StyleSheet.Subtitle} numberOfLines={3}>
            {overview}
          </Text>
        </Info>
      </Movie>
    </Container>
  );
};

SwiperSlide.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string,
  vote: PropTypes.number.isRequired,
};

export default SwiperSlide;
