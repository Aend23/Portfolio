import React,{useState} from 'react';
import { projects } from '../utils/data';
import Card from './Card';
import "./styles/projects.css"

export default function Projects() {
    const [toggle, setToggle] = useState('all');
  return (
    <div id="projects" className="Container">
    <div className="Wrapper">
        <div className="Title">Projects</div>
        <div className="Desc">
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </div>
        <div className="Divider"></div>
        <div className="Divider"></div>
        <div className="CardContainer">
            { projects
                .map((project,id) => (
                    <Card project={project} key={id}/>
                ))}
        </div>
    </div>
</div>

  )
}
