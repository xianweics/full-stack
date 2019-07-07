import { applyMiddleware, compose, createStore } from 'redux';
import history from '../history';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import reducers from './reducers';

const configureStore = () => {
  return createStore(
    reducers(history),
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        routerMiddleware(history)
      )
    )
  );
};

export default configureStore();
