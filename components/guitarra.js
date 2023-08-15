import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/guitarras.module.css'

function Guitarra({guitarra}) {
 const {descripcion, imagen,nombre,url,precio}=guitarra
  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.url}  width={300} height={200} alt={`guitarra - ${nombre}`}/>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>

      </div>
    </div>
  )
}

export default Guitarra
