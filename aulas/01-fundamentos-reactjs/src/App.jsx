import { Post } from './Post';

export function App() {

  return (
    <div>
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

