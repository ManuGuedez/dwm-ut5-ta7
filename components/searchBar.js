import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default function SearchBar({ search }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    search(input);
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputArea}
          onChangeText={(text) => setInput(text)}
          placeholder="Ingresa una tarea..."
          keyboardType="text"
          value={input}
        />
        <TouchableHighlight onPress={handleSearch} underlayColor="pink">
          <View style={styles.button}>
            <Text>🔍</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 270,
  },
  button: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  inputArea: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "lightgray",
    width: 230,
    height: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
  },
});
