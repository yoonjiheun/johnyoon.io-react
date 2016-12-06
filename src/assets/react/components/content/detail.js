import React from 'react';

export default class Detail extends React.Component {
  render () {
    return(
      <div className="details-wrap">
        <div className="details">
          <h1>{this.props.header}</h1>
          <hr/>
          {this.props.details.map((detail, i) => {
            return <p key={i}>{detail}</p>
          })}
        </div>
      </div>
    )
  }
}
