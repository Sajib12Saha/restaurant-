"use client";

import { useState } from "react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, X } from "lucide-react";
import { cn, sofia } from "@/lib/utils";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "1",
    request: "",
  });

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, people: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="px-2" id="book-table">
      <div className="flex flex-col md:flex-row">
        {/* Video Section */}
        <div className="md:w-1/2 relative">
          <div className="relative h-full w-full">
            {isVideoPlaying ? (
              <div className="relative w-full h-full">
                <iframe
                  className="w-full h-full aspect-video"
                  src="/resturent/resturent"
                  title="Restaurant Video"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 bg-gray-800 bg-opacity-60 rounded-full p-2 text-white"
                >
                  <X className="size-6" />
                </button>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src="/resturent/res4.jpg"
                  alt="Restaurant atmosphere"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                  <Button
                    size="icon"
                    onClick={() => setIsVideoPlaying(true)}
                    className="rounded-full size-14 flex items-center justify-center"
                  >
                    <Play className="size-8" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Booking Form */}
        <div className="md:w-1/2 bg-navy-900 p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <p className={cn("text-orange-500 font-medium mb-2", sofia.className)}>Reservation</p>
              <h2 className="text-3xl font-bold">Book A Table Online</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <Input type="text" name="date" placeholder="Date & Time" value={formData.date} onChange={handleChange} required />

              <Select value={formData.people} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="No. of People" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">People: 1</SelectItem>
                  <SelectItem value="2">People: 2</SelectItem>
                  <SelectItem value="3">People: 3</SelectItem>
                  <SelectItem value="4">People: 4</SelectItem>
                  <SelectItem value="5">People: 5</SelectItem>
                </SelectContent>
              </Select>

              <Textarea name="request" placeholder="Special Request" value={formData.request} onChange={handleChange} className="min-h-[100px]" />

              <Button type="submit" className="w-full font-medium py-3 uppercase">
                Book Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
