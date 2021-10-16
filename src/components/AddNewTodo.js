import React, { useState } from 'react'
import Modal from './Modal'
import { BsBell, BsCalendarDate, BsClock, BsPalette } from 'react-icons/bs'
import { GiCancel } from 'react-icons/gi'
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState('')
  const [day, setDay] = useState(new Date())
  const [time, setTime] = useState(new Date())

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form>
            <div className="text">
              <h3>Add new Todo!</h3>
              <input
                type="text"
                value={text}
                placeholder="To do..."
                autoFocus
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="remind">
              <BsBell />
              <p>Remind me!</p>
            </div>
            <div className="pick-day">
              <div className="title">
                <BsCalendarDate />
                <p>Choose a date</p>
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
                <div className="project active">personal</div>
                <div className="project">work</div>
                <div className="project ">school</div>
                <div className="project">work</div>
                <div className="project">side hustle</div>
                <div className="project">cats</div>
                <div className="project">me time</div>
              </div>
            </div>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <GiCancel size="30" color="red" />
            </div>
            <div className="confirm">
              <button>+ Add to do</button>
            </div>
          </form>
        </MuiPickersUtilsProvider>
      </Modal>
    </div>
  )
}

export default AddNewTodo
