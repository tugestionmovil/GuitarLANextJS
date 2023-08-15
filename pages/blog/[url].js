import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/blog.module.css'
import Layout from '../../components/layout'
import {formatearFecha} from '../../utils/helpers'

export default function Post({post}) { 

const {contenido, imagen, titulo,publishedAt}=post[0]?.attributes
  return (
<Layout

title ={`Post - ${titulo}`}>
 <article className={ `contenedor ${styles.pst} ${styles['mt-3']}`}>
   
    <div>
    <Image src={imagen.data.attributes.url}  width={1000} height={400} alt={`Imagen Blog - ${titulo}`}/>
    <div className={styles.contenido}>
          <h3>{titulo}</h3>
       <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
          <Link className={styles.enlace} href ="/blog">Regresar al Blog</Link>
    </div>

      
    </div>
      

    </article>
  
</Layout>


  )
}

export async function getStaticPaths(){
  const respuesta=await fetch(`${process.env.API_URL}/posts`)
  const {data}=await respuesta.json()
 const paths=data.map(post=>(
  { params : { url: post?.attributes?.url }}
 ))
 console.log(paths)
  return{
    paths,
    fallback:false
  }
}

export async function getStaticProps ({params:{url}}){
  console.log(url)
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  const {data:post}=await respuesta.json()
  return{
    props:{
      post
    }
  }
}
