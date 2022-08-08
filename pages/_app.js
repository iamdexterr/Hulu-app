import Header from '../components/Header'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
  <>
   <Header/>
   <Nav/>

  <Component {...pageProps} />
  </>)
}

export default MyApp
