import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../API/api";
import ActorMovie from "../ActorMovie/ActorMovie";
import { Container } from "../Header/Header.component";

import "./Actor.css";

const Actor = () => {
  const [actorInfo, setActorInfo] = useState("");
  const { id } = useParams();

  const getActorInfo = async () => {
    const data = await api.getActorInfo(id);
    if (data.status === 200) {
      setActorInfo(data.data);
    }
  };

  useEffect(() => {
    getActorInfo();
  }, [id]);

  return (
    <>
      <div
        className="actor"
        style={{
          backgroundImage: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ), url('https://image.tmdb.org/t/p/original/${actorInfo.profile_path}')`,
        }}
      >
        {actorInfo.length !== 0 && (
          <Container>
            <div className="actor-info">
              <img
                className="actor-img"
                src={
                  "https://image.tmdb.org/t/p/original/" +
                  actorInfo.profile_path
                }
                alt={actorInfo.name}
                width="210"
                height="250"
              />
              <h3 className="actor-title">{actorInfo.name}</h3>
              <p className="actor-text">{actorInfo.biography}</p>
            </div>
          </Container>
        )}
      </div>
      <ActorMovie id={id} />
    </>
  );
};

export default Actor;
