import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import InfoSection from './components/InfoSection'
import AlternateBlockA from './components/AlternateBlockA'
import AlternateBlockB from './components/AlternateBlockB'
import StoryQuoteSection from './components/StoryQuoteSection'
import PediatricNutritionSection from './components/PediatricNutritionSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingLanguageSwitcher from './components/FloatingLanguageSwitcher'

export default function PathIntlHome() {
  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-slate-800 antialiased">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <InfoSection />
        <AlternateBlockA />
        <AlternateBlockB />
        <StoryQuoteSection />
        <PediatricNutritionSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingLanguageSwitcher />
    </div>
  )
}
