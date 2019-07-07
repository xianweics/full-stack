import routeConfig from './route.config';
import React, { Component } from 'react';
import Header from '@containers/Main/components/Header';
import navConfig from './nav.config';
import Body from '@containers/Main/components/Body';
import { connect } from 'react-redux';
import { routeMapToComponent } from '@utils/route';
import { withRouter } from 'react-router-dom';
import history from '@history';

class Main extends Component {
  render () {
    return (
      <>
        <Header; navRoute={ navConfig }; curPath={ history.location.pathname }/>;
        <Body>{
          routeMapToComponent(routeConfig)
        }
        </Body>;
  </>
  )
  }
}

function mapStateToProps (state) {
  return {};
}

export default withRouter(connect(
  mapStateToProps
)(Main));
