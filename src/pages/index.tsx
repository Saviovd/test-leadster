import Head from 'next/head';
import GlobalStyle from '@/styles/globals';
import Header from '@/components/Header/Header';
import Call from '@/components/Call/Call';
import Videos from '@/components/Videos/Videos';


export default function Home() {
   return (
      <>
         <GlobalStyle />
         <Head>
            <title>Leadster</title>
            <meta name='description' content='Generated by create next app' />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <main>
            <Header />
            <Call />
            <Videos />
         </main>
      </>
   )
}
