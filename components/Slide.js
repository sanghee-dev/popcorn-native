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

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const Container = styled.View`
  margin-bottom: 16px;
`;
const Movie = styled.View`
  width: ${WIDTH / 3}px;
  margin-right: 16px;
  margin-bottom: 16px;
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

const Slide = ({ title, posterUrl, vote }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <Movie>
        <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
          <PosterContainer>
            <Poster posterUrl={posterUrl} />
          </PosterContainer>
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
  posterUrl: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default Slide;