import { FC, useState } from 'react'
import { useTasksContext } from '../../context/tasksContext';
import './taskForm.css'

const TaskForm: FC = () => {

    const { addTask} = useTasksContext();
    const [task, setTask] = useState('');


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTask({ id: Date.now(), title: task, isCompleted: false });
      setTask('');
    };

    

  return (
    <form className="taskForm"
     onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm;