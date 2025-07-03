// components/NavBar.js
'use client'; // <-- เพิ่มบรรทัดนี้

import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css'; // ตรวจสอบเส้นทางให้ถูกต้องอีกครั้ง

// Import usePathname
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname(); // ดึง path ปัจจุบันออกมา

    return (
        <nav className={styles.navbar}> {/* อาจจะเพิ่ม class สำหรับ nav โดยรวม */}
            <div className={`logo ${styles.title}`}>
                <Link href="/">
                    <Image src="/logo.png" width={50} height={50} alt="Company Logo" />
                </Link>
            </div>

            {/* Home Link */}
            <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.activeLink : ''}`}>
                Home
            </Link>

            {/* About us Link */}
            <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.activeLink : ''}`}>
                About us
            </Link>

            {/* Products Link */}
            <Link href="/products" className={`${styles.navLink} ${pathname === '/products' ? styles.activeLink : ''}`}>
                Products
            </Link>
        </nav>
    );
}