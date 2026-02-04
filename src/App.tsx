import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Features } from './components/Features'
import { TechStack } from './components/TechStack'
import { Architecture } from './components/Architecture'
import { Roadmap } from './components/Roadmap'
import { Screenshots } from './components/Screenshots'
import { Testimonials } from './components/Testimonials'
import { DownloadSection } from './components/Download'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <TechStack />
        <Architecture />
        <Roadmap />
        <Screenshots />
        <Testimonials />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
