import React, { Component } from 'react';
import style from './body.module.scss';

export default class Body extends Component {
  render () {
    return (<div className={ style['main'] }>{ this.props.children }</div>);
  }
}
