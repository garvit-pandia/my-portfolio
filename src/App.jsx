import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader visible={loading} />
      <CustomCursor />
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certificates />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
