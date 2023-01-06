import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../API/api";
import { Container } from "../Header/Header.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./ActorMovie.css";

const ActorMovie = ({ id }) => {
  const [page, setPage] = useState(1);
  const [similarMovies, setSimilarMovies] = useState([]);

  const getActors = async () => {
    const data = await api.getActorMovie(id);
    console.log(data);
    if (data.status === 200) {
      setSimilarMovies(data.data.cast);
    }
  };

  useEffect(() => {
    getActors();
  }, [id, page]);

  return (
    <Container>
      <h3 className="actors-title">Actor Movies</h3>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={7}
      >
        {similarMovies.length !== 0 &&
          similarMovies.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <li className="actor-item">
                  <Link to={`/movies/${item.id}`} className="actor-item-link">
                    <img
                      className="similar-movie-item-img"
                      src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                      alt={item.title}
                    />
                    <h4 className="actor-item-title">{item.title}</h4>
                  </Link>
                </li>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default ActorMovie;
