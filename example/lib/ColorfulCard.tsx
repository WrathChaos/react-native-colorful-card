import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./ColorfulCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IColorfulCardProps {
  style?: CustomStyleProp;
  iconImageSource?: ImageSourcePropType;
  onPress: () => void;
}

const ColorfulCard: React.FC<IColorfulCardProps> = ({
  style,
  iconImageSource = require("./pulse.png"),
  onPress,
}) => {
  const renderTitle = () => (
    <View style={{}}>
      <Text style={styles.titleTextStyle}>Heart Rate</Text>
    </View>
  );

  const renderIconContainer = () => (
    <View style={styles.iconContainerStyle}>
      <Image source={iconImageSource} style={styles.iconImageStyle} />
    </View>
  );

  const renderContent = () => (
    <View style={styles.contentStyle}>
      <Text style={styles.contentValueTextStyle}>124</Text>
      <Text style={styles.contentPostfixTextStyle}>bpm</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerContainerStyle}>
      <Text style={styles.footerTextStyle}>80-120</Text>
      <Text style={styles.footerTextStyle}>Healthy</Text>
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
