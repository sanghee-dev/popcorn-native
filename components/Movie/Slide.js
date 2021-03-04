import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import PropTypes from "prop-types";

const Container = styled.View``;
const slideContainer = styled.View``;
const Section = styled.View``;
const Title = styled.Text``;

export default () => (
  <Container>
    <Swiper>
      <Section>Slide 1</Section>
      <Section>Slide 2</Section>
      <Section>Slide 3</Section>
    </Swiper>
  </Container>
);
