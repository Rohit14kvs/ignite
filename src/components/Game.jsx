import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, released, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  height: 50vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.3rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
`;

export default Game;
