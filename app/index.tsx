import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#828d9bff",
        
      }}
    >
      
      <Image source={
      require('../assets/images/luto.jpg')}></Image>
      <Text> Gabriel Santos</Text>
      <Text style={{backgroundColor:"#FFF"}}>Minha bio é isso ai </Text>
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

*/

