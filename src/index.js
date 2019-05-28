import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import configureStore from "./redux/store";
import {Provider as ReduxProvider} from "react-redux";


import { BrowserRouter  as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

// import Style from "./misc/stylesheet"
// import "./misc/index.css"

import App from "./components/App";


// import Navigation from "./components/Navigation";
import FooterButton from "./components/FooterButtons";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
// import {Container} from "semantic-ui-react";
import PageNotFound from "./components/PageNotFound";
import CategoriesPage from "./components/CategoriesPage";
import Header from "./components/Header";

const store = configureStore(); // add store initial state if needed

render(
   <ReduxProvider store = {store}>
{/*<Provider store={this.props.store}>*/}
    <App>
        <Router>
            {/*<Navigation />*/}
            <Header />
            <Switch>
                <Route exact path = "/" component={HomePage}/>
                <Route path = "/about" component={AboutPage}/>
                <Route path = "/category" component={CategoriesPage}/>
                <Route component = {PageNotFound} />
            </Switch>
            <FooterButton />
        </Router>
    </App>
{/*</Provider>*/}
     </ReduxProvider>
    ,
    document.getElementById("root")
);

export default App

// // Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

