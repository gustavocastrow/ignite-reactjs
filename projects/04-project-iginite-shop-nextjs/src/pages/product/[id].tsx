import { ImageContainter, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import Head from 'next/head'

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({product}: ProductProps){
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  
  async function handleBuyProduct(){
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      });
      const { checkoutUrl } = response.data
      //redirecionando o usuario para uma rota externa (window.location.href)
      //redirecionando o usuario para uma rota interna:
      //const router = useRouter()
      //router.push('/checkout')

      window.location.href= checkoutUrl
    } catch (err){
      //Conectar com uma ferramenta de observabilidade(datadog/sentry)
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return(
    <>
     <Head>
      <title>{product.name} | Ignite Shop</title>
    </Head>
      <ProductContainer>
        <ImageContainter>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainter>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar Agora</button>
        
        </ProductDetails>
      </ProductContainer>
  </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  //tudo que é passado aqui é o que vai ser criado no momento da build 
  return{
    paths: [
      {params: {id: 'prod_NfEc2zy9Sn5pX9'}}
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) =>{
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, //1hour in cache
  }
}