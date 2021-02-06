import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
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
            iconImageSource={require("./assets/pulse.png")}
            onPress={() => {}}
          />
          <ColorfulCard
            title="Sleep"
            value="8"
            valuePostfix="h 42 m"
            footerTitle="Deep Sleep"
            footerValue="3h 13m"
            iconImageSource={require("./assets/sleep.png")}
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
            title="Energy Burn"
            value="583"
            valuePostfix="kcal"
            footerTitle="Daily Goal"
            footerValue="900 kcal"
            iconImageStyle={{ tintColor: "#fff" }}
            iconImageSource={require("./assets/hot-or-burn-interface-symbol.png")}
            style={{ backgroundColor: "#fe8f62" }}
            onPress={() => {}}
          />
          <ColorfulCard
            title="Steps"
            value="16,741"
            valuePostfix=""
            footerTitle="Daily Goal"
            footerValue="10,000 steps"
            iconImageSource={require("./assets/steps.png")}
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
            title="Running"
            value="5,3"
            valuePostfix="km"
            footerTitle="Daily Goal"
            footerValue="10 km"
            iconImageSource={require("./assets/running.png")}
            style={{ backgroundColor: "#5a65ff" }}
            onPress={() => {}}
          />
          <ColorfulCard
            title="Cycling"
            value="12,5"
            valuePostfix="km"
            footerTitle="Daily Goal"
            footerValue="20 km"
            iconImageSource={require("./assets/bicycle.png")}
            style={{ backgroundColor: "#96da45" }}
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
