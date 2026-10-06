const MovieCard = (props) => {
  const { movie } = props;
  return (
    <li className="movie-card">
        <div className="movie-card__poster-wrap">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} className="movie-card__poster"/>
        </div>
      <div className="movie-card__content">
        <h2 className="movie-card__title">{movie.title}</h2>
        <p className="movie-card__realese-date">{movie.release_date}</p>
        <p className="movie-card__description">
          {movie.overview || "Краткое описание фильма появится здесь..."}
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
