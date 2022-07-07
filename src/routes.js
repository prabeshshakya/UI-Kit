import React from "react";
import { Route, Switch } from "react-router-dom";
import AccordionDefault from "./components/kit/accordion/AccordionDefault";
import Button from "./components/kit/button/Button";
import FormElements from "./components/kit/form-elements/FormElements";
import Gettingstarted from "./components/kit/introduction/Gettingstarted";
import Introduction from "./components/kit/introduction/Introduction";
import Breakpoints from "./components/kit/layout/breakpoint/Breakpoint";
import Grid from "./components/kit/layout/grid/Grid";
//import PageNotFound from "./components/kit/PageNotFound/PageNotFound";
import Color from "./components/kit/utilities/color/Color";
import Spacing from "./components/kit/utilities/spacing/Spacing";
import Fonts from "./components/kit/utilities/font/Fonts";
import Display from "./components/kit/utilities/display/Display";
import Flex from "./components/kit/utilities/flex/Flex";
import Bem from "./components/kit/mixins/helpers/Bem";

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
			<Route path="/display" component={Display} />
			<Route path="/spacing" component={Spacing} />
			<Route path="/fonts" component={Fonts} />
			<Route path="/breakpoints" component={Breakpoints} />
			<Route path="/grid" component={Grid} />
			<Route path="/flex" component={Flex} />
			<Route path="/bem" component={Bem} />
		</Switch>
	);
}

export default AppRouter;
