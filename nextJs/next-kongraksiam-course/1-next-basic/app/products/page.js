import Image from 'next/image'
import styles from './product.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Products | Witthawin',
  keywords: 'witthawin,shopping,sell shirt',
  description: 'Welcome to Witthawin Shop, your one-stop shop for everything!',
};

export default async function ProductsPage() { // Changed to async function
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();

  return (
    <>
      <h1>All products</h1>
      <div className={styles.container}>
      {
        data.products.map((product) => (
            <div key={product.id}>
              <Link href={'/products/'+product.id}>
                <h2 className={styles.title}>{product.title}</h2>
                <Image src={product.thumbnail}
                width={300}
                height={300}
                alt={product.title}
                ></Image>
              </Link>
            </div>
        ))
      }
      </div>
    </>

  );
}

