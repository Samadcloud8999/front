import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyMe from './components/WhyMe'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <OrderForm />
      </main>
      <Footer />
    </div>
  )
}
