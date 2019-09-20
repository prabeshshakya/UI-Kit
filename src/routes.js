import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/dashboard';
import Kit from './components/kit';


/**
 * App Router.
 */
function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/kit" component={Kit} />
      </div>
    </Router>
  );
}

export default AppRouter;
