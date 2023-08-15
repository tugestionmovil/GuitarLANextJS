import Layout from "../components/layout"
import Link from "next/link"

export default function PAgina404() {
  return (
<Layout
title={"Página No Encontrada"}>
     
      <p className="error">Error - 404 Página No Encontrada</p>
    <Link className ="error-enlace" href="/">Ir a Inicio</Link>
</Layout>
 
  )
}


