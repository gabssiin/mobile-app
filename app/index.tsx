import { Image, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
          marginTop: 25,
        }}
      >
        <Text style={styles.title}>Olá Turma!</Text>
        <PizzaTranslator />
      </View>
    );
  }

  return (
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
      ></View>
      <View
        style={{
          width: 1600,
          height: 10,
          backgroundColor: "#38423B",
        }}
      ></View>
      <View
        style={{
          width: 1600,
          height: 10,
          backgroundColor: "#353831",
        }}
      ></View>
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
        {" "}
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
        {" "}
        Olá, sou um estudante de Sistemas Para Internet, e essa é a cadeira de
        Desenvolvimento Mobile. Estou no quarto período do curso!
      </Text>
      <Text >

      </Text>
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