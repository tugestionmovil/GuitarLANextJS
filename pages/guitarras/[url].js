
import {useState} from 'react'
import React from 'react'
import Image from 'next/image'

import styles from '../../styles/guitarras.module.css'
import Layout from '../../components/layout'


export default function Producto({guitarra,agregarCarrito}) {
const [cantidad,setCantidad]=useState(0)
const {descripcion,precio,imagen,nombre,id}=guitarra[0]?.attributes
console.log(cantidad)

  const handleSubmit= (event) =>{
  
  event.preventDefault()
  
 if(cantidad <1){
 alert('Cantidad No Valida')
  return
 } 

 //Construir un Objeto
 const guitarraSeleccionada={
    id: guitarra[0].id,
    imagen:imagen.data.attributes.url,
    nombre,
    precio,
    cantidad
  }
  console.log(guitarraSeleccionada)
 

  //PASANDO LA INFORMACION AL CONTEXT 
 agregarCarrito(guitarraSeleccionada)
} 


  return (
<Layout

title ={`Guitarra - ${nombre}`}>
  <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.url}  width={300} height={200} alt={`guitarra - ${nombre}`}/>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>


       <form className={styles.formulario}  onSubmit={ handleSubmit}>
        <label htmlFor="cantidad" >Cantidad</label>
        <select id="Cantidad"
          onChange={e=>setCantidad(+e.target.value)}
        >
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

        </select>
        <input  type="submit" value="Agregar al Carrito"
          
        />
       </form>

      </div>
    </div>
</Layout>


  )
}

export async function getStaticPaths(){
  const respuesta=await fetch(`${process.env.API_URL}/guitarras`)
  const {data}=await respuesta.json()
 const paths=data.map(guitarra=>(
  { params : { url: guitarra?.attributes?.url }}
 ))
 //console.log(paths)
  return{
    paths,
    fallback:false
  }
}

export async function getStaticProps ({params:{url}}){
  //console.log(url)
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const {data:guitarra}=await respuesta.json()
  return{
    props:{
      guitarra
    }
  }
}



/* export async function getServerSideProps ({query:{url}}){
  console.log(url)
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const {data:guitarra}=await respuesta.json()
  return{
    props:{
      guitarra
    }
  }
}
 */
