"use client"

import { useState } from "react"
import Image from "next/image"
import { cn, sofia } from "@/lib/utils"
import { MenuItem, menuItems } from "@/constant/data"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Separator } from "./ui/separator"
import { FaHamburger } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { useCart } from "@/hooks/store"
import { ShoppingCart } from "lucide-react"
import { toast } from "sonner"

const categories = [
  { id: "breakfast", label: "Breakfast", icon: <BsFillCupHotFill />},
  { id: "lunch", label: "Lunch", icon: <FaHamburger /> },
  { id: "dinner", label: "Dinner", icon: <ImSpoonKnife /> },
];


export default function PopularItems() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [disable, setDisable] = useState(false)
  const {addItem, cartItems} = useCart()

  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

    const orderSubmit = (item: MenuItem) => {
      // Check if the item is already in the cart
      const isItemInCart = cartItems.some((menuItem) => menuItem.id === item.id);
    
      if (isItemInCart) {
        toast.info("This item is already in your cart");
      } else {
        addItem(item);
        toast.success("Your order has been added to the cart");
      }
    };
    
    

  return (
    <section id="menu" className="py-16 ">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <p className={cn("text-orange-500 font-medium mb-2", sofia.className)}>Food Menu</p>
          <h2 className="text-3xl font-bold ">Most Popular Items</h2>
        </div>

        <div className="flex flex-wrap justify-center  gap-2 md:gap-4 mb-10 w-full max-w-[90%] mx-auto md:max-w-none overflow-x-auto">
  <Button
    onClick={() => setActiveCategory("all")}
    className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors"
    variant={activeCategory === "all" ? "default" : "outline"}
  >
    All
  </Button>

  {categories.map((category) => (
    <Button
      key={category.id}
      onClick={() => setActiveCategory(category.id)}
      className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors"
      variant={activeCategory === category.id ? "default" : "outline"}
    >
      <span className={cn("text-xl transition-colors", activeCategory !== category.id ? "text-amber-500" : "")}>{category.icon}</span>
      {category.label}
    </Button>
  ))}
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
          
            <Card key={item.id}>
              <CardContent className="flex flex-col md:flex-row gap-y-4 gap-x-2 items-center w-full">

              <div className="">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              <div className="flex-1 flex-col flex justify-between gap-y-4 h-full">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-orange-500 font-bold">$ {item.price}</span>
                  
                </div>
                <Separator/>
                <p className=" text-sm text-muted-foreground">{item.description}</p>
                <div className="justify-end flex w-full">
                <Button onClick={()=> orderSubmit(item)} className="flex items-center gap-x-2" disabled={cartItems.some((menuItem) => menuItem.id === item.id)}>
                  Order Now <ShoppingCart/>
                </Button>
                </div>
           
              </div>
              </CardContent>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

