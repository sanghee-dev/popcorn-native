import React, { useEffect, useState } from "react";
import Presenter from "./Presenter";

export default () => {
  const [keyword, setKeyword] = useState("");
  const onChangeText = (text) => {
    setKeyword(text);
  };
  const onSubmitEditing = () => {
    console.log(keyword);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
    }
    return () => (mounted = false);
  }, []);

  return (
    <Presenter
      keyword={keyword}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};
