import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn, sofia } from "@/lib/utils";

const images = [
  { src: "/resturent/res.jpg", alt: "Restaurant interior" },
  { src: "/resturent/res2.jpg", alt: "Restaurant interior" },
  { src: "/resturent/res3.jpg", alt: "Food preparation" },
  { src: "/resturent/res4.jpg", alt: "Food dish" },
];


export default function Welcome() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 grid grid-cols-2 gap-4">

          {images.map((image, index) => (
        <div key={index} className={`overflow-hidden rounded-lg ${index % 2 === 1 ? 'mt-6' : ''}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={300}
            height={300}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      ))}

          </div>

          <div className="md:w-1/2 md:pl-12">
            <div className="text-center mb-8">
              <p className={cn("text-orange-500 font-medium mb-2",
                sofia.className
              )}>About Us</p>
              <h2 className="text-3xl font-bold mb-4">
                Welcome to <span className="text-orange-500">Restoran</span>
              </h2>
            </div>

            <p className="text-muted-foreground mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
              et lorem et sit.
            </p>
            <p className="text-muted-foreground mb-6">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
              et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">

              <div className="flex items-center gap-x-4">
                <div className="h-10 w-2 bg-orange-600"/>
              <div className="flex items-center gap-x-8">
                <h3 className="text-5xl font-bold text-orange-500 mb-2">15</h3>
                <p className="uppercase text-muted-foreground font-medium text-sm">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
              </div>
             
              <div className="flex  items-center  gap-x-4">
                <div className="h-10 w-2 bg-orange-600"/>
              <div className="flex items-center gap-x-8">
                <h3 className="text-5xl font-bold text-orange-500 mb-2">50</h3>
                <p className="uppercase text-muted-foreground font-medium text-sm">
                  Popular
                  <br />
                  Master Chefs
                </p>
              </div>
              </div>
             
            </div>

            <div className="text-center">
              <Button className=" font-medium  uppercase">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

