import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Copyright } from "../Copyright";
import { Option } from "../Option";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { FeedbackType } from "../Widget";

interface OptionProps {
  onChangeFeedbackType: (feedbackType: FeedbackType) => void;
}

export function Options({ onChangeFeedbackType }: OptionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onChangeFeedbackType(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
