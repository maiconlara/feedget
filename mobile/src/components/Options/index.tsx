import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Copyright } from "../Copyright";

export function Options() {
  return (
    <View style={styles.container}>
      <Copyright />
    </View>
  );
}
