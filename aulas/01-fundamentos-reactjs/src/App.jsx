import { Header } from './components/Header';
import { Post } from './Post';
import styles from  './App.module.css';
import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post 
            author="Gustavo Castro"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, reprehenderit. Maxime odit nisi quam amet aliquid, nostrum itaque voluptas laborum, autem reprehenderit asperiores et, eos quis voluptate temporibus rem natus!"
            location="São José dos Campos - SP"
          />
          <Post 
            author="Diego Fernandes"
            content="React é top"
            location="Rio do Sul - SC"
            />
        </main>

      </div>
     
    </div>
    
  )
}



