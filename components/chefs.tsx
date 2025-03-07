import { cn, sofia } from "@/lib/utils"
import Image from "next/image"

const chefs = [
  {
    id: 1,
    name: "Full Name",
    role: "Designation",
    image: "/master-chefs.jpg",
  },
  {
    id: 2,
    name: "Full Name",
    role: "Designation",
    image: "/master-chefs.jpg",
  },
  {
    id: 3,
    name: "Full Name",
    role: "Designation",
    image: "/master-chefs.jpg",
  },
  {
    id: 4,
    name: "Full Name",
    role: "Designation",
    image: "/master-chefs.jpg",
  },
]

export default function Chefs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className={cn("text-orange-500 font-medium mb-2", sofia.className)}>Team Members</p>
          <h2 className="text-3xl font-bold">Our Master Chefs</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef) => (
            <div key={chef.id} className=" p-4 text-center hover:-translate-y-4 transition-all duration-300">
              <div className="mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200">
                <Image
                  src={chef.image || "/placeholder.svg"}
                  alt={chef.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{chef.name}</h3>
              <p className="text-orange-500">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

