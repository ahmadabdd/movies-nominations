import { Link } from "react-router-dom";
import { Movie } from "../../components/Movie/Movie";
import { NominatedMovie } from "../../components/NominatedMovie/NominatedMovie";
import "./Main.css";
import { useLogic } from "./Main.logic";

export const Main = () => {
  const { handleTitleChange, data, isLoading, handleSelectMovie, nominated, setNominated } =
    useLogic();

  return (
    <div className="main">
      <div className="left">
        <h3>The shoppies</h3>
        <h2>Nominate — amazing cinema</h2>
        <h3>Search below to nominate your top 5 favorite movies & series.</h3>
        <label htmlFor="title">
          <input
            placeholder="Search movies titles"
            type="text"
            id="title"
            onChange={handleTitleChange}
          />
        </label>

        {Number(nominated?.length) > 4 ? (
          <div className="winner">
            <h1>Reveal winner</h1>
            <Link to={`/winner`}>Reveal</Link>
          </div>
        ) : (
          <div className="movies-list">
            {data?.length ? (
              data?.map((movie) => (
                <Movie
                  key={movie.imdbID}
                  Title={movie.Title}
                  Type={movie.Type}
                  Year={movie.Year}
                  disabled={
                    nominated?.some((item) => item.imdbID === movie.imdbID) ||
                    false
                  }
                  onClick={() => handleSelectMovie(movie)}
                />
              ))
            ) : (
              <>No data</>
            )}
          </div>
        )}
      </div>
      <div className="right">
        <h2>{`Nominated ${nominated?.length || 0}/5`}</h2>
        { nominated?.map((item) => (
            <NominatedMovie 
                id={item.imdbID || '1'}
                index={nominated.indexOf(item) + 1}
                onRemove={() => setNominated((prev) => [...prev?.filter((movie) => movie.imdbID !== item.imdbID) || []])} 
            />
        ))}
      </div>
    </div>
  );
};
