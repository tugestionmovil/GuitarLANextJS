
import Layout from '../components/layout'
import react from 'react'
import styles from '../styles/grid.module.css'
import Curso from '../components/curso'
import Guitarra from '../components/guitarra'
import Post from '../components/post'

export default function Home({guitarras,posts,curso}) {
  console.log(curso)
  return (
   <div>
<Layout

>
<main className="contenedor">
<h1 className="heading">Nuestra Colección</h1>
 <div className={styles.grid}>

           {guitarras?.map(guitarra=>
    (  <Guitarra 
        key={guitarra.id}
        guitarra={guitarra.attributes}
      />)
    )}
      </div>
</main>
{<Curso 
 key={curso.id}
  curso={curso.attributes}
/> }
<section  className="contenedor">
<h2 className="heading">Blog</h2>
<div className={styles.grid}>
         {posts?.map(post=>
    (  <Post 
        key={post.id}
        post={post.attributes}
      />)
    )} 
      </div>
</section>

     

</Layout>

   </div>
  )
}


export async function getServerSideProps(){
  const urlGuitarras= `${process.env.API_URL}/guitarras?populate=imagen`
    const urlPosts= `${process.env.API_URL}/posts?populate=imagen`
    const urlCurso= `${process.env.API_URL}/curso?populate=imagen`
const[resGuitarras, resPosts,resCurso]=await Promise.all([
  fetch(urlGuitarras),
  fetch(urlPosts),
  fetch(urlCurso)
])
const [{data:guitarras},{data:posts},{data:curso}]= await Promise.all( [resGuitarras.json(),resPosts.json(),resCurso.json()])
  //console.log(guitarras)
  return {
    props:{
      guitarras,
      posts,
      curso
    }
  }
}
