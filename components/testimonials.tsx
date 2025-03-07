"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/constant/data";
import { motion } from "framer-motion";
import { cn, sofia } from "@/lib/utils";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-12">
          <p className={cn("text-orange-500 font-medium mb-2", sofia.className)}>Testimonial</p>
          <h2 className="text-3xl font-bold">Our Clients Say!!!</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-xl mx-auto overflow-hidden">
          <motion.div
            key={testimonials[activeIndex].id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="p-6 rounded-lg shadow-lg text-center border bg-orange-500 text-white transition-all"
          >
            <p className="text-lg italic mb-4">❝ {testimonials[activeIndex].content} ❞</p>
            <div className="flex justify-center items-center">
              <Image
                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                width={50}
                height={50}
                className="rounded-full mr-3"
              />
              <div>
                <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${
                index === activeIndex ? "bg-orange-500 w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
