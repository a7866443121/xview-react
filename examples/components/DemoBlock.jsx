import React, {Component} from 'react';
export default class DemoBlock extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }
  toggle = () => {
    const vm = this;
    this.setState({
      isExpand: !vm.state.isExpand, 
    });
  }
  render () {
    const vm = this;
    const state = vm.state;
    return (
      <div className="docs-demo-wrapper">
        <div style={{height : state.isExpand ? 'auto' : '0'}} className="demo-container">
          <div span="14">
            <div className="docs-demo docs-demo--expand">
              <div className="highlight-wrapper">
                <slot name="highlight"></slot>
                <Child template={Template}></Child>
              </div>
            </div>
          </div>
        </div>
        <span className="docs-trans docs-demo-triangle" onclick="toggle">{state.isExpand ? '隐藏代码' : '显示代码'}</span>
      </div>
    );
  }
}

