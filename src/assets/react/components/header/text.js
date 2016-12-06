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
      return <p className="no-hover">{ props.text }</p>
    if(props.go == '/resume')
      return <a className="texts" href={props.go}>{props.text}</a>
    return <p className="texts" href={props.go} onClick={this.handleClick.bind(this)}>{ props.text }</p>
  }
  render () {
    return (
      this.chooseTag(this.props)
    )
  }
}
