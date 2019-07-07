import { render } from 'react-dom';
import React, { Component, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from '@redux/index';
import history from './history';
import { ConnectedRouter } from 'connected-react-router';
import Main from '@containers/Main';
import '@public/css';
import Loading from '@components/Loading';
import { login } from '@redux/actions/login';

class App extends Component {
  constructor () {
    super();
    this.overrideHistoryPush();
  }

  overrideHistoryPush () {
    let lastLocation = null;
    history.listen(location => {
      lastLocation = location;
    });

    const historyPush = history.push;
    history.push = (pathname, state = {}) => {
      if (lastLocation === null ||
        pathname !== lastLocation.pathname + lastLocation.search +
        lastLocation.hash ||
        JSON.stringify(state) !== JSON.stringify(lastLocation.state)
      ) {
        historyPush(pathname, state);
      }
    };
  }

  render () {
    return (
      <Provider;; store={ store }>
        <ConnectedRouter;; history={ history }>
          <Suspense;; fallback={ <Loading/> }>
            <Main/>;
          </Suspense>
        </ConnectedRouter>
  </Provider>
  )
  }
}

store.dispatch(login());

render( < App; / >, document.getElementById('app');
)
