import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./ColorfulCard.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;

interface IColorfulCardProps {
  title: string;
  value: string;
  valuePostfix?: string;
  footerTitle: string;
  footerValue: string;
  style?: CustomStyleProp;
  iconImageSource?: ImageSourcePropType;
  iconImageStyle?: CustomImageStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  footerTextStyle?: CustomTextStyleProp;
  contentValueTextStyle?: CustomTextStyleProp;
  contentPostfixTextStyle?: CustomTextStyleProp;
  ImageComponent?: any;
  onPress: () => void;
}

const ColorfulCard: React.FC<IColorfulCardProps> = ({
  style,
  title,
  value,
  valuePostfix,
  iconImageSource,
  iconImageStyle,
  footerTitle,
  footerValue,
  titleTextStyle,
  footerTextStyle,
  contentValueTextStyle,
  contentPostfixTextStyle,
  ImageComponent = Image,
  onPress,
}) => {
  const renderTitle = () => (
    <View>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
    </View>
  );

  const renderIconContainer = () => (
    <View style={styles.iconContainerStyle}>
      <ImageComponent
        source={iconImageSource}
        style={[styles.iconImageStyle, iconImageStyle]}
      />
    </View>
  );

  const renderContent = () => (
    <View style={styles.contentStyle}>
      <Text style={[styles.contentValueTextStyle, contentValueTextStyle]}>
        {`${value} `}
        <Text style={[styles.contentPostfixTextStyle, contentPostfixTextStyle]}>
          {valuePostfix}
        </Text>
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerContainerStyle}>
      <Text style={[styles.footerTextStyle, footerTextStyle]}>
        {footerTitle}
      </Text>
      <Text style={[styles.footerTextStyle, footerTextStyle]}>
        {footerValue}
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
