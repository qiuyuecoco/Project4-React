import React from 'react'
import { Container, Header } from "semantic-ui-react";
import CartIcon from "./CartIcon";


// import ProductList from "../api/ProductList";


const App = ({ children }) => (
    <Container style={{ margin: 10 }}>
        <Header as="h4">E-Commerce Store
                <CartIcon />
        </Header>

        {children}
    </Container>
);

export default App