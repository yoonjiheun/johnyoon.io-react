import React from 'react';
import scroll from 'smoothscroll-polyfill';

scroll.polyfill();

export default class Text extends React.Component {
  handleClick(a) {
    const id = this.props.go;
    document.querySelector(id).scrollIntoView({ 'behavior': 'smooth' });
  }

  chooseTag (props) {
    if(props.go == null)
      return <p className="no-hover" href={this.props.go}>{ this.props.text }</p>
    return <p className="texts" href={this.props.go} onClick={this.handleClick.bind(this)}>{ this.props.text }</p>
  }
  render () {
    return (
      this.chooseTag(this.props)
    )
  }
}
