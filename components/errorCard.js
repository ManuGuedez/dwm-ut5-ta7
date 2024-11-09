import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export default function ErrorCard({ details }) {
  return (
    <>
      <View style={styles.content}>
        <Text style={styles.errorDetails}>{details}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "lightpink",
    width: "auto",
    height: "auto",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
  },
  errorDetails: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    color: "red",
  },
});
