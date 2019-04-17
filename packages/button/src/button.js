import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Xbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    type: PropTypes.string,
    plain: PropTypes.boolean,
    disabled: PropTypes.boolean,
    round: PropTypes.boolean,
    radius: PropTypes.boolean,
    circle: PropTypes.boolean
  };
  static defaultProps = { type: '' };
  render() {
    var vm = this;
    const classes = [
      type ? 'x-btn-' + vm.type : '',
      {
        'is-round': vm.round,
        'is-radius': vm.radius,
        'is-circle': vm.circle,
        'is-disabled': vm.disabled
      }
    ];
    return (
      <button className="x-btn" className={classes}>
        <slot>按钮</slot>
      </button>
    );
  }
}
