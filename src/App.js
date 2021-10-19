import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import User from './components/User'
import AddNewTodo from './components/AddNewTodo'
import Calendar from './components/Calendar'
import Projects from './components/Projects'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'
import Next7Days from './components/Next7Days'

function App() {
  return (
    <div className="App">
      <Sidebar>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Sidebar>
      <Main>
        <EditTodo />

        <Todos />
      </Main>
    </div>
  )
}

export default App
