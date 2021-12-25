import NavButton from "components/atom/NavButton";
import React from "react";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <NavButton name="home" color="blue" active />
      <NavButton name="like" color="blue" active />
      <NavButton name="profile" color="blue" active />
      <NavButton name="home" color="blue" active />
    </Container>
  );
};

export default Home;
