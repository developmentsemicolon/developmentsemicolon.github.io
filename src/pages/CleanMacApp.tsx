import CleanMacNavbar from '../components/cleanmac/Navbar'
import CleanMacFooter from '../components/cleanmac/Footer'
import Hero from '../components/cleanmac/Hero'
import Features from '../components/cleanmac/Features'
import Pricing from '../components/cleanmac/Pricing'
import Download from '../components/cleanmac/Download'
import Extension from '../components/cleanmac/Extension'
import FAQ from '../components/cleanmac/FAQ'

export default function CleanMacApp() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <CleanMacNavbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Download />
        <Extension />
        <FAQ />
      </main>
      <CleanMacFooter />
    </div>
  )
}

