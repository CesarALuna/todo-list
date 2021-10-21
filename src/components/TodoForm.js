import React from 'react'
import { BsBell, BsCalendarDate, BsClock, BsPalette } from 'react-icons/bs'
import { GiCancel } from 'react-icons/gi'
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function TodoForm({
  handleSubmit,
  heading = false,
  text,
  setText,
  day,
  setDay,
  time,
  todoProject,
  setTodoProject,
  setTime,
  projects,
  showButtons = false,
  setShowModal = false,
}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="text">
          {heading && <h3>{heading}</h3>}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="To do..."
            autoFocus
          />
        </div>
        <div className="remind">
          <BsBell />
          <p>Remind me!</p>
        </div>
        <div className="pick-day">
          <div className="title">
            <BsCalendarDate />
            <p>Pick a day</p>
          </div>
          <DatePicker value={day} onChange={(day) => setDay(day)} />
        </div>
        <div className="pick-time">
          <div className="title">
            <BsClock />
            <p>Choose a time</p>
          </div>
          <TimePicker value={time} onChange={(time) => setTime(time)} />
        </div>
        <div className="pick-project">
          <div className="title">
            <BsPalette />
            <p>Choose a project</p>
          </div>
          <div className="projects">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  className={`project ${
                    todoProject === project.name ? 'active' : ''
                  }`}
                  onClick={() => setTodoProject(project.name)}
                  key={project.id}
                >
                  {project.name}
                </div>
              ))
            ) : (
              <div style={{ color: 'red', fontStyle: 'italic' }}>
                Please add a project
              </div>
            )}
          </div>
        </div>
        {showButtons && (
          <div>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <GiCancel size="22" />
            </div>
            <div className="confirm">
              <button>+ Add Todo</button>
            </div>
          </div>
        )}
      </form>
    </MuiPickersUtilsProvider>
  )
}

export default TodoForm
