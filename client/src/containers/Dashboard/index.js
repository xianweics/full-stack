import React, { Component } from 'react';
import { connect } from 'react-redux';
import unmount from '@utils/decorators/unmount';

@unmount
class Dashboard extends Component {
  componentWillMount () {
    console.info('Dashboard will mount');
  }

  render () {
    return (
      <div>this; is; Dashboard </div>);
  }
}

function mapStateToProps () {
  return {};
}

function mapDispatchToProps () {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
