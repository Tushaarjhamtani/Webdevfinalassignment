import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Form from '../comps/Form'
import Review2 from '../comps/Review2'
import Review1 from '../comps/Review1'
import Reviews from '../comps/Reviews'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Biggboizz | Home</title>
        <meta name="keywords" content="bb" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bigg Boizz PG Hostel
        </h1>

        <br />
<br />
<br />

        

        <div className="container text-center my-3">
         <div className="container" >
    <h2>Reviews</h2>
    </div>
    <br /><hr /><hr />
   <div className="row">
    
    <div className="col"><Reviews/></div>
    <div className="col"><Review1/></div>
    <div className="col"><Review2/></div>
  </div>
</div>

          

          

          
        
        <div className="container my-3">
  <br />
  <hr />
  <h4>Subscribe to the newsletter</h4>

<Form/>
</div>
      </main>
     
      
    </div>
  )
}
