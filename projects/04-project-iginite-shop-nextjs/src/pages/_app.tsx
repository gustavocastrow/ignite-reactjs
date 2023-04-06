import { globalStyles } from '@/styles/global';
import { Roboto } from '@next/font/google';
import type { AppProps } from 'next/app';
import logoImg from '../assets/logo.svg';
import Image from 'next/image';
import { Container, Header } from '@/styles/pages/app';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
        </Header>
        <Component {...pageProps} />
      </Container>
     
    </>
  );
}