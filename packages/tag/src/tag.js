import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class xTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isclosed: true
    };
  }
  static propTypes = {
    color: PropTypes.string,
    ishover: PropTypes.bool,
    isclosed: PropTypes.bool,
  };
  //标签移除的回调函数
  hiddenTag = (e) => {
    this.setState({isclosed: false});
    this.props.onclose(this.props,e);
  }
  render() {
    var vm = this;
    const classes = [
        vm.props.color ? 'x-tag-' + vm.props.color : null,
        vm.props.ishover ? 'is-hover' : null,
    ];
    return (
      this.state.isclosed ? <div className={`x-tag ${classes.join(' ')}`}>
        <span className="x-tag-desc">{vm.props.children}</span>
        {vm.props.closable ? <i className="icon-iconset0127 x-tag-close" onClick={this.hiddenTag}></i> : ''}
      </div> : ''
    );
  }
}
