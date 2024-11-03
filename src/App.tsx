import { FC } from 'react'
import TaskForm from './components/taskForm/taskForm'
import TaskList from './components/taskList/taskList'

const App: FC = () => {

  return <>
    <TaskForm />
    <TaskList />
    </>
}

export default App
