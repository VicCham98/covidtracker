import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Fragment>
      <Header/>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </Layout>
    </Fragment>
  );
}

export default App;
