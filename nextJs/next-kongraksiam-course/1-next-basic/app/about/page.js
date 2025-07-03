import styles from "./about.module.css";
import Image from 'next/image'

export const metadata = {
  title: 'AboutUs | Witthawin', 
  keywords: 'witthawin,shopping,sell shirt', 
  description: 'Welcome to Witthawin Shop, your one-stop shop for everything!', 
};


export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>About us</div>
        <Image
          src="/aboutus.png"
          width={200}
          height={200}
          alt="shopping logo"
        ></Image>
      </div>
    </>
  );
}
