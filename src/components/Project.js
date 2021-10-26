import React, { useContext, useState } from 'react'
import Modal from './Modal'
import RenameProject from './RenameProject'
import { TodoContext } from '../context'
import { AiOutlineEdit } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'

function Project({ project, edit }) {
  //CONTEXT
  const { setSelectedProject } = useContext(TodoContext)

  // STATE
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="Project">
      <div className="name" onClick={() => setSelectedProject(project.name)}>
        {project.name}
      </div>
      <div className="btns">
        {edit ? (
          <div className="edit-delete">
            <span className="edit" onClick={() => setShowModal(true)}>
              <AiOutlineEdit size="20" />
            </span>
            <span className="delete">
              <GiCancel size="20" />
            </span>
          </div>
        ) : project.numOfTodos === 0 ? (
          ''
        ) : (
          <div className="total-todos">{project.numOfTodos}</div>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject project={project} setShowModal={setShowModal} />
      </Modal>
    </div>
  )
}

export default Project
