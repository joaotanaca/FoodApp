import Sign from "components/pages/Sign";
import Template from "components/Template";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
    return (
        <Template title="Login">
            <Sign />
        </Template>
    );
};

export default HomePage;
