import { Post } from './Post';
import { Header } from './components/Header';
import './styles.css';

export function App() {

  return (
    <div>
    <Header />
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
    </div>
    
  )
}

