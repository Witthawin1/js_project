import styles from './detail.module.css'
import Image from 'next/image'

export async function generateMetadata({ params }) {
  const awaitedParams = await params; 
  const id = awaitedParams.slug;    

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    title: product.title,
    description: product.description || `Details for ${product.title} at Witthawin Shop.`,
    keywords: `witthawin,shopping,sell shirt,${product.title},${product.category}`,
  };
}

export default async function ProductDetail({params}){
    const awaitedParams = await params; 
    const id = awaitedParams.slug; 
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    return (
        <>
            <div className={styles.container}>
                <div>
                    <Image src={data.thumbnail} width={300} height={300} alt={data.title}></Image>
                </div>
                <div className={styles.detail}> 
                    <h1>Title : {data.title}</h1>
                    <h2>Price : {data.price}</h2>
                    <h4>rating : {data.rating}</h4>
                </div>
            </div>
        </>
    )
}