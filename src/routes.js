import React from "react";
import { Route, Switch } from "react-router-dom";
import AccordionDefault from "./components/kit/accordion/AccordionDefault";
import Button from "./components/kit/button/Button";
import FormElements from "./components/kit/form-elements/FormElements";
import Gettingstarted from "./components/kit/introduction/Gettingstarted";
import Introduction from "./components/kit/introduction/Introduction";
import PageNotFound from "./components/kit/PageNotFound/PageNotFound";
import Color from "./components/kit/utilities/color/Color";
import Fonts from "./components/kit/utilities/font/Fonts";
import Spacing from "./components/kit/utilities/spacing/Spacing";

/**
 * App Router.
 */
function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Introduction} />
      <Route path="/button" component={Button} />
      <Route path="/forms" component={FormElements} />
      <Route path="/getting-started" component={Gettingstarted} />
      <Route path="/accordion" component={AccordionDefault} />
      <Route path="/colors" component={Color} />
      <Route path="/fonts" component={Fonts} />
      <Route path="/spacing" component={Spacing} />
    </Switch>
  );
}

export default AppRouter;
