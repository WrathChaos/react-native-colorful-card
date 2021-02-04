import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import ColorfulCard from "./lib/ColorfulCard";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <ColorfulCard
            title="Heart Rate"
            value="126"
            valuePostfix="bpm"
            footerTitle="80-120"
            footerValue="Healthy"
            onPress={() => {}}
          />
          <ColorfulCard
            title="Sleep"
            value="8"
            valuePostfix="h 42 m"
            footerTitle="Deep Sleep"
            footerValue="3h 13m"
            style={{ backgroundColor: "#7954ff" }}
            onPress={() => {}}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <ColorfulCard
            style={{ backgroundColor: "#fe8f62" }}
            onPress={() => {}}
          />
          <ColorfulCard
            style={{ backgroundColor: "#2bc3ff" }}
            onPress={() => {}}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <ColorfulCard
            style={{ backgroundColor: "#5a65ff" }}
            onPress={() => {}}
          />
          <ColorfulCard
            style={{ backgroundColor: "#96da45" }}
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
