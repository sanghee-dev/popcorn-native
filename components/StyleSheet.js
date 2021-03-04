import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Gray: {
    color: "rgb(190, 184, 184)",
  },
  Green: {
    color: "rgb(0, 255, 84)",
  },

  Title: {
    fontFamily: "ObjectSans-Regular",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 21,
  },
  Text: {
    fontFamily: "ObjectSans-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 17,
  },
  SubText: {
    fontFamily: "ObjectSans-Regular",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 13,
  },

  BorderRadius: {
    borderRadius: 8,
  },
  Border: {
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "rgb(0, 255, 84)",
    borderWidth: 1,
  },

  Container: {
    backgroundColor: "rgb(190, 184, 184)",
    flex: 1,
    padding: 16,
  },
  Button: {
    backgroundColor: "rgb(0, 255, 84)",
    padding: 6,
    borderRadius: 8,
    textAlign: "center",
  },
  ButtonText: {
    fontFamily: "ObjectSans-Regular",
    fontWeight: "600",
    fontSize: 12,
  },
});
