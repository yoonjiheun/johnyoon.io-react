import React from 'react';
import Text from '../header/text';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
      <div className='default-footer'>
        <Text go={null} text="const JOHNYOON = new FullStackDeveloper();"/>
      </div>
      <div className='mobile'>
        <Text go={null} text="Contact me: me@johnyoon.io"/>
      </div>
    </div>
    )
  }
}
