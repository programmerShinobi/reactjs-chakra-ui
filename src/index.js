/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Shinobi

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
/* import react redux untuk mengaktifkan redux yang telah dibuat */
import { Provider } from 'react-redux';
import store from './Redux/Store';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props => (
        token
          ? <Component {...props} />
          : <Redirect to='/auth/signin' />
      )}
    />
  );
}

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Provider store={store}>
        <Route path={`/auth`} component={AuthLayout} />
        <PrivateRoute path={`/admin`} component={AdminLayout} />
        <Route path={`/rtl`} component={RTLLayout} />
      </Provider>
      <Redirect from={`/`} to='/admin/dashboard' />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
