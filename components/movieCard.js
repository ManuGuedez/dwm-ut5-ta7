import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";

export default function MovieCard({ movie }) {
  return (
    <>
      <View style={styles.movieDetails}>
        <Image style={styles.poster} source={{ uri: movie.Poster }} />
        <Text style={styles.movieTitle}>{movie.Title}</Text>
        <Text style={styles.plot}>{movie.Plot}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  movieDetails: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "black",
    width: 350,
    height: "auto",
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  poster: {
    width: 150,
    height: 250,
    marginBottom: 20,
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  plot: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    color: "white",
  },
});
