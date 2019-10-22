import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Button from '../kit/button/Button';
import FormElements from '../kit/form-elements/FormElements';
import Alert from '../kit/alert/Alert';

import { PATHS } from '../../routePaths';

const KitRouter = () => (
  <Switch>
    <Route path={PATHS.BUTTON_PATH} component={Button} />
    <Route path={PATHS.FORM_PATH} component={FormElements} />
    <Route path={PATHS.ALERT_PATH} component={Alert} />
  </Switch>
);


export default KitRouter;