import { FC } from 'react'
import { useTasksContext } from '../../context/tasksContext';
import './taskList.css'

const TaskList: FC = () => {
    const { tasks, removeTask,updateTask } = useTasksContext();

  return (
    <div className="taskList">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <span>{task.title}</span>
          <input type="checkbox" checked={task.isCompleted} onChange={() => updateTask(task.id)} />
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TaskList;