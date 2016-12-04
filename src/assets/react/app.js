import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';

class App extends React.Component {
  render() {
    return (
      <Header/>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
