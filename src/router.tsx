import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import App from "./App";

export const AppRouter: React.FunctionComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route path="/FirstComponent" component={FirstComponent} />
        <Route path="/SecondComponent" component={SecondComponent} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
