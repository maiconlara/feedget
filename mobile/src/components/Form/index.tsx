import React from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { theme } from "../../theme";
import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";

interface FormProps {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            color={theme.colors.text_secondary}
            weight="bold"
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
            <Image source={feedbackTypeInfo.image} style={styles.image}
            
            />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>
    </View>
  );
}
