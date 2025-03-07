"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn, sofia } from "@/lib/utils"
import { Textarea } from "./ui/textarea"
import { Send } from "lucide-react"


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  

  return (
    <section id="contact" className="py-10">
          <div className="text-center mb-12">
          <p className={cn("text-orange-500 font-medium mb-2", sofia.className)}>Contact Us</p>
          <h2 className="text-3xl font-bold">Contact For Any Query</h2>
        </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={() => {}} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange} // ✅ Now updates state
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange} // ✅ Fixed
              required
            />
             <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange} // ✅ Fixed
              required
            />
          </div>
        
          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange} // ✅ Fixed
              required
            />
          </div>
          <div>
          <Textarea
            className="min-h-32"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
               required
            />

          </div>
          <Button
            type="submit"
            className="w-full font-medium rounded-full"
          >
            Send Message <Send/>
          </Button>
        </form>

        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316249594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1647427624573!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
