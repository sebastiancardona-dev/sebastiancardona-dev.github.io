import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { CaseStudies } from './components/CaseStudies'
import { Building } from './components/Building'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <CaseStudies />
        <Building />
        <Capabilities />
        <Contact />
      </main>
    </>
  )
}

export default App
