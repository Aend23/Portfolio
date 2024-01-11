// SkillCard.jsx

import React from "react";
import { skills } from "../utils/data";
import "./styles/Skill.css";

export default function SkillCard() {
  console.log(skills);

  return (
    <div id="skills" className="Container">
      <div className="Wrapper">
        <div className="title">Skills</div>
        <div className="desc">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </div>
        <div className="skills-container">
          {skills.map((skill, id) => {
            return (
              <div className="skill" key={id}>
                <div className="skill-title">{skill.title}</div>
                <ul className="skill-list">
                  {skill.skills.map((obj, id) => {
                    return (
                      <li className="skill-item" key={id}>
                        <div className="skill-details">
                          <img
                            className="skill-image"
                            src={obj.image}
                            alt={obj.name}
                          />
                          {obj.name}
                        </div>
                        
                        <div className="progress-graph">
                          <div className="progress" style={{ width: `${obj.progress}%` }}>
                            {obj.progress}%
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
