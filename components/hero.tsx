"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative pt-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          className="w-full md:w-1/2 text-center md:text-left z-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Enjoy Our <br />
            <span className="text-orange-500">Delicious Meal</span>
          </h1>
          <p className="mb-6 text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
            et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
          </p>
          <Button className="font-medium px-6 py-4 uppercase">
            Book A Table
          </Button>
        </motion.div>

        {/* Right Image with Animation */}
        <div className="w-full flex justify-center md:w-1/2 relative z-10">
          <motion.div
            className="relative w-[60vw] max-w-[350px] h-[60vw] max-h-[350px] rounded-full overflow-hidden border-4 md:border-8 border-orange-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/hero.jpg"
              alt="Grilled meat"
              fill
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/banner.jpg')] opacity-30 bg-cover bg-center"></div>
    </div>
  )
}
