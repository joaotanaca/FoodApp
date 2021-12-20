import Button from "components/atom/Button";
import React from "react";
import { Container } from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <Button colors="primary">Primary</Button>
        </Container>
    );
};

export default Home;
