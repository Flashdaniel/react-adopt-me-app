/* eslint-disable import/named */
/** @format */
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/namespace
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

function App() {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id" component={Details} />
            <Route path="/" component={SearchParams} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
