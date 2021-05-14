import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HOME/HomePage';
import RegistrationForm from '../AUTH/RegistrationForm';
import AdminPage from '../AUTH/AdminPage';

function Routes() {
  return (
    <div className="pt-5">
      <Switch>
        <Route exact path='/register'>
          <RegistrationForm />
        </Route>
        <Route exact path='/admin'>
          <AdminPage />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  )
};

export default Routes;