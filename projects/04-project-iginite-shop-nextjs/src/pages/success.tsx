import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";


interface SuccessProps {
  customerName: string;
  product: {
    name: string,
    imageUrl: string,

  }
}

export default function Success({ customerName, product}: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer>
        <Image src={product.imageUrl} width={120} height={110} alt="" />
      </ImageContainer> 

      <p>
        Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async({query}) => {
    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product'] //produtos comprados nesse checkout session 
    });

    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product as Stripe.Product;

    return {
      props: {
        customerName,
        product: {
          name: product.name,
          imageUrl: product.images[0],
        }

      }
    }

}


//fetch: totalmente pelo cliente server (useEffect) -> se fizermos pelo cliente 
//side teriamos que fazer uma skeleton screen, ou uma tela de loading até os dados serem carregados
//e o problema maior é que a API do stripe não permite a gente fazer uma chamada
//para buscar os dados de uma checkout session pelo cliente-side pois estariamos expondo
//nossa chave da api no cliente-server 

//fetch: pelo getServerSideProps -> 

//fetch: pelo getStaticProps -> voltado para mais performance, então se gerarmos uma
//pagina de sucesso estática ela vai ser a mesma página para todos os cliente possiveis
