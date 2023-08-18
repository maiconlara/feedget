import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { captureScreen } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";

import { styles } from "./styles";
import { ArrowLeft } from "phosphor-react-native";
import { theme } from "../../theme";
import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { ScreenshotButton } from "../ScreenshotButton";
import { Button } from "../Button";
import { api } from "../../libs/api";

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCancel: () => void;
  onFeedbackSent: () => void;
}

export function Form({
  feedbackType,
  onFeedbackCancel,
  onFeedbackSent,
}: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [sendFeedback, setSendFeedback] = useState(false);
  const [comment, setComment] = useState("");

  const handleScreenshot = () => {
    captureScreen({
      format: "png",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => console.error(error));
  };
  const handleRemoveScreenshot = () => {
    setScreenshot(null);
  };

  const handleSendFeedback = async () => {
    if (sendFeedback) {
      return;
    }
    setSendFeedback(true);
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' }); 

    try {
      await api.post('/feedbacks',{
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,

      })

      onFeedbackSent();

    } catch (error) {
      console.error(error);
      setSendFeedback(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCancel}>
          <ArrowLeft
            size={24}
            color={theme.colors.text_secondary}
            weight="bold"
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>
      <TextInput
        multiline
        style={styles.input}
        placeholder="Por favor, descreva seu feedback..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleRemoveScreenshot}
          screenshot={screenshot}
        />
        <Button onPress={handleSendFeedback} isLoading={sendFeedback} />
      </View>
    </View>
  );
}
