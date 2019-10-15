import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Kit from './components/kit';
import Landing from './components/landing';


/**
 * App Router.
 */
function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/docs" component={Kit} />
    </Router>
  );
}

export default AppRouter;
