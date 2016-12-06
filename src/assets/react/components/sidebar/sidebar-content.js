import React from 'react';

export default class SidebarContent extends React.Component {
  chooseContent (props) {
    if(props.side == 'left') {
      return props.content.map(obj => {
        return <li key={obj.key}>
          <h1>{obj.header}</h1>
          <h2>{obj.duration}</h2>
          <p>{obj.position}</p>
          {obj.desc.map((description, i) => {
            return <p key={i}>{description}</p>
          })} </li>
        })
      }
      return props.content.map((obj, i) => {
        if(obj.link === 'me@johnyoon.io')
          return <li key={i}><a href={'mailto:' + obj.link} id={obj.id}><img src={obj.img} /></a></li>
        return <li key={i}> <a href={obj.link}><img src={obj.img} /></a></li>
      })
    }
    render () {
      return(
        <div className={(this.props.side === 'left' ? 'left-sidebar' : 'right-sidebar') + ' ' + 'sidebar-content'}>
          <ul>
            { this.chooseContent(this.props) }
          </ul>
        </div>
      )
    }
  }
