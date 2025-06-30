import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='home-container'>
        <div className="home-leftside">
            <h1 className='main-heading-home'>👋 Hi, I'm Arnav Anand!</h1>
            <h3 className='home-mini-heading'>
                 FullStack Developer | Problem Solver | Tech Enthusiast
            </h3>
            <p className='home-paragraph'>
                I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. 
                I love to explore new technologies and continuously improve my skills.
            </p>
            <h3 className='home-mini-heading'>
                🛠️ My Toolkit:
            </h3>
            <p className='home-paragraph'>
                JavaScript (React, Node.js) | Python | MongoDB | and more!
                I’m always learning and experimenting with new tech to stay ahead in this fast-paced industry.
            </p>
            <h3 className='home-mini-heading'>
                🤝 Team Player Mindset:
            </h3>
            <p className='home-paragraph'>
                I thrive in collaborative environments where open communication leads to great results. Whether it's brainstorming ideas or debugging tricky issues, I believe teamwork makes the dream work!
            </p>
            <h2 className='conclusion-heading'>
                🚀 Let’s build something amazing together!
            </h2>
        </div>
        <div className="home-rightside">
            <img src="" alt="Arnav Anand" className="profile-image" />
        </div>
    </div>
  );
}