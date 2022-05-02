import React from "react";
import { Route, Switch } from "react-router-dom";
import Button from "../kit/button/Button";
import FormElements from "../kit/form-elements/FormElements";
import Introduction from "../kit/introduction/Introduction";
import Gettingstarted from "../kit/introduction/Gettingstarted";

const KitRouter = () => (
  <Switch>
    <Route path="/docs/button" component={Button} />
    <Route path="/docs/forms" component={FormElements} />
    <Route path="/docs/introduction" component={Introduction} />
    <Route path="/docs/getting-started" component={Gettingstarted} />
  </Switch>
);

export default KitRouter;
