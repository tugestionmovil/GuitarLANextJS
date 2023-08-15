import React from 'react'
import {useState,useEffect} from 'react'
import Layout from '../components/layout'
import styles from '../styles/carrito.module.css'
import Image from 'next/image'
function Carrito({carrito,actualizarCantidad,eliminarItem}) {
const [total,setTotal]=useState(0);
useEffect(()=>{
  const calculoTotal=carrito.reduce((total,item)=> total+(item.cantidad * item.precio),0)
  setTotal(calculoTotal)
},[carrito])

  return (
    <Layout
    title="carrito de compras">
    <main className="contenedor">      
    <h1 className="heading">Carrito de Compras</h1>
          <div className={styles.contenido}>

      <div className={styles.carrito} >
        <h2>Articulos</h2>
        {carrito.length===0 ?'Carrito Vacio' : (carrito.map(item=>
         ( <div key={item.id} className={styles.producto}>
 
            <div>
                      <Image src={item.imagen} width={100} height={200} alt={`Imagen Guitarra ${item.nombre}`}></Image>
            </div>
            <div>
              <p className={styles.nombre}>{item.nombre}</p>     
              <p className={styles.cantidad}>Cantidad: </p>
              
               <select id="cantidad"
                  value={item.cantidad} className={styles.select}
                  onChange={e=>actualizarCantidad({
          cantidad:+e.target.value,
          id:item.id
         })}
        >
          
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

        </select>
              <p className={styles.precio}>$<span>{item.precio}</span></p>
              <p className={styles.subtotal}>Subtotal $<span>{item.precio * item.cantidad}</span></p>
            </div>
            <button type="button" className={styles.btnEliminar}
            onClick={()=>eliminarItem(item.id)}>X </button>
         </div>
          
          
            ) ))}
      </div>
      <aside className={styles.resumen}>
        <h3>Resumén del Pedido</h3>
        <p>Total a Pagar: ${total}</p>
      </aside>
    </div>
    </main>
    </Layout>
  )
}

export default Carrito
