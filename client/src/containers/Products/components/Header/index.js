import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './header.module.scss';

export default class Header extends Component {
  render () {
    return (
      <ul;; className={ style['list'] }>
        {
          this.props.tabList.map((item, index) => {
            let { path, name, linkTo } = item;
            return (<li;; className={ style['item'] }; key={ index }>
              <NavLink;;
                to={ path };
                key={ index };
                activeClassName={ style['active'] };
                className={ `${style['item-link']} ${this.props.curPath ===
                linkTo ? style['active'] : ''}` }>{ name }</NavLink>
          </li>)
          })
        }
  </ul>
  )
  }
}

Header.propTypes = {
  tabList: PropTypes.array.isRequired,
  curPath: PropTypes.string.isRequired
};
