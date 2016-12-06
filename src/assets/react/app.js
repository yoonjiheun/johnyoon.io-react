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
        desc: [
          'Created an internal web-based application with a UX Designer to help the support team to automate internal tasks.',
          'Used AngularJS in conjunction with JQuery to build a simple and intuitive UI.',
          'Used Tomcat framework to manage business logic and created a RESTful API with JERSEY.'
        ]
      },{
        key: 2,
        header: 'League of Builds',
        position: 'Worked in a team of 2',
        desc: [
          'API Challenge hosted by Riot Games.',
          'Created an web-based application using a RESTful API to allow users to create and download configuration files.',
          'Used the MEAN stack',
          'Created a web scraper to allow user to use data from another website to create their configuration files'
        ]
      }, {
        key: 3,
        header: 'Sync-View',
        position: 'Personal Project',
        desc: [
          'Work In Progress!',
          'Allows users to synchronously watch videos together.'
        ]
      }],
      contact: [{
        link: 'me@johnyoon.io',
        img: '../images/email.png'
      },{
        link: 'https://www.github.com/yoonjiheun',
        img: '../images/github.png'
      },{
        link: 'https://www.linkedin.com/in/jyoondev',
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
