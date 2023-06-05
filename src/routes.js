import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AccordionDefault from './pages/accordion/AccordionDefault';
import Button from './pages/button/Button';
import FormElements from './pages/form-elements/FormElements';
import Gettingstarted from './pages/introduction/Gettingstarted';
import Toolingsetup from './pages/introduction/Toolingsetup';
import Typography from './pages/introduction/Typography';
import Introduction from './pages/introduction/Introduction';
import Breakpoints from './pages/layout/breakpoint/Breakpoint';
import Grid from './pages/layout/grid/Grid';
//import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Color from './pages/utilities/color/Color';
import Spacing from './pages/utilities/spacing/Spacing';
import Fonts from './pages/utilities/font/Fonts';
import Display from './pages/utilities/display/Display';
import Flex from './pages/utilities/flex/Flex';
import Bem from './pages/mixins/helpers/Bem';
import UsageFonts from './pages/mixins/helpers/Fonts';
import UsageColor from './pages/mixins/helpers/Color';
import UsageResponsive from './pages/mixins/helpers/Responsive';
import UsageHelper from './pages/mixins/helpers/Helper';

/**
 * App Router.
 */
function AppRouter() {
	return (
		<Switch>
			<Route
				path='/'
				exact
				component={Introduction}
			/>
			<Route
				path='/button'
				component={Button}
			/>
			<Route
				path='/forms'
				component={FormElements}
			/>
			<Route
				path='/getting-started'
				component={Gettingstarted}
			/>
			<Route
				path='/typography'
				component={Typography}
			/>
			<Route
				path='/toolingsetup'
				component={Toolingsetup}
			/>
			<Route
				path='/accordion'
				component={AccordionDefault}
			/>
			<Route
				path='/colors'
				component={Color}
			/>
			<Route
				path='/display'
				component={Display}
			/>
			<Route
				path='/spacing'
				component={Spacing}
			/>
			<Route
				path='/fonts'
				component={Fonts}
			/>
			<Route
				path='/breakpoints'
				component={Breakpoints}
			/>
			<Route
				path='/grid'
				component={Grid}
			/>
			<Route
				path='/flex'
				component={Flex}
			/>
			<Route
				path='/bem'
				component={Bem}
			/>
			<Route
				path='/usages/fonts'
				component={UsageFonts}
			/>
			<Route
				path='/usages/color'
				component={UsageColor}
			/>
			<Route
				path='/usages/responsive'
				component={UsageResponsive}
			/>
			<Route
				path='/usages/helper'
				component={UsageHelper}
			/>
		</Switch>
	);
}

export default AppRouter;
