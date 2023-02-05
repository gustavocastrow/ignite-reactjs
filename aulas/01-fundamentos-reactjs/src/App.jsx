import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
    <Sidebar />

      <main>
        <Post 
        author="Gustavo Castro" 
        content="Como Aprender JS de forma efetiva"
        />

        <Post 
        author="Rafael Costa" 
        content="Entendo RPA"
        />

        <Post 
        author="Alexandre Silva" 
        content="Melhores práticas de Engenharia"
        />
      </main>
    </div>
   
    </div>
    
  )
}

