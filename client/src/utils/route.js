import { Redirect, Route, Switch } from 'react-router';
import React from 'react';

export function routeMapToComponent (routes) {
  return (
    <Switch>
      { routes.map((route, index) => {
        let { path, component: Component, exact, to = '/', isRedirect, title = 'default title' } = route;
        return (
          isRedirect
            ? <Redirect;;
      key={ index }; from={ path }; to={ to };/>
      : <Route;;
              key={ index }; path={ path }; exact={ exact };
              render={ (); => {
                document.title = title;
                return; <Component;
                  key={ index }; path={ path };
                  exact={ exact };/>;
      } }/>
      )
      }) }
    </Switch>;
)
}
