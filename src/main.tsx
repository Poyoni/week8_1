import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TasksProvider } from './context/tasksContext.tsx'

createRoot(document.getElementById('root')!).render(
 <TasksProvider>
   <App />
 </TasksProvider>
)
