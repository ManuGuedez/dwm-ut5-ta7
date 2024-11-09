import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import SearchBar from "./components/searchBar.js";
import useGetMovie from "./hooks/useGetMovie.js";
import MovieCard from "./components/movieCard.js";
import ErrorCard from "./components/errorCard.js";

export default function App() {
  const { getMovie, movie, loading, error } = useGetMovie();
  const [showPoster, setShowPoster] = useState(false);
  const [showError, setShowError] = useState(false);
  const [searched, setSearched] = useState(false);

  const searchMovie = async (movieName) => {
    setShowPoster(false);
    setShowError(false);
    await getMovie(movieName);
    setSearched(true);
  };

  useEffect(() => {
    if (searched) {
      if (movie) {
        setShowPoster(true);
        setShowError(false);
      } else if (error) {
        setShowError(true);
        setShowPoster(false);
      }
    }
  }, [movie, error, searched]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Movies!</Text>
      <SearchBar search={searchMovie} />
      {loading && <ActivityIndicator size="small" color="black" /> /* loader */}
      {showPoster && <MovieCard movie={movie} />}
      {showError && <ErrorCard details={error} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    backgroundColor: "beige",
    paddingTop: 65,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
