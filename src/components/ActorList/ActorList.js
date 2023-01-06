import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../API/api";
import { Container } from "../Header/Header.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./ActorList.css";

const ActorList = ({ id }) => {
  const [actors, setActors] = useState([]);

  const getActors = async () => {
    const data = await api.getActors(id);
    if (data.status === 200) {
      setActors(data.data.cast);
    }
  };

  useEffect(() => {
    getActors();
  }, [id]);

  return (
    <Container>
      <h3 className="actors-title">Creators</h3>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={7}
      >
        {actors.length !== 0 &&
          actors.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <li className="actor-item">
                  <Link to={`/actor/${item.id}`} className="actor-item-link">
                    <img
                      className="actor-item-img"
                      src={
                        item.profile_path
                          ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                          : "https://via.placeholder.com/88"
                      }
                      alt={item.original_name}
                      width="88"
                      height="88"
                    />
                    <h4 className="actor-item-title">{item.original_name}</h4>
                  </Link>
                </li>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
};

export default ActorList;
