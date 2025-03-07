import BookingSection from "@/components/booking-section";
import Chefs from "@/components/chefs";
import { Contact } from "@/components/contact,";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import PopularItems from "@/components/popular-items";
import Testimonials from "@/components/testimonials";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto max-w-7xl">
      <Hero />

    <div className="px-4">
    <Features />
      <Welcome />
      <PopularItems />
      <BookingSection />
      <Chefs />
      <Testimonials />
      <Contact/>
    </div>


    </main>
  )
}


