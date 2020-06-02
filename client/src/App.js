import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/alert';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import myProfile from './components/profile/myProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import HostelFloors from './components/hosteldesc/HostelFloors';
import ProfilePage from './components/profilepage/ProfilePage';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              {/*<PrivateRoute exact path='/myprofile' component={myProfile} />*/}
              <PrivateRoute
                exact
                path='/hostelfloors'
                component={HostelFloors}
              />
              <PrivateRoute exact path='/profilepage' component={ProfilePage} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
