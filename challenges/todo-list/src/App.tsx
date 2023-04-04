import { Header } from './components/Header';
import './global.css';
import { NewTask } from './components/NewTask';
import { TaskContent } from './components/TaskContent';

export function App(){
  return (
    <div>
      <Header />
      <NewTask />
      <TaskContent />

      
    </div>
  )
}