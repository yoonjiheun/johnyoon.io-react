import React from 'react';

export default class Text extends React.Component {
  chooseTag (props) {
    if(props.go == null)
      return <p className="texts" href={this.props.go}>{ this.props.text }</p>
    return <a className="texts" href={this.props.go}>{ this.props.text }</a>
  }
  render () {
    return (
      this.chooseTag(this.props)
    )
  }
}
