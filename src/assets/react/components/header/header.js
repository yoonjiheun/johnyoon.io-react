import React from 'react';
import Text from './text';

export default class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      miscInfo: [{
        key: 1,
        text: 'VIEW RESUME',
        go: '/resume'
      }, {
        key: 2,
        text: 'US CITIZEN',
        go: null
      }],
      links: [{
        key: 1,
        text: 'HOME',
        go: '/'
      },{
        key: 2,
        text: 'ABOUT',
        go: '/about'
      },{
        key: 3,
        text: 'EDUCATION',
        go: '/education'
      },{
        key: 4,
        text: 'SKILLS',
        go: '/skills'
      },{
        key: 5,
        text: 'EXPERIENCE',
        go: '/experience'
      }, {
        key: 6,
        text: 'INTEREST',
        go: '/interest'
      }]
    }
  }
  render () {
    return (
      <div className="header">
        <div className="texts-wrap">
          {this.state.miscInfo.map(obj => {
            return <Text go={obj.go} text={obj.text} key={obj.key} />
          })}
        </div>
        <div className="links-wrap">
          {this.state.links.map(obj => {
            return <Text go={obj.go} text={obj.text} key={obj.key} />
          })}
        </div>
      </div>
    )
  }
}
