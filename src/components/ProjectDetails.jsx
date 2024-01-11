import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProjectDetails() {
  const location = useLocation();
  const project = location.state||"";
  return (
    <div className="Modal">
      <div className="Container">
        <div className="Wrapper">
         
          <img src={project?.image} className="Image" />
          <div className="Title">{project?.title}</div>
          <div className="Date">{project.date}</div>
          <div className="Tags">
            {project?.tags.map((tag,id) => (
              <div className="Tag" key={id}>{tag}</div>
            ))}
          </div>
          <div className="Desc">{project?.description}</div>
          <div className="ButtonGroup">
            <a href="{project?.github}" target="new" className="Button dull">
              View Code
            </a>
            <a href="{project?.webapp}" target="new" className="Button">
              View Live App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
