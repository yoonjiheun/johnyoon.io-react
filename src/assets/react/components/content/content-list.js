import React from 'react';
import Content from './content';

export default class ContentList extends React.Component {
  constructor () {
    super();
    this.state = {
      contents: [{
        img: '../images/about.jpg',
        detailHeader: 'ABOUT',
        details: [
          'Hey guys! I\'m John and I am a JavaScript developer!',
          'I am currently looking for software development related internships!',
          'Hope you guys enjoy this website! (Yes, I created a static webpage with React. lol)'
        ],
        next: 'EDUCATION',
        prev: null
      },{
        img: '../images/gmu.jpg',
        detailHeader: 'EDUCATION',
        details: [
          'George Mason University',
          'Expected Gradution Fall 2018',
          'Information Technology, B.S.',
          'Database and Programming Concentration'
        ],
        next: 'SKILLS',
        prev: 'ABOUT'
      },{
        img: '../images/skills.jpg',
        detailHeader: 'SKILLS',
        details: [
          'Programming Experience in JavaScript/TypeScript and Java',
          'Familiar with MVC and Component-based design patterns',
          'Experience with version control systems such as GIT',
          'Experience with cloud computing (SSH)',
          'Experience with non-relational databases such as MongoDB',
          'Experience with Linux systems (Ubuntu/Redhat)'
        ],
        next: 'EXPERIENCE',
        prev: 'EDUCATION'
      },{
        img: '../images/experience.jpg',
        detailHeader: 'EXPERIENCE',
        details: [
          'Hover over the side bar that says Experience so I can show off my css skills!',
          '<<<<<<<<<<<<<<<<<<<',
          'If you don\'t see a side bar that means you\'re on mobile or your screen is too small :(, but my resume is avaliable at the top!'
      ],
        next: 'INTEREST',
        prev: 'SKILLS'
      },{
        img: '../images/interests.png',
        detailHeader: 'INTEREST',
        details: [
          'Reading comics (If you haven\'t noticed)',
          'Competitive Gaming',
          'Powerlifting',
          'Learning new technologies'
        ],
        next: null,
        prev: 'EXPERIENCE'
      }]
    }
  }

  render() {
    return (
      <div className="content-list-wrap">
        {this.state.contents.map((content, i) => {
          return <Content img={content.img} header={content.detailHeader}
              details={content.details} key={i} id={content.detailHeader} next={content.next} prev={content.prev}/>
        })}
      </div>
    )
  }
}
