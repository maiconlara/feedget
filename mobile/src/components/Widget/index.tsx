import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { Options } from "../Options";
import { Form } from "../Form";
import { Success } from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [feedbackChoice, setFeedbackChoice] = useState<FeedbackType | null>();
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const handleFeedbackCancel = () => {
    setFeedbackChoice(null);
    setFeedbackSent(false);
  };

  const handleFeedbackSent = () => {
    setFeedbackSent(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[0.1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <Success onSendNewFeedback={handleFeedbackCancel}/>
        ) : (
          <>
            {feedbackChoice ? (
              <Form
                feedbackType={feedbackChoice}
                onFeedbackCancel={handleFeedbackCancel}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options onChangeFeedbackType={setFeedbackChoice} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}
export default gestureHandlerRootHOC(Widget);
