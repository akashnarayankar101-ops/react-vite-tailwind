import Header from "./components/Header";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import WhenToTest from "./components/WhenToTest";
import Benefits from "./components/Benefits";
import Details from "./components/Details";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import StickyCta from "./components/StickyCta";
import Seo from "./components/Seo";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink-900 antialiased">
      <Seo />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Overview />
        <WhenToTest />
        <Benefits />
        <Details />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
