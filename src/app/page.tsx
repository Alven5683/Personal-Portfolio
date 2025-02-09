"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import Testimonials from "@/components/Testimonials";
import Partner from "@/components/Partner";
import Post from "@/components/Post";
import Contact from "@/components/Contact";
import Price from "@/components/Price";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Skill from "@/components/Skill";
import About from "@/components/About";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "portfolio", title: "Portfolio" },
    { id: "blog", title: "Blog" },
    { id: "contact", title: "Contact" },
  ];

  // Scroll to section when clicking a link
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // **Refined Intersection Observer**
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <meta name="description" content="A professional portfolio website" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>

      <div className="h-screen bg-gray-100">
        {/* Sidebar */}
        <nav className="hidden lg:flex lg:w-1/5 w-full h-[600px] bg-blue-700 text-white fixed left-[50px] flex flex-col items-center py-8 px-4 rounded-3xl shadow-lg">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-10">
            <img
              src="https://web3workstore.com/assets/images/leader-img.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full mb-4 border-4 border-white"
            />
            <h2 className="text-xl font-bold">Akshay Sankhat</h2>
            <p className="text-sm text-gray-300">Web Developer</p>
          </div>
          {/* Navigation Links */}
          <ul className="space-y-4 w-full">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`cursor-pointer text-base font-small pl-12 hover:text-orange-300 ${
                  activeSection === section.id ? "text-orange-500 font-bold" : ""
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="mt-auto flex pt-8 justify-center space-x-4">
            <a href="#" className="text-white text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          {/* Footer */}
          <p className="mt-4 text-sm text-white">&copy; 2025 Web3wrokstore</p>
        </nav>
        {/* Right Sidebar */}

        {/* Main Content */}
        <main className="lg:w-[70%] w-full pl-5 p-2 lg:ml-[30%]">
          {/* Home Section */}
          <section
            id="home"
            className="mb-12 bg-cover bg-center  justify-center"
          >
            <div className="max-w-10xl mx-auto bg-blue-700 bg-opacity-80 pt-40 pb-40 p-20 rounded-xl shadow-lg">
              <h1 className="text-5xl font-extrabold mb-4">
                I&apos;m <span className="text-white">Akshay Sankhat</span>
              </h1>
              <p className="text-lg text-white leading-relaxed">
                <span className="text-4xl font-serif">A</span> passionate web developer specializing in building interactive, dynamic, and scalable web applications using React.js and modern JavaScript frameworks.  
                I focus on crafting seamless user experiences, optimizing performance, and developing robust solutions that bring ideas to life.
              </p>

              <div className="mt-6 flex justify-center space-x-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium shadow-md hover:bg-orange-600">
                  <i className="fas fa-folder-open"></i> View Portfolio
                </button>
                <button className="px-6 py-3 bg-orange-500 border border-gray-300 rounded-lg text-gray-700 font-medium shadow-md hover:bg-gray-100">
                  <i className="fas fa-envelope"></i> Hire Me
                </button>
              </div>
            </div>
          </section>
          <About />
          <Skill />
          <Statistics />
          <Services />
          <Experience />
          <Portfolio />
          <Price />
          <Testimonials />
          <Partner />
          <Post />
          <Contact />
        </main>
      </div>
    </>
  );
}
