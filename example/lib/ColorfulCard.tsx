import React from "react";
import { View, Text, Image, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./ColorfulCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IColorfulCardProps {
  style?: CustomStyleProp;
}

const ColorfulCard: React.FC<IColorfulCardProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{ marginLeft: 24, marginTop: 24 }}>
        <Text style={styles.titleTextStyle}>Heart Rate</Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 60,
          height: 60,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      >
        <Image
          source={require("./pulse.png")}
          style={{ height: 25, width: 25 }}
        />
      </View>
    </View>
  );
};

export default ColorfulCard;
