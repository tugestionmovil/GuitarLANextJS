import Link from 'next/Link'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'

function Nosostros() {
  return (
    <div>
    <Layout
       title={'Nosotros'}
    description={'Sobre Nosotros'}
    >
 <main className={`contenedor ${styles.nosotros}`}>
 <h2 className="heading">Nosotros</h2>
            
           <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="nosotros"/>
               <div >
             
              <p>Vivamus euismod, massa sed malesuada facilisis, libero dui egestas libero, pulvinar ornare orci lectus eu libero. Maecenas ut nunc maximus, elementum ante id, laoreet sapien. Nulla fringilla sem orci, a ultricies mi suscipit id. Suspendisse nec rutrum velit, vel imperdiet turpis. Duis at facilisis quam. Nullam at eros molestie, tempus eros sit amet, ultricies ligula. Phasellus consectetur massa non laoreet porta. Nulla finibus luctus condimentum. Phasellus quis placerat velit. Etiam laoreet, est sed egestas hendrerit, sem lorem consequat orci, vitae luctus magna magna et dui. Proin vel arcu ac augue ornare tempus ac vel justo. Nulla sollicitudin, purus ac accumsan tincidunt, turpis ligula dapibus nisi, quis consequat sem nisi at felis. Maecenas lobortis tempor lectus sit amet tempor. </p>
                            <p>Vivamus euismod, massa sed malesuada facilisis, libero dui egestas libero, pulvinar ornare orci lectus eu libero. Maecenas ut nunc maximus, elementum ante id, laoreet sapien. Nulla fringilla sem orci, a ultricies mi suscipit id. Suspendisse nec rutrum velit, vel imperdiet turpis. Duis at facilisis quam. Nullam at eros molestie, tempus eros sit amet, ultricies ligula. Phasellus consectetur massa non laoreet porta. Nulla finibus luctus condimentum. Phasellus quis placerat velit. Etiam laoreet, est sed egestas hendrerit, sem lorem consequat orci, vitae luctus magna magna et dui. Proin vel arcu ac augue ornare tempus ac vel justo. Nulla sollicitudin, purus ac accumsan tincidunt, turpis ligula dapibus nisi, quis consequat sem nisi at felis. Maecenas lobortis tempor lectus sit amet tempor. </p>
            </div>
           </div>

 </main>
    </Layout>
     
    </div>
  )
}

export default Nosostros
