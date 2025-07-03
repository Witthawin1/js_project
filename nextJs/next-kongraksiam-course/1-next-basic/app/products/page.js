import Image from 'next/image'
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
      {
        data.products.map((product) => (
            <div key={product.id}>
                <h2>{product.title}</h2>
                <Image src={product.thumbnail}
                width={300}
                height={300}
                alt={product.title}
                ></Image>
                <p>{product.price}</p>
            </div>
        ))
      }
    </>
  );
}

