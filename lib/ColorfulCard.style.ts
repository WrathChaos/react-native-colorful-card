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
  iconContainerStyle: ViewStyle;
  iconImageStyle: ImageStyle;
  contentStyle: ViewStyle;
  valueTextStyle: TextStyle;
  valuePostfixTextStyle: TextStyle;
  footerContainerStyle: ViewStyle;
  footerTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    padding: 24,
    borderRadius: 20,
    height: ScreenWidth * 0.48,
    width: ScreenWidth * 0.45,
    backgroundColor: "#FF6863",
  },
  titleTextStyle: {
    fontSize: 15,
    fontWeight: "500",
    color: "rgba(255,255,255,0.7)",
  },
  iconContainerStyle: {
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
  },
  iconImageStyle: {
    width: 25,
    height: 25,
  },
  contentStyle: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  valueTextStyle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "600",
  },
  valuePostfixTextStyle: {
    fontSize: 18,
    marginLeft: 8,
    color: "#fff",
    fontWeight: "600",
  },
  footerContainerStyle: {
    right: 16,
    bottom: 16,
    position: "absolute",
  },
  footerTextStyle: {
    textAlign: "right",
    color: "rgba(255,255,255,0.9)",
  },
});
