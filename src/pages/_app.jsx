import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'

const App = ({ Component, pageProps }) =>
{
  return (
    <> 
      <NavBar />
      <Component {...pageProps}/>
      <Footer/>
    </>
  )
}

export default App


