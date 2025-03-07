"use client"


import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes" // Import your icon library
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button"


export const  ModeToggle = () => {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
    // Prevent SSR theme mismatch
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null; 

    return (
      <div className="relative flex items-center justify-center">
      <Button
        onClick={() => {
          if (theme === "light") setTheme("dark");
          else if (theme === "dark") setTheme("light");
        }}
        variant={"ghost"}
        className="relative p-0 hover:bg-transparent"
        size={"icon"}
      >
        <Sun
          className={`absolute transition-all size-6 stroke-primary ${theme === 'light' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
        />
        <Moon
          className={`absolute transition-all size-6 stroke-primary ${theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
    
    
  
  
    )


}




