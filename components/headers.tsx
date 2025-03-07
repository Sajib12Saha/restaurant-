"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/constant/data"
import { ModeToggle } from "./mode-toogle"



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50  mx-auto max-w-7xl border-b bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center">
            <span className="text-orange-500 text-2xl font-bold">
              <span className="inline-block mr-2">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 14.25C8.5 14.25 9.75 12.5 12 12.5C14.25 12.5 15.5 14.25 15.5 14.25"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 4.75C8.5 3.7835 9.2835 3 10.25 3H13.75C14.7165 3 15.5 3.7835 15.5 4.75V19.25C15.5 20.2165 14.7165 21 13.75 21H10.25C9.2835 21 8.5 20.2165 8.5 19.25V4.75Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 6.5H5.5C4.94772 6.5 4.5 6.94772 4.5 7.5V16.5C4.5 17.0523 4.94772 17.5 5.5 17.5H8.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 6.5H18.5C19.0523 6.5 19.5 6.94772 19.5 7.5V16.5C19.5 17.0523 19.0523 17.5 18.5 17.5H15.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Restoran
            </span>
          </Link>


          <nav className="hidden md:flex items-center space-x-6 ">
            {
              navLinks.map((link, index)=> (
                <Link href={link.href} className=" transition-colors uppercase text-sm font-medium "
                key={index}
                >
                {link.label}
              </Link>
              ))
            }
        
          </nav>

          <div className="flex items-center gap-x-4">
            <ModeToggle/>
              
            <Search className="stroke-primary"/>
            <Link href={'#book-table'}>
            <Button className=" hidden md:flex font-medium cursor-pointer uppercase text-sm bg-primary">
              Book A Table
            </Button>
            </Link>
          </div>

          <Button className="md:hidden" variant={"ghost"} size={"icon"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={34} className="stroke-white"/> : <Menu size={34} className="stroke-white"/>}
          </Button>

        </div>
      </div>
{/* 
      Mobile menu */}

      {isMenuOpen && (
        <div className="md:hidden bg-navy-900 transition-all duration-300 delay-500 ease-in-out">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index)=> (
                      <Link
                      href={link.href}
                      className="text-white hover:text-orange-500 transition-colors uppercase text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      key={index}
                    >
                      {link.label}
                    </Link>
              ))}
          
           <Link href={'#book-table'}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 uppercase text-sm w-full" onClick={()=> setIsMenuOpen(false)}>
                Book A Table
              </Button>
                </Link>

            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

