import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ContentList from './components/content/content-list';
import Footer from './components/footer/footer';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      experience: [{
        key: 1,
        header: 'Pype, Inc',
        position: 'Software Developer',
        duration: 'Dec. 2015 - May 2016',
        desc: [
          'Created an internal web-based application with a UX Designer to help the support team to automate internal tasks.',
          'Used AngularJS in conjunction with JQuery to build a simple and intuitive UI.',
          'Used Tomcat framework to manage business logic and created a RESTful API with JERSEY.'
        ]
      },{
        key: 2,
        header: 'League of Builds',
        position: 'Worked in a team of 2',
        duration: 'Aug. 10th, 2015 - Aug. 31st 2015',
        desc: [
          'API Challenge hosted by Riot Games.',
          'Created an web-based application using a RESTful API to allow users to create and download configuration files.',
          'Used the MEAN stack.',
          'Created a web scraper to allow user to use data from another website to create their configuration files.'
        ]
      },{
        key: 3,
        header: 'johnyoon.io',
        position: 'Personal Project',
        duration: 'Dec. 5, 2016-Dec. 7, 2016',
        desc: [
          'Created with React to learn component design pattern.',
          'Still making UI fixes when time is avaliable!',
          'Deployed on AWS with Node.js.',
          'Used ES2016 syntax for both React and Node and used babel to transpile.',
          'Bundled React with Webpack.'
        ]
      },{
        key: 4,
        header: 'Sync-View',
        position: 'Personal Project',
        duration: 'Work in Progress',
        desc: [
          'Allows users to synchronously watch videos together.',
          'Using Angular 2 and Node.js.'
        ]
      }],
      contact: [{
        id: '#email',
        link: 'me@johnyoon.io',
        img: '../images/email.png'
      },{
        id: '#github',
        link: 'https://www.github.com/yoonjiheun',
        img: '../images/github.png'
      },{
        id: '#linkedin',
        link: 'https://www.linkedin.com/in/devjyoon',
        img: '../images/linkedin.png'
      }]
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Sidebar side="left" header="EXPERIENCE" content={this.state.experience}/>
        <Sidebar side="right" header="CONTACT ME" content={this.state.contact}/>
        <ContentList/>
        <Footer />
      </div>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
