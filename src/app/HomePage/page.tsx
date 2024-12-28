"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
      image: "/images/1.avif",
      title: "Welcome to Our Platform",
      description: "Discover innovative solutions for your business needs",
    },
    {
      image: "/images/2.avif",
      title: "Transform Your Business",
      description: "Leverage our tools to grow your enterprise",
    },
    {
      image: "/images/3.avif",
      title: "Stay Ahead of Competition",
      description: "Use cutting-edge technology to lead your industry",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const router = useRouter();
  const handleDemoClick = () => {
    router.push("/signup");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <span className="text-xl font-bold">Logo</span>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden items-center space-x-4 md:flex">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Carousel Section */}
      <div className="relative h-[498px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slides.at(currentSlide ?? 0)?.image ?? ""}
            alt={slides.at(currentSlide ?? 0)?.title ?? ""}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="flex h-full items-center justify-center">
              <div className="px-4 text-center text-white">
                <h2 className="mb-4 text-4xl font-bold">
                  {slides.at(currentSlide ?? 0)?.title ?? ""}
                </h2>
                <p className="mb-8 text-xl">
                  {slides.at(currentSlide ?? 0)?.description ?? ""}
                </p>
                <div className="space-x-4">
                  <button
                    className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                    onClick={handleDemoClick}
                  >
                    Try Demo
                  </button>
                  <button className="rounded-lg bg-white px-6 py-2 text-blue-600 hover:bg-gray-100">
                    Who We Are
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl text-blue-600">1</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600">
                Leading the industry with cutting-edge solutions
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl text-blue-600">2</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Reliability</h3>
              <p className="text-gray-600">
                Trusted by thousands of satisfied customers
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl text-blue-600">3</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Support</h3>
              <p className="text-gray-600">
                24/7 dedicated customer support team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Latest News</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-lg bg-white shadow-md"
              >
                <img
                  src={`/api/placeholder/400/200`}
                  alt={`News ${item}`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">
                    Latest Update {item}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Stay updated with our latest developments and industry
                    insights.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">About Us</h3>
              <p className="text-gray-400">
                Leading provider of innovative solutions for businesses
                worldwide.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Business Street</li>
                <li>City, Country</li>
                <li>contact@example.com</li>
                <li>+1 234 567 890</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
