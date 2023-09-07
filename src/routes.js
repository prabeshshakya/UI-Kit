import React from "react";
import { Route, Switch } from "react-router-dom";
import AccordionDefault from "./pages/accordion/AccordionDefault";
import Button from "./pages/button/Button";
import FormElements from "./pages/form-elements/FormElements";
import Typography from "./pages/introduction/typography/Typography";
import Introduction from "./pages/introduction/intro/Introduction";
import Breakpoints from "./pages/layout/breakpoint/Breakpoint";
import Grid from "./pages/layout/grid/Grid";
import Color from "./pages/utilities/color/Color";
import Spacing from "./pages/utilities/spacing/Spacing";
import Fonts from "./pages/utilities/font/Fonts";
import Display from "./pages/utilities/display/Display";
import Flex from "./pages/utilities/flex/Flex";
import Bem from "./pages/usages/bem/Bem";
import UsageResponsive from "./pages/usages/Responsive";
import UsageHelper from "./pages/usages/Helper";

/**
 * App Router.
 */
function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Introduction} />
      <Route path="/button" component={Button} />
      <Route path="/forms" component={FormElements} />
      <Route path="/typography" component={Typography} />
      <Route path="/accordion" component={AccordionDefault} />
      <Route path="/colors" component={Color} />
      <Route path="/display" component={Display} />
      <Route path="/spacing" component={Spacing} />
      <Route path="/fonts" component={Fonts} />
      <Route path="/breakpoints" component={Breakpoints} />
      <Route path="/grid" component={Grid} />
      <Route path="/flex" component={Flex} />
      <Route path="/bem" component={Bem} />

      <Route path="/usages/responsive" component={UsageResponsive} />
      <Route path="/usages/helper" component={UsageHelper} />
    </Switch>
  );
}

export default AppRouter;
