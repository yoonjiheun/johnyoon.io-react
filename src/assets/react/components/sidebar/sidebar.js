import React from 'react';

import SidebarContent from './sidebar-content';

export default class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <div className={this.props.side + ' ' + 'sidebar'}>
          <span>{this.props.header}</span>
        </div>
        <SidebarContent side={this.props.side} content={this.props.content}/>
    </div>
    )
  }
}
