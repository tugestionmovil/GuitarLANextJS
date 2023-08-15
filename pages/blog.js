import React from 'react'
import Layout from '../components/layout'

import Post from '../components/post'

import styles from '../styles/grid.module.css'

function Blog({posts}) {
  return (
 <Layout
  title={'Blog'}
  description={"Blog de música, venta de guitarras, consejos, GuitarLA"}
 >
   
<main className="contenedor">
<h1 className="heading">Blog</h1>
      <div className={styles.grid}>
         {posts?.map(post=>
    (  <Post 
        key={post.id}
        post={post.attributes}
      />)
    )} 
      </div>
</main>
 </Layout>
  )
}

export default Blog

export async function getStaticProps(){
  const respuesta =await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data:posts}=await respuesta.json()
  //console.log(posts)
  return {
    props:{
      posts
    }
  }
}
 


/* export async function getServerSideProps(){
  const respuesta =await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data:posts}=await respuesta.json()
  //console.log(guitarras)
  return {
    props:{
      posts
    }
  }
}
 */
