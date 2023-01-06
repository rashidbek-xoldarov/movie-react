import React from "react";
import { Link } from "react-router-dom";
import { MovieItem } from "./Movies.style";
import "./MoviesItem.css";

const MoviesItem = ({ img, title, text, id, date }) => {
  return (
    <MovieItem>
      <Link to={`/movies/${id}`} className="movies-item-link">
        <img
          style={{ width: "200px", height: "150px", borderRadius: "4px" }}
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt={title}
        />
        <div className="movies-item-info">
          <h3 className="movies-item-title">{title}</h3>
          <time className="movies-item-time">{date}</time>
          <p className="movies-item-text">{text}</p>
        </div>
      </Link>
    </MovieItem>
  );
};

export default MoviesItem;
