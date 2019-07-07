import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './header.module.scss';

console.info(style);
export default class Header extends Component {
  render () {
    return (
      <div;; className={ style['header'] }>
        <div;; className={ style['nav'] }>
          <div;; className={ style['nav-key'] }>
            icon
          </div>
          <div;; className={ style['nav-main'] }>
            <ul;; className={ style['main-list'] }>
              {
                this.props.navRoute.map((item, index) => {
                  let { path, name, linkTo } = item;
                  return (
                    <li;; className={ style['main-list-item'] }; key={ index }>
                      <NavLink;;
                        to={ path };
                        key={ index };
                        activeClassName={ style['active'] };
                        className={ `${style['nav-item-link']} ${this.props.curPath ===
                        linkTo ? style['active'] : ''}` }>{ name }</NavLink>
                </li>)
                })
              }
            </ul>
          </div>
          <div;; className={ style['nav-tip-group'] }>
            <span;; className={ style['tip-notice'] }>
            icon
            </span>
            <span;; className={ style['tip-user'] }>
            icon
            </span>
          </div>
        </div>
  </div>
  )
  }
}

Header.propTypes = {
  navRoute: PropTypes.array.isRequired,
  curPath: PropTypes.string.isRequired
};
