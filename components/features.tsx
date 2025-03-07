'use client'
import { User, Award, ShoppingCart, HeadphonesIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ImSpoonKnife } from "react-icons/im"
import { motion } from "framer-motion"


const Services= [
  {title: "Master Chefs", desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", Icon:<User className=" h-8 w-8" />},

  {title: "Quality Food", desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", Icon:<ImSpoonKnife  className=" h-8 w-8" />},

  {title: "Online Order", desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", Icon:<ShoppingCart className=" h-8 w-8" />},


  {title: "Service", desc:"Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam", Icon: <HeadphonesIcon className=" h-8 w-8" />},

]

export default function Features() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Services.map((service, index)=> (
            <motion.div key={index}
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1,  ease:"easeInOut"}}
            >
            <Card key={index} className="hover:bg-primary transition-all duration-700 hover:text-white group ease-out">
              <CardContent className="flex items-center justify-center w-full">
                <div className="p-4 bg-primary group-hover:bg-white group-hover:text-orange-600 rounded-full transition-colors duration-700 ease-out">
                {service.Icon}
                </div>
            
              </CardContent>
              <CardHeader className="flex items-center justify-center w-full text-center">
                <CardTitle>
                  {service.title}
                </CardTitle>
                <CardDescription className="group-hover:text-white">
                  {service.desc}
                </CardDescription>
              </CardHeader>
            </Card>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

