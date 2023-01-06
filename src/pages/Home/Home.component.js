import React, { useEffect, useState } from "react";
import { api } from "../../API/api";
import { Container } from "../../components/Header/Header.component";
import MoviesItem from "../../components/MoviesItem/MoviesItem.component";
import Pagination from "../../components/Pagination/Pagination";
import { MoviesList, Title } from "./Home.style";

const Home = ({ type }) => {
  const [activePage, setActivePage] = useState(1);
  const [moviesList, setMoviesList] = useState({
    isLoading: true,
    data: [],
    isError: false,
  });

  console.log(moviesList);

  const getMovies = async () => {
    try {
      const data = await (type === "popular"
        ? api.getPolularMovies(activePage)
        : type === "top"
        ? api.getTopMovies(activePage)
        : api.getUpcomingMovies(activePage));
      console.log(data);
      if (data.status === 200) {
        setMoviesList({
          isLoading: false,
          data: data.data.results,
          isError: false,
          page: data.data.total_pages,
        });
      }
    } catch (error) {
      setMoviesList({
        isLoading: false,
        data: [],
        isError: true,
      });
    }
  };

  useEffect(() => {
    getMovies();
  }, [type, activePage]);

  return (
    <Container>
      <Title>{type.replace(type[0], type[0].toUpperCase())} movies</Title>
      {moviesList.isLoading && <p>Loading...</p>}
      {moviesList.isError && <p>Something went wrong...</p>}
      {moviesList.data.length !== 0 && (
        <MoviesList>
          {moviesList.data.map((item) => (
            <MoviesItem
              key={item.id}
              id={item.id}
              date={item.release_date}
              img={item.backdrop_path}
              text={item.overview}
              title={item.title}
            />
          ))}
        </MoviesList>
      )}
      <Pagination page={moviesList.page} setActivePage={setActivePage} />
    </Container>
  );
};

export default Home;
