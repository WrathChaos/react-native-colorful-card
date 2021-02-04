import React from "react";
import { View, Text, Image, StyleProp, ViewStyle } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./ColorfulCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IColorfulCardProps {
  style?: CustomStyleProp;
  onPress: () => void;
}

const ColorfulCard: React.FC<IColorfulCardProps> = ({ style, onPress }) => {
  const renderTitle = () => (
    <View style={{}}>
      <Text style={styles.titleTextStyle}>Heart Rate</Text>
    </View>
  );

  const renderIconContainer = () => (
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
  );

  const renderContent = () => (
    <View
      style={{ marginTop: 32, flexDirection: "row", alignItems: "flex-end" }}
    >
      <Text style={{ color: "#fff", fontSize: 24, fontWeight: "600" }}>
        124
      </Text>
      <Text
        style={{
          marginLeft: 8,
          color: "#fff",
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        bpm
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View
      style={{
        position: "absolute",
        right: 16,
        bottom: 16,
      }}
    >
      <Text style={{ color: "rgba(255,255,255,0.9)", textAlign: "right" }}>
        80-120
      </Text>
      <Text style={{ color: "rgba(255,255,255,0.9)", textAlign: "right" }}>
        Healthy
      </Text>
    </View>
  );

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      {renderTitle()}
      {renderIconContainer()}
      {renderContent()}
      {renderFooter()}
    </RNBounceable>
  );
};

export default ColorfulCard;
