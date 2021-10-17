import React from 'react'
import Todo from './Todo'
import Next7Days from './Next7Days'

function Todos() {
  const selectedProject = 'today'
  const todos = [
    {
      id: 'f24ts4',
      text: 'feed cats',
      time: '10:00 AM',
      date: '10/20/2021',
      day: '6',
      checked: true,
      color: '#000000',
      project: 'personal',
    },
    {
      id: 'j4j6gn',
      text: 'go for run',
      time: '6:00 AM',
      date: '10/21/2021',
      day: '1',
      checked: false,
      color: '#482841',
      project: 'work',
    },
  ]
  return (
    <div className="Todos">
      <div className="selected-project">{selectedProject}</div>

      <div className="todos">
        {selectedProject === 'next 7 days' ? (
          <Next7Days todos={todos} />
        ) : (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        )}
      </div>
    </div>
  )
}

export default Todos
