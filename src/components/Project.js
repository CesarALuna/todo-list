import React from 'react'
import RenameProject from './RenameProject'
import { AiOutlineEdit } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'

function Project({ project, edit }) {
  return (
    <div className="Project">
      <div className="name">{project.name}</div>
      <div className="btns">
        {edit ? (
          <div className="edit-delete">
            <span className="edit">
              <AiOutlineEdit size="22" />
            </span>
            <span className="delete">
              <GiCancel size="22" />
            </span>
          </div>
        ) : project.numOfTodos === 0 ? (
          ''
        ) : (
          <div className="total-todos">{project.numOfTodos}</div>
        )}
      </div>
    </div>
  )
}

export default Project
