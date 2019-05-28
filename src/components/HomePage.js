import React from "react";
// import { Link } from "react-router-dom";
import Products from "./Products";
import {Segment} from "semantic-ui-react";

const HomePage = (props) => {
    console.log(props);
    return (
        <Segment>
            <Products />
        </Segment>
    );
};

export default HomePage;