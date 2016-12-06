import React from 'react';
import Image from './image';
import Detail from './detail';
import _ from 'underscore';

export default class Content extends React.Component {
  render () {
    return (
      <div className="content-wrap" id={this.props.id}>
            <Image image={this.props.img}/>
            <Detail header={this.props.header} details={this.props.details}/>
      </div>
    )
  }
}
