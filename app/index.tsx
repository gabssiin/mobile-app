import { Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#aaaaaaff",
      }}
    >
      <Image
        style={{
          width: 200,
          height: 200,
          margin: 50,
          resizeMode: "contain",
        }}
        source={require("../assets/images/foto.jpg")}
      ></Image>
      <Text style={{ color: "fff" }}> Gabriel Santos.</Text>
      <Text /*style={{backgroundColor:"#FFF"}}*/>Minha bio é isso ai </Text>
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

*/
