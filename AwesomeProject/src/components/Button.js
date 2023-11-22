import React from "react";
import { Text, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title = "", styleProp, children } = props;
  return (
    <Pressable style={{ ...styleProp?.button }} onPress={onPress}>
      <Text style={{ ...styleProp?.text }}>{title}</Text>
      {children}
    </Pressable>
  );
}
