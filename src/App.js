import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/loading.css';
import 'antd/dist/antd.css';
import './App.css';

const Login = lazy(() => import('./Login/login'));
const Layout = lazy(() => import('./containers/Layout'));

const styles = {
  display: "flex", 
  flex: 1, 
  width: "100vw", 
  height: "100vh", 
  justifyContent: "center", 
  alignItems: "center"
}

function App() {
  const token = localStorage.getItem("token");
  const state = {
    isLogin: false,
    token: token ? token : ""
  }

  if (state.token) {
    state.isLogin = true
  }

  const loading = (
    <div style={styles}>
        <div className="lds-ripple"><div></div><div></div></div>
    </div>
  )

  return (
    <BrowserRouter basename="/">
        <React.Suspense fallback={loading}>
          <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route path="/" name="Home" render={props => <Layout {...props} />} />
          </Switch>
        </React.Suspense> 
    </BrowserRouter>
  )
}

export default App;
