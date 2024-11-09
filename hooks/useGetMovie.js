import { useState } from "react";

export default function useGetMovie() {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const apiKey = "a060bc5a";

  const getMovie = async (movieName) => {
    if (!movieName) {
      Alert.alert("Error", "Por favor ingresa el nombre de una película");
      return;
    }

    setLoading(true);
    setMovie(null);
    setError("");

    console.log("name", movieName);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setLoading(false);
      if (data.Response === "True") { 
        setMovie(data);
        setError(null);
      } else {
        setMovie(null);
        setError("Película no encontrada");
      }
    } catch (error) {
      setMovie(null);
      setError("Hubo un error al realizar la solicitud");
      return;
    }
  };

  return { getMovie, movie, loading, error };
}
