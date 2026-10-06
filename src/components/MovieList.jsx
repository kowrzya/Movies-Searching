import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { movies} = props;
  return (
    <ul className="movie-list__list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
};

export default MovieList;
