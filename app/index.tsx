import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, StyleSheet, Switch, Text, View } from "react-native";

// baixar e importar:
import { PizzaTranslator } from "@/components/PizzaTranslator";
import { SectionListExample } from "@/components/SectionListExample";
import { ScrollViewApp } from "@/components/ScrollViewApp";
// import { FlatListExample } from "@/components/FlatListExample";
//import { SectionListExample } from "@/components/SectionListExample";
// aprender a usar os components basicos do reactnative
//expo image e router, safe area a-sync storage
// zustand pesquisar sobre async storage
export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  let MyComponent;
  if (isEnabled) {
    MyComponent = <SectionListExample />;
  } else {
    MyComponent = (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 1,
        }}
      >
        <Text style={styles.title}>Olá Turma!</Text>
        <PizzaTranslator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {MyComponent}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#2D2D2A",
        }}
      >
        <LinearGradient
          colors={["#353831", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        <View
          style={{
            width: 1600,
            height: 10,
            backgroundColor: "#3F5E5A",
          }}
        />
        <View
          style={{
            width: 1600,
            height: 10,
            backgroundColor: "#38423B",
          }}
        />
        <View
          style={{
            width: 1600,
            height: 10,
            backgroundColor: "#353831",
          }}
        />
        <Image
          style={{
            width: 200,
            height: 200,
            margin: 20,
            resizeMode: "contain",
            borderWidth: 1,
            borderColor: "#fff",
            borderRadius: 75,
          }}
          source={require("../assets/images/foto.jpg")}
        />
        <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>
          Gabriel Santos
        </Text>
        <Text
          style={{
            color: "#fff",
            fontWeight: "200",
            fontSize: 16,
            textAlign: "center",
            margin: 20,
          }}
        >
          Olá, sou um estudante de Sistemas Para Internet, e essa é a cadeira de
          Desenvolvimento Mobile. Estou no quarto período do curso!
        </Text>
        <ScrollViewApp/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "blue",
  },
});