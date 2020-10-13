import React, { Component } from 'react';
import './App.css';
import Home from './container/Home';
import NewsDetail from './container/NewsDetails';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from '../src/redux/reducers';
import thunk from "redux-thunk";

let middleware = [thunk];
const getMiddleware = () => {
  return applyMiddleware(...middleware);
};
const store = createStore(reducers, compose(compose(getMiddleware())));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/detail" component={NewsDetail} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
