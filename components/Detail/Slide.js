import React, { useState } from "react";
import styled from "styled-components/native";
import StyleSheet from "./StyleSheet";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Poster from "./Poster";
import Vote from "./Vote";
import NoPoster from "./NoPoster";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View``;
const Movie = styled.View`
  width: ${WIDTH / 3}px;
  margin-right: 16px;
`;
const PosterContainer = styled.View`
  width: ${WIDTH / 3}px;
  height: ${WIDTH / 2}px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;
const Info = styled.View`
  width: 100%;
`;
const Text = styled.Text``;
const LikeButton = styled.Text`
  position: absolute;
  left: ${WIDTH / 3 - 24}px;
  bottom: 20px;
`;

const Slide = ({
  title,
  id,
  posterUrl,
  backdropUrl,
  vote,
  overview,
  release,
}) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <Movie>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detail", {
              title,
              id,
              posterUrl,
              backdropUrl,
              vote,
              overview,
              release,
            })
          }
        >
          <PosterContainer>
            {posterUrl?.length > 0 ? (
              <Poster posterUrl={posterUrl} />
            ) : (
              <NoPoster id={id} />
            )}
          </PosterContainer>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <LikeButton>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={20}
              color={liked ? "rgb(255, 0, 84)" : "rgb(210, 204, 204)"}
            />
          </LikeButton>
        </TouchableOpacity>

        <Info>
          <Text style={StyleSheet.Text} numberOfLines={1}>
            {title}
          </Text>
          <Vote vote={vote} />
        </Info>
      </Movie>
    </Container>
  );
};

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string,
  vote: PropTypes.number.isRequired,
};

export default Slide;
