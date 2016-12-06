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
        go: '#ABOUT'
      },{
        key: 3,
        text: 'EDUCATION',
        go: '#EDUCATION'
      },{
        key: 4,
        text: 'SKILLS',
        go: '#SKILLS'
      },{
        key: 5,
        text: 'EXPERIENCE',
        go: '#EXPERIENCE'
      }, {
        key: 6,
        text: 'INTEREST',
        go: '#INTEREST'
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
