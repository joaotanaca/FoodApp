import Button from "components/atom/Button";
import Icon from "components/atom/Icon";
import Text from "components/atom/Text";
import React from "react";
import { Container } from "./styles";

const Home: React.FC = () => {
    return (
        <Container>
            <div className="row-span-1">
                <div className="bg-white w-min px-1 py-0.5 rounded-full flex items-center">
                    <Icon name="logo" size={55} />
                </div>
            </div>
            <div className="row-span-1 z-10">
                <Text size="6xl" weight="extrabold" color="white">
                    Food for Everyone
                </Text>
            </div>
            <div className="row-span-3 no-container">
                <img src="toys.png" alt="peoples" />
            </div>
            <div className="row-span-1 row-start-6">
                <Button className="w-full" colors="secondary" href="/sign">
                    <Text size="lg" weight="semibold" color="primary">
                        Get starteed
                    </Text>
                </Button>
            </div>
        </Container>
    );
};

export default Home;
