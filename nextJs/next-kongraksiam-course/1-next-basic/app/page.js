import styles from './Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export const metadata = {
  title: 'Home | Witthawin', 
  keywords: 'witthawin,shopping,sell shirt', 
  description: 'Welcome to Witthawin Shop, your one-stop shop for everything!', 
};

export default function(){
  return (
    <>
    // for page router
    {/* <Head>
      <title>Home | Witthawin</title>
      <meta name='keywords' content='witthawin,shopping,sell shirt'></meta>
    </Head> */}
    <div className={styles.container}>
      <div className={styles.title}>Home</div>
      <Image src="/shopping.png" 
      width={150}
      height={150}
      alt='shopping logo'
      >
      </Image>
      <p>welcome to win shop</p>
      <Link href="/products" className={`${styles.btn}`}>see all products</Link>
    </div>
    </>
  )
}