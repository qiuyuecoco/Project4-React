import React from "react";
import ReactDOM from "react-dom";
import { Container, Header } from "semantic-ui-react";
import "./misc/index.css"

import Navigation from "./components/Navigation";
import PaginationFooter from "./components/Pagination";
import CartIcon from "./components/CartIcon";


const App = ({ children }) => (
    <Container style={{ margin: 10 }}>
        <Header as="h4">E-Commerce Store
            <span>
                <CartIcon />
            </span>
        </Header>

        {children}
    </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
    <App>
        <Navigation />
        <PaginationFooter />
    </App>,
    document.getElementById("root")
);

export default App

// class App extends React.Component{
//     render() {
//         return (
//             <div>
//                 <Router>
//                     <div className='ui menu'>
//                         <Link className = "item" to="/company">
//                             Company
//                         </Link>
//                         <Link className = "item" to="/about">
//                             About Us
//                         </Link>
//                         <Link className = "item" to="/locations">
//                             Locations
//                         </Link>
//                         <Link className = "item" to="/products">
//                             Products
//                         </Link>
//
//                     </div>
//
//                     <Switch>
//                         <Route exact path="/" render={() => (
//                             <div>
//                                 <div>Welcome to our site</div>
//                             </div>
//                         )} />
//
//                         <Route path="/company" component={Company}/>
//                         <Route path="/company/page" render={() => <div>Page</div>} />
//                         <Route path="/about" component={About}/>
//                         <Route path="/custom" component={Custom}/>
//                         <Route path="/products" component={Product}/>
//
//
//                         <Route path="/locations/:id" component={Locations}
//                                render={() => (
//                                    <div>404 Not Found</div>
//                                )}  />
//                     </Switch>
//                 </Router>
//
//             </div>
//         );
//     }
// }
{/*<List>*/}
{/*<List.Item*/}
{/*as="a"*/}
{/*content="💌 Official documentation"*/}
{/*href="https://react.semantic-ui.com/"*/}
{/*target="_blank"*/}
{/*/>*/}
{/*<List.Item*/}
{/*as="a"*/}
{/*content="💡 StackOverflow"*/}
{/*href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"*/}
{/*target="_blank"*/}
{/*/>*/}
{/*</List>*/}
