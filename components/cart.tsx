'use client'
import { ShoppingCart, Trash2 } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { useCart } from "@/hooks/store"
import Image from "next/image"
import { Button } from "./ui/button"
import { toast } from "sonner"
import { useState } from "react"
import { MenuItem } from "@/constant/data"

export const Cart = () => {

const { cartItems,  removeItem, updateQuantity } = useCart();



const remove = (id:number) => {
    removeItem(id)
    toast.success("Item remove from cart")
}
const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  


    return (
        <Sheet>
<SheetTrigger className="fixed bottom-6 right-6 p-4 bg-gray-800 rounded-full shadow-lg cursor-pointer flex items-center justify-center hover:bg-gray-700 transition ">
  <ShoppingCart className="w-6 h-6 stroke-primary " />

  {/* Badge for cart count */}
  <div className="absolute -top-1 -right-1 bg-primary text-white text-xs font-semibold flex items-center justify-center w-5 h-5 rounded-full">
    {cartItems.length}
  </div>
</SheetTrigger>

  {cartItems.length > 0 ? (
    <SheetContent className="space-y-4">
        <SheetHeader>
      <SheetTitle className="sr-only">Cart</SheetTitle>
    </SheetHeader>
        {cartItems.map((item, index)=> (
            <div className="flex flex-col items-center px-4  gap-y-2" key={index}>
                <div className="flex w-full items-center justify-evenly gap-x-4">
                    <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="object-cover"
                    />
                    <div className="flex flex-col gap-y-2">
                    <p className="text-sm">{item.name}</p>
                    $ {item.price} x {item.quantity} = $ {item.price * item.quantity}

                <div className="flex items-center gap-2">
                  <Button onClick={() => updateQuantity(item.id, item.quantity - 1)} variant={"ghost"} size={"icon"}>-</Button>
                  <p>{item.quantity}</p>
                  <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} variant={"ghost"} size={"icon"}>+</Button>
                </div>

                    </div>
                    <Button variant={"ghost"} size={"icon"} onClick={()=> remove(item.id)}><Trash2/></Button>
                </div>
            </div>
        ))}
  
   <SheetFooter >
    <div className="flex justify-evenly items-center gap-x-4">
        <p className="text-semibold">Total</p>
        =
        <p>$ {totalPrice}</p>
    </div>
    <Button className="w-full mt-4">Checkout</Button>
   </SheetFooter>

  </SheetContent>) :  (
    <SheetContent>
    <SheetHeader className="flex items-center justify-center h-full w-full">
      <SheetTitle>    <p>No Items available</p></SheetTitle>
    </SheetHeader>



  </SheetContent>
)}

</Sheet>

    )
}