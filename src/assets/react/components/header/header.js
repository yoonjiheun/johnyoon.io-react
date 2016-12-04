import React from 'react';
import Text from './text';
import Icon from './icon';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.images = {
      github: {
        src: '../images/github.png'
      },
      email: {
        src: '../images/email.png'
      },
      linkedin: {
        src: '../images/linkedin.png'
      }
    };
  }

  render () {
    return (
      <div className="header">
        <Text text="US Citizen" />
        <Text text="View Resume" />
        <Icon image={ this.state.images.github.src } />
        <Icon image={ this.state.images.email.src } />
        <Icon image={ this.state.images.linkedin.src } />
      </div>
    )
  }
}
