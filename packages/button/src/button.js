import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Xbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    type: PropTypes.string,
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    round: PropTypes.bool,
    radius: PropTypes.bool,
    circle: PropTypes.bool
  };
  static defaultProps = { type: '' };
  render() {
    var vm = this;
    const classes = [
        vm.props.type ? 'x-btn-' + vm.props.type : null,
        vm.props.round ? 'is-round' : null,
        vm.props.radius ? 'is-radius' : null,
        vm.props.circle ? 'is-circle' : null,
        vm.props.disabled ? 'is-disabled' : null
    ];
    return (
      <button className={`x-btn ${classes.join(' ')}`}>{vm.props.children || '按钮'}</button>
    );
  }
}
