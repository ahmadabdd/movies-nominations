import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "./Main.types";
import { useQuery } from "react-query";

export const useLogic = () => {
  const [search, setSearch] = useState("");
  const [nominated, setNominated] = useState<Movie[]>();

  const { data, isLoading } = useQuery<Movie[]>(["movies", [search]], () =>
    axios
      .get(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=3d85689c`)
      .then((res) => {
        console.log(res.data.Search);
        return res.data.Search;
      })
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectMovie = (movie: Movie) => {
    setNominated((prev) => [...(prev || []), movie]);
  };

  return {
    handleTitleChange,
    isLoading,
    data,
    setNominated,
    nominated,
    handleSelectMovie,
  };
};
