import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import User from './components/User'
import AddNewTodo from './components/AddNewTodo'
import Calendar from './components/Calendar'
import Projects from './components/Projects'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'
import AddNewProject from './components/AddNewProject'
import Next7Days from './components/Next7Days'

function App() {
  return (
    <div className="App">
      <Header>
        <User />
        <AddNewTodo />
        <Calendar />
        <AddNewProject />
        <Projects />
      </Header>
      <Main>
        <Todos />
        <Next7Days />
        <EditTodo />
      </Main>
    </div>
  )
}

export default App
