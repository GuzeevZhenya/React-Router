import React from "react";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Error from "./Error";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/main">Main</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Switch>
          <Route path="/main" exact component={() => <Main />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contacts" exact component={() => <Contacts />} />
          {/* <Route path="/" component={() => <Error />}/> */}
          <Redirect to="/main" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
