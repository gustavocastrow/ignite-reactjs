import { ImageContainter, ProductContainer, ProductDetails } from '@/styles/pages/product'
import {useRouter} from 'next/router'

export default function Product(){
  const { query } = useRouter()
  return(
    <ProductContainer>
      <ImageContainter>

      </ImageContainter>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus nesciunt, animi neque saepe commodi, culpa perferendis vitae odio dicta laudantium ratione explicabo distinctio. Cum id necessitatibus perferendis quibusdam illo!</p>

        <button>Comprar Agora</button>
      
      </ProductDetails>
    </ProductContainer>
  )
}