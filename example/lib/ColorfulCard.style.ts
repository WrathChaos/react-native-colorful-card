import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width: ScreenWidth } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    borderRadius: 20,
    height: ScreenWidth * 0.45,
    width: ScreenWidth * 0.45,
    backgroundColor: "#FF6863",
  },
  titleTextStyle: {
    color: "rgba(255,255,255,0.7)",
    fontWeight: "500",
  },
});
