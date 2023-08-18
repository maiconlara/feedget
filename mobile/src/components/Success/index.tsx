import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import succesImg from "../../assets/success.png";

import { styles } from "./styles";
import { Copyright } from "../Copyright";

interface SuccessProps {

    onSendNewFeedback: () => void;

}

export function Success({ onSendNewFeedback }: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image source={succesImg} style={styles.image} />
      <Text style={styles.title}> Agradeçemos o feedback </Text>

      <TouchableOpacity style={styles.button} onPress={onSendNewFeedback } >
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
