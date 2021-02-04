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
  title: string;
  value: string;
  valuePostfix?: string;
  footerTitle: string;
  footerValue: string;
  style?: CustomStyleProp;
  iconImageSource?: ImageSourcePropType;
  onPress: () => void;
}

const ColorfulCard: React.FC<IColorfulCardProps> = ({
  style,
  title,
  value,
  valuePostfix,
  iconImageSource = require("./pulse.png"),
  footerTitle,
  footerValue,
  onPress,
}) => {
  const renderTitle = () => (
    <View style={{}}>
      <Text style={styles.titleTextStyle}>{title}</Text>
    </View>
  );

  const renderIconContainer = () => (
    <View style={styles.iconContainerStyle}>
      <Image source={iconImageSource} style={styles.iconImageStyle} />
    </View>
  );

  const renderContent = () => (
    <View style={styles.contentStyle}>
      <Text style={styles.contentValueTextStyle}>
        {`${value} `}
        <Text style={styles.contentPostfixTextStyle}>{valuePostfix}</Text>
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerContainerStyle}>
      <Text style={styles.footerTextStyle}>{footerTitle}</Text>
      <Text style={styles.footerTextStyle}>{footerValue}</Text>
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
