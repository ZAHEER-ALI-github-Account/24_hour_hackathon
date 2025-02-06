"use client";
import Image, { StaticImageData } from "next/image";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useState, useEffect } from "react";

import blog1 from "@/app/images/blog1.jpg";
import blog2 from "@/app/images/blog2.jpg";
import blog3 from "@/app/images/blog3.jpg";

interface BlogPost {
  id: number;
  title: string;
  image: StaticImageData;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Choose the Perfect Sofa for Your Living Room",
    image: blog1,
    excerpt: "A guide to selecting the best sofa based on size, style, and comfort.",
    date: "Jan 25, 2025",
    category: "Buying Guide",
  },
  {
    id: 2,
    title: "5 Tips to Maintain Your Luxury Chairs",
    image: blog2,
    excerpt: "Keep your chairs looking brand new with these easy maintenance tips.",
    date: "Feb 5, 2025",
    category: "Care & Maintenance",
  },
  {
    id: 3,
    title: "Top 2025 Sofa Trends You Need to Know",
    image: blog3,
    excerpt: "Check out the latest styles and designs in sofas for 2025.",
    date: "Feb 10, 2025",
    category: "Trends",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredPosts(blogPosts.filter((post) => post.category === selectedCategory));
    } else {
      setFilteredPosts(blogPosts);
    }
  }, [selectedCategory]);

  return (
    <>
    <Navbar/>
    <div className="px-6 md:px-16 py-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Comforty <span className="text-orange-500">Blog</span></h1>
      
      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Buying Guide", "Care & Maintenance", "Trends"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === "All" ? null : category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              selectedCategory === category || (category === "All" && !selectedCategory)
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{post.date} • {post.category}</p>
              <p className="text-gray-700 mt-3">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
