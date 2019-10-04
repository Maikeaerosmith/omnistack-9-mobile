import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  AsyncStorage,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";

import SpotList from "../Components/SpotList";

import logo from "../../assets/logo.png";

export default function List({ navigation }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storageTechs => {
      const techsArray = storageTechs.split(",").map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  function handleSignOut() {
    AsyncStorage.removeItem("techs");
    AsyncStorage.removeItem("user");

    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />

        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 45
  },
  button: {
    height: 32,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginTop: 45,
    marginRight: 10,
    paddingHorizontal: 20
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});
