import React from "react";
import ReactDOM from "react-dom";
// import Style from "./misc/stylesheet"
import "./misc/index.css"

import App from "./components/App"
import Navigation from "./components/Navigation";
import FooterButton from "./components/FooterButtons"


ReactDOM.render(
    <App>
        <Navigation />
        <FooterButton />
    </App>,
    document.getElementById("root")
);

export default App

// // TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

// {/*<List>*/}
// {/*<List.Item*/}
// {/*as="a"*/}
// {/*content="💌 Official documentation"*/}
// {/*href="https://react.semantic-ui.com/"*/}
// {/*target="_blank"*/}
// {/*/>*/}
// {/*<List.Item*/}
// {/*as="a"*/}
// {/*content="💡 StackOverflow"*/}
// {/*href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"*/}
// {/*target="_blank"*/}
// {/*/>*/}
// {/*</List>*/}
