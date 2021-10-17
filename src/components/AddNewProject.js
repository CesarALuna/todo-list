import React, { useState } from 'react'
import Modal from './Modal'
import ProjectForm from './ProjectForm'
import { AiOutlineFolderAdd } from 'react-icons/ai'

function AddNewProject() {
  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')
  const handleSubmit = (e) => {}

  return (
    <div className="AddNewProject">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <AiOutlineFolderAdd size="22" />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading="New project"
          value={projectName}
          setValue={setProjectName}
          setShowModal={setShowModal}
          confirmButtonText="Add Project"
        />
      </Modal>
    </div>
  )
}

export default AddNewProject
