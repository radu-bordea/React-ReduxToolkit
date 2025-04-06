import { removeMovie } from "../movieSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();

  const handleDeleteMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.name} <button onClick={() => handleDeleteMovie(movie.id)}>Delete Movie</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
