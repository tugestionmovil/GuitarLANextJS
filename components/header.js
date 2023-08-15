import React from 'react'

import Image from 'next/image'
import Link from 'next/Link' 
import styles from '../styles/header.module.css'
import {useRouter} from 'next/router'

function Header() {
  const router=useRouter();
  return (
<header className={styles.header}>
<div className={`contenedor ${styles.barra}`}>
<Link href="/">
  <Image src="/img/logo.svg" width={300} height={40} alt="imagen logotipo"/>
</Link>
   
   <nav className={styles.navegacion}>
    <Link href="/" 
    className={router.pathname==="/" ? styles.active : ""}>Inicio</Link>
     <Link href="/nosotros"   className={router.pathname==="/nosotros" ? styles.active  :' '}>Nosotros</Link>
    <Link href="/tienda"   className={router.pathname==="/tienda" ? styles.active  : ' '}>Tienda</Link>
    <Link href="/blog"   className={router.pathname==="/blog" ? styles.active : ' '}>Blog</Link>
    <Link href="/carrito">
      <Image src="/img/carrito.png" width={20} height={20} alt="imagen carrito"/>
    </Link>
   </nav>
</div>

</header>
  )
}

export default Header
