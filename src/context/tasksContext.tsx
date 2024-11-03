import {createContext,FC,ReactNode,useContext, useEffect, useState} from "react";
import { Task } from "../assets/types/taskType";

  
  interface TaskProviderProps {
    children: ReactNode;
  }
  
  interface ContextProps {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: number) => void;
    updateTask: (id: number) => void;

  }
  
  const TasksContext = createContext<ContextProps>({ 
    tasks: [],
    addTask: () => {},
    removeTask: () => {},
    updateTask: () => {},
  });
  
  const TasksProvider: FC<TaskProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
    });
    
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task: Task) => {
      setTasks([...tasks, task]);
    };
  
    const removeTask = (id: number) => {
      setTasks(tasks.filter((task: Task) => task.id !== id));
    };
  
    const updateTask = (id: number) => {
      setTasks(tasks.map((task: Task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
    };

  
    return (
      <TasksContext.Provider
        value={{
          tasks,
          addTask,
          removeTask,
          updateTask
            
        }}
      >
        {children}
      </TasksContext.Provider>
    );
  };
  
  export const useTasksContext = () => {
    return useContext(TasksContext);
  };
  
  export {  TasksProvider};