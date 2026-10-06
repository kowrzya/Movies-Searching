import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import "./App.css";

const API_KEY = import.meta.env.VITE_TMDB_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = query
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    async function loadMovies() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          console.error(`Сервер вернул статус: ${response.status}`);
          throw new Error(`Ошибка сервера: ${response.status}`);
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, [query]);

  const MoviesPage = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error !== null) {
      return <p style={{color:'red'}}>There was an error. {error.message}</p>;
    }
    if (movies.length === 0) {
      return <p>No results found for your query.</p>;
    }
    return <MovieList movies={movies} />;
  };

  const popularMovies = () => {
    if (!query){
      return <h3 className="popular-movies__title">The most popular movies at the moment </h3>
    }
  }

  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1>Movies Searching</h1>
        </div>
      </header>

      <nav className="nav">
        <SearchBar query={query} setQuery={setQuery} />
      </nav>
      <div className="popular-movies">
      {popularMovies()}
      </div>
      <div className="movie-list">{MoviesPage()}</div>
    </>
  );
}

export default App;
