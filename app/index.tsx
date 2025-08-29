import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";

// baixar e importar:
//import { PizzaTranslator } from "@/components/PizzaTranslator";
// import { ScrollViewApp } from "@/components/ScrollViewApp";
// import { FlatListExample } from "@/components/FlatListExample";
//import { SectionListExample } from "@/components/SectionListExample";
// aprender a usar os components basicos do reactnative
//expo image e router, safe area a-sync storage
export default function Index() {
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
          width: "100%",
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
      <Text></Text>
    </View>
  );
}

/*melhor usar flutter
escrever apenas view android usando kotlin ou java
ios swift ou objectve c
o código se adequa ao sistema que o usa

Core Components:
View, Text, Image, ScrollView, TextInput (principais)
Importar tudo

Crie um App em React Native + Expo (utilizando o onboard hello) que tenha um componente chamado Profile.

Este componente deve retornar uma foto sua, com o seu nome e uma mini bio (2 a 3 frases).

O arquivo index.tsx deve ter um título (App criado para a disciplina Programação para Dispositivos Móveis) e o seu Profile.

A entrega deve ser feita anexando 2 links:
seu repositório no github
seu app no Expo (over-the-air updates)
OBS: NÃO é para anexar um arquivo texto com as URLs, é para anexar diretamente as duas URLs.

2D2D2A
353831
38423B
3F5E5A
20fc8f
*/
