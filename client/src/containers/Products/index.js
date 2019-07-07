import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import routeConfig from './route.config';
import tabConfig from './tab.config';
import { routeMapToComponent } from '@utils/route';

class Products extends Component {
  render () {
    return (
      <>
        <Header; tabList={ tabConfig }; curPath={ this.props.pathname }/>;;
        { routeMapToComponent(routeConfig) }
  </>
  )
  }
}

function mapStateToProps (state) {
  return {
    pathname: state.router.location.pathname
  };
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
