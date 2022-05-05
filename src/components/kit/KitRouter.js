import React from "react";
import { Route, Switch } from "react-router-dom";
import AccordionDefault from "../kit/accordion/AccordionDefault";
import Button from "../kit/button/Button";
import FormElements from "../kit/form-elements/FormElements";
import Introduction from "../kit/introduction/Introduction";
import Gettingstarted from "../kit/introduction/Gettingstarted";
import Color from "../kit/utilities/color/Color";
import Fonts from "../kit/utilities/font/Fonts";
import Breakpoints from "../kit/layout/breakpoint/Breakpoint";
import Grid from "../kit/layout/grid/Grid";

const KitRouter = () => (
	<Switch>
		<Route path="/docs/button" component={Button} />
		<Route path="/docs/forms" component={FormElements} />
		<Route path="/docs/introduction" component={Introduction} />
		<Route path="/docs/getting-started" component={Gettingstarted} />
		<Route path="/docs/accordion" component={AccordionDefault} />
		<Route path="/docs/colors" component={Color} />
		<Route path="/docs/fonts" component={Fonts} />
		<Route path="/docs/breakpoints" component={Breakpoints} />
		<Route path="/docs/grid" component={Grid} />
	</Switch>
);

export default KitRouter;
