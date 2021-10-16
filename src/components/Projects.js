import React, { useState } from 'react'
import Project from './Project'
import AddNewProject from './AddNewProject'
import RenameProject from './RenameProject'
import { BsPalette, BsCaretUp } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineFolderAdd } from 'react-icons/ai'

function Projects() {
  const [showMenu, setShowMenu] = useState(true)
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? '#1ec94c' : '#000000'

  const projects = [
    { id: 1, name: 'personal', numOfTodos: 0 },
    { id: 2, name: 'work', numOfTodos: 4 },
    { id: 3, name: 'cats', numOfTodos: 2 },
  ]

  return (
    <div className="Projects">
      <div className="header">
        <div className="title">
          <BsPalette size="22" />
          <p>Projects</p>
        </div>
        <div className="btns">
          {showMenu && projects.length > 0 && (
            <span className="edit" onClick={() => setEdit((edit) => !edit)}>
              <AiOutlineEdit size="22" color={pencilColor} />
            </span>
          )}
          <AddNewProject />
          <span className="arrow">
            <BsCaretUp size="22" />
          </span>
        </div>
      </div>
      <div className="items">
        {projects.map((project) => (
          <Project project={project} key={project.id} edit={edit} />
        ))}
      </div>
    </div>
  )
}

export default Projects
