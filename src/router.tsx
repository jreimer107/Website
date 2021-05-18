import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import Recordings from "./components/Recordings";
import SecondComponent from "./components/SecondComponent";
import App from "./App";
import StatblockGenerator from "./components/StatblockGenerator";

export const AppRouter: React.FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/Recordings" component={Recordings} />
        <Route path="/SecondComponent" component={SecondComponent} />
        <Route path="/StatblockGenerator" component={StatblockGenerator} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
