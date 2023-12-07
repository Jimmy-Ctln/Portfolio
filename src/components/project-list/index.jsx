import React from 'react'
import { Project } from '../project'
import data from "../../data/data.json";

export const ProjectList = () => {

  const projects = data.carrousel.projects;

  return (
    <div className='flex flex-col h-full gap-20 mt-10'>
        {projects.map((project) => (
          <div key={project.id}>
            <Project
            key={project.id}
            image={project.src}
            alt={project.name}
            name={project.name}
            href={project.githubLink}
            description={project.description}
            />
          </div>
        ))}
    </div>
  )
}
