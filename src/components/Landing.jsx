import React from 'react'
import Home from './Home';
import Projects from "./Projects.jsx";
import SkillCard from "./SkillCard.jsx";
import Contact from './Contact';

export default function Landing() {
  return (
    <>
      <Home/>
      <Projects/>
      <SkillCard/>
      <Contact />
    </>
  )
}
