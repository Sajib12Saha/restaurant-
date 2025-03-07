export interface MenuItem {
    id: number
    name: string
    description: string
    price: number
    image: string
    quantity:number
    category: "breakfast" | "lunch" | "dinner"
  }
  

export const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Delicious Pizza",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 14,
      quantity:1,
      image: "/items/item3.jpg",
      category: "breakfast",
    },
    {
      id: 2,
      name: "Delicious Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 2,
      quantity:1,
      image: "/items/item4.jpg",
      category: "breakfast",
    },
    {
      id: 3,
      name: "Delicious Pizza",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 5,
      quantity:1,
      image: "/items/item5.jpg",
      category: "breakfast",
    },
    {
      id: 4,
      name: "Delicious Pizza",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 4,
      quantity:1,
      image: "/items/item.jpg",
      category: "breakfast",
    },
    {
      id: 5,
      name: "French Fries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 8,
      quantity:1,
      image: "/items/item2.jpg",
      category: "breakfast",
    },
    {
      id: 6,
      name: "Delicious Pizza",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 6,
      quantity:1,
      image: "/items/item5.jpg",
      category: "breakfast",
    },
    {
      id: 7,
      name: "Tasty Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 2,
      quantity:1,
      image: "/items/item3.jpg",
      category: "dinner",
    },
    {
      id: 8,
      name: "Tasty Burger",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 4,
      quantity:1,
      image: "/items/item4.jpg",
      category: "lunch",
    },
    {
      id: 9,
      name: "Delicious Pasta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu in pretium.",
      price: 4,
      quantity:1,
      image: "/items/item5.jpg",
      category: "dinner",
    },
  ]

  export const categories = [
    { id: "all", name: "All" },
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
    { id: "dinner", name: "Dinner" },
    
  ]
  

  export const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#service", label: "Service" },
    { href: "#menu", label: "Menu" },
    { href: "#pages", label: "Pages" },
    { href: "#contact", label: "Contact" },
  ];

  export const testimonials = [
    {
      id: 1,
      name: "Client Name",
      role: "Profession",
      content: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: "/people/person.jpg",
    },
    {
      id: 2,
      name: "Client Name",
      role: "Profession",
      content: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: "/people/person2.jpg",
      highlight: true,
    },
    {
      id: 3,
      name: "Client Name",
      role: "Profession",
      content: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: "/people/person3.jpg",
    },
    {
      id: 4,
      name: "Client Name",
      role: "Profession",
      content: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: "/people/person4.jpg",
    },
  ]
  