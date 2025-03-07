import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Facebook, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { cn, sofia } from "@/lib/utils";

const contactDetails = [
  { id: "address", icon: MapPin, text: "123 Street, New York, USA" },
  { id: "phone", icon: Phone, text: "+012 345 67890" },
  { id: "email", icon: Mail, text: "info@example.com" },
];

const menuLinks = [
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
  { id: "reservation", label: "Reservation" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms & Condition" },
];

const socialLinks = [
  { href: "#", icon: Twitter },
  { href: "#", icon: Facebook },
  { href: "#", icon: Youtube },
  { href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6 mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Section */}
          <div>
          <h3 className={cn("text-xl font-bold mb-6 relative inline-block", sofia.className)}>
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`} className="hover:text-orange-500 flex items-center">
                    <span className="mr-2">▸</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
      <div>
                <h3 className={cn("text-xl font-bold mb-6 relative inline-block", sofia.className)}>
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              {contactDetails.map(({ id, icon: Icon, text }) => (
                <li key={id} className="flex items-center">
                  <Icon className="text-orange-500 mr-3 h-5 w-5 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex mt-6 space-x-2">
              {socialLinks.map(({ href, icon: Icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600"
                >
                  <Icon className="h-4 w-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div>
          <h3 className={cn("text-xl font-bold mb-6 relative inline-block", sofia.className)}>
              Opening Hours
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500"></span>
            </h3>
            <div className="space-y-3">
              <p className="text-lg font-medium">Monday - Saturday</p>
              <p className="text-gray-400">09AM - 09PM</p>
              <p className="text-lg font-medium mt-4">Sunday</p>
              <p className="text-gray-400">10AM - 08PM</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
          <h3 className={cn("text-xl font-bold mb-6 relative inline-block", sofia.className)}>
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-orange-500"></span>
            </h3>
            <p className="mb-4">Subscribe to our newsletter for updates.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-l-none uppercase ">Sign Up</Button>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 All Rights Reserved by Your Company Name</p>
        </div>
      </div>
    </footer>
  );
}
