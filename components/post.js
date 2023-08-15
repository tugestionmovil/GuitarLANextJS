import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/blog.module.css'
import {formatearFecha} from '../utils/helpers'



function Post({post}) {
  const {contenido, imagen, titulo, url, publishedAt } = post
  return (
    <article className={styles.post}>
   
    <div>
    <Image src={imagen.data.attributes.url}  width={600} height={400} alt={`Imagen Blog - ${titulo}`}/>
    <div className={styles.contenido}>
          <h3>{titulo}</h3>
       <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.resumen}>{contenido}</p>
          <Link className={styles.enlace} href ={`/blog/${url}`}>Leer Post</Link>
    </div>

      
    </div>
      

    </article>
  

  )
}

export default Post
