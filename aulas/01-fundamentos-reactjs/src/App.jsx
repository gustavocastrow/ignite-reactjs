import { Post } from './Post'

export function App() {
  return (
    <div>
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
    </div>
    
  )
}



