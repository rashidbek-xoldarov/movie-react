import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../API/api";
import { Container } from "../Header/Header.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./SimilarMovies.css";

const SimilarMovies = ({ id }) => {
  const [page, setPage] = useState(1);
  const [similarMovies, setSimilarMovies] = useState([]);

  const getActors = async () => {
    const data = await api.getSimilarMovies(id, page);

    if (data.status === 200) {
      setSimilarMovies(data.data);
    }
  };

  useEffect(() => {
    getActors();
  }, [id, page]);

  return (
    <Container>
      <h3 className="actors-title">Similar Movies</h3>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={7}
      >
        {similarMovies?.results?.length !== 0 &&
          similarMovies?.results?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <li className="actor-item">
                  <Link to={`/movies/${item.id}`} className="actor-item-link">
                    <img
                      className="similar-movie-item-img"
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                          : "https://via.placeholder.com/120"
                      }
                      alt={item.title}
                      width="120"
                      height="120"
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

export default SimilarMovies;
