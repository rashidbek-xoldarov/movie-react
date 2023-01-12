import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../API/api";
import ActorList from "../ActorList/ActorList";
import { Container } from "../Header/Header.component";
import SimilarMovies from "../SimilarMovies/SimilarMovies";
import "./SinglePage.css";

const SinglePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  console.log(movie.imdb_id);

  const hour = Math.floor(movie.runtime / 60);
  const minut = movie.runtime % 60;
  const year = new Date(movie.release_date).getFullYear();

  const getMovie = async () => {
    const data = await api.getSingleMovie(id);
    if (data.status === 200) {
      setMovie(data.data);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.poster_path}')`,
        }}
      >
        <Container>
          {movie.length !== 0 && (
            <div className="hero-info">
              <h2 className="hero-title">{movie.title}</h2>
              <div className="time-wrapper">
                <span className="rating">
                  Rating {Number(movie.vote_average).toFixed(1)}
                </span>
                <span className="year">{year}</span>
                <span className="time">Duration: {`${hour}h ${minut}m`}</span>
              </div>
              <p className="hero-text">{movie.overview}</p>
              <div className="hero-button-wrapper">
                <a
                  className="watch-btn"
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                >
                  Watch
                </a>
              </div>
            </div>
          )}
        </Container>
      </div>
      <ActorList id={id} />
      <SimilarMovies id={id} />
    </>
  );
};

export default SinglePage;
