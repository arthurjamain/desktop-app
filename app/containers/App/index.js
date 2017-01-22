// @flow
import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default class App extends Component {

  props: {
    children: HTMLElement
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      sidebarOpen: false
    }
  }

  onSetSidebarOpen( open ) {
    this.setState({sidebarOpen: open});
  }

  onToggleSidebar() {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }

  render() {
    const children = (<div className="container-wrapper">{this.props.children}</div>);
    return (
      <div>
        <Navbar toggleSidebar={ this.onToggleSidebar.bind(this) }/>
        <div className="sidebar-container">
          <Sidebar children={ children }
                    open={ this.state.sidebarOpen }
                    onSidebarOpen={ this.onSetSidebarOpen.bind(this) } />
        </div>
      </div>
    );
  }
}
