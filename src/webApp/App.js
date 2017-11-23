import React from 'react'
import faker from 'faker'
import './index.css'
import Jumbotron from './Jumbotron'
import NavigationBar from './Navigation'
import Section from './Section'
import ResumeCard from './ResumeCard'
import ProjectCard from './ProjectCard'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const Home = () => <div> Home Page </div>
const About = () => <div> About me </div>
const Portfolio = () => <div> Portfolio </div>
const Contact = () => <div> Contact Info </div>

const App = () =>
  <Router>
    <div>
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/about' component={Portfolio} />
      <Route path='/about' component={Contact} />
      <NavigationBar />
      <Jumbotron
        title={'Lyndee Redfield'}
        desc={'Web Development & Full Stack JavaScript '}
      />
      <Section
        sectionStyle='about'
        title={'About Me'}
        content={'Welcome to my Resume! This is my personal Portfolio of work I have completed, as a student at Big Sky Code Academy.'} />

      <Section
        sectionStyle='resume'
        title={'Resume'}
      >
        <div className='resume-card-container'>
          <ResumeCard
            title={'Skills'}
            details={'My Skills'}
          />
          <ResumeCard
            title={'Qualifications'}
            details={'My Qualifications'}
          />
          <ResumeCard
            title={'Education'}
            details={'My Completed Education'}
          />
          <ResumeCard
            title={'Objective'}
            details={'My Objective'}
          />
        </div>
      </Section>
      <Section
        sectionStyle='projects'
        title={'Work by Me'}
        content={'My Completed Projects'}
      >

        <div className='project-card-container'>
          <ProjectCard product={'Project'}
            title={'Project One'}
            img={faker.random.image()}
          />
          <ProjectCard product={'Project'}
            title={'Project Two'}
            img={faker.random.image()}
          />
          <ProjectCard product={'Project'}
            title={'Project Three'}
            img={faker.random.image()}
          />
          <ProjectCard product={'Project'}
            title={'Project Four'}
            img={faker.random.image()}
          />
        </div>
      </Section>
    </div>
  </Router>

export default App
