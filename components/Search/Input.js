import React, { useState } from "react";
import styled, { css } from "styled-components/native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TextInput = styled.TextInput`
  flex: 1;
  height: 48px;
  border-color: rgb(95, 95, 95);
  border-width: 1px;
  padding-left: 38px;
  padding-right: 16px;
  border-radius: 24px;
  font-size: 20px;
  margin-bottom: 64px;
  ${Platform.select({
    web: css`
      caret-color: rgb(0, 255, 84);
      outline-style: none;
    `,
  })};
`;
const SearchIcon = styled.View`
  position: absolute;
  left: 12px;
  top: 13px;
`;

const Input = ({ keyword, onChangeText, onSubmitEditing }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <SearchIcon>
        <Ionicons
          name="search"
          size={20}
          color={isFocused ? "rgb(0, 255, 84)" : "rgb(95, 95, 95)"}
        />
      </SearchIcon>
      <TextInput
        value={keyword}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          borderColor: isFocused ? "rgb(0, 255, 84)" : "rgb(95, 95, 95)",
        }}
        maxLength={24}
        placeholder="Search Movies or TV shows..."
        placeholderTextColor={
          isFocused ? "rgb(150, 150, 150)" : "rgb(95, 95, 95)"
        }
        selectionColor="rgb(0, 255, 84)"
        returnKeyType="search"
        clearTextOnFocus={true}
      />
    </Container>
  );
};

Input.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
