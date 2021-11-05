import React, { useContext, useState } from 'react'
import Project from './Project'
import AddNewProject from './AddNewProject'
import { BsPalette, BsCaretRightFill } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { TodoContext } from '../context'
import { useSpring, animated } from 'react-spring'

function Projects() {
  const [showMenu, setShowMenu] = useState(true)
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? '#1ec94c' : '#000000'

  // context
  const { projects } = useContext(TodoContext)

  // ANIMATION
  const spin = useSpring({
    transform: showMenu ? 'rotate(90deg)' : 'rotate(0deg)',
    config: { friction: 25 },
  })

  const menuAnimation = useSpring({
    display: showMenu ? 'block' : 'none',
    lineHeight: showMenu ? 1 : 0,
  })

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
          <animated.span
            className="arrow"
            style={spin}
            onClick={() => setShowMenu(!showMenu)}
          >
            <BsCaretRightFill size="22" />
          </animated.span>
        </div>
      </div>
      <animated.div style={menuAnimation} className="items">
        {projects.map((project) => (
          <Project project={project} key={project.id} edit={edit} />
        ))}
      </animated.div>
    </div>
  )
}

export default Projects
