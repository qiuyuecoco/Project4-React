import React from 'react'
import { Container, Header } from "semantic-ui-react";
import {NavLink, Route} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

import CartIcon from "./CartIcon";


// import ProductList from "../api/ProductList";
// function App() {
//     return(
//         <div>
//             <Route exact path = "/" component={HomePage}/>
//             <Route path = "/about" component={AboutPage}/>
//
//         </div>
//     )
// }

const App = ({ children }) => (
    <Container style={{ margin: 10 }}>
        <Header as="h4">E-Commerce Store

                <CartIcon />

        </Header>


        {children}
    </Container>
);

export default App