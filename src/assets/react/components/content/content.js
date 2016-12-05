import React from 'react';
import Image from './image';
import Detail from './detail';

export default class Content extends React.Component {
  render() {
    return (
      <div className="content-wrap">
            <Image image={this.props.image}/>
            <Detail header={this.props.detailHeader} detail={this.props.detail}/>
      </div>
    )
  }
}
