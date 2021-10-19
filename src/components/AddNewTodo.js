import React, { useState } from 'react'
import Modal from './Modal'
import TodoForm from './TodoForm'

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState('')
  const [day, setDay] = useState(new Date())
  const [time, setTime] = useState(new Date())

  const projects = [
    { id: 1, name: 'personal', numOfTodos: 0 },
    { id: 2, name: 'work', numOfTodos: 4 },
    { id: 3, name: 'cats', numOfTodos: 2 },
  ]

  function handleSubmit(e) {}

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading="Add new todo!"
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  )
}

export default AddNewTodo
