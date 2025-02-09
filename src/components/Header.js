"use client";

export default function Header() {
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "resume", title: "Resume" },
    { id: "blog", title: "Blog" },
    { id: "contact", title: "Contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="h-1"></div> {/* Fixed section size */}
      <div className="p-1"></div> {/* Added padding */}

      <header className="fixed top-4 left-0 w-full bg-blue-700 text-white shadow-lg z-50 rounded-l-[20px] rounded-r-[20px]">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#" className="hover:text-orange-500">
              <i className="fas fa-laptop-code mr-2"></i>
              Akshay Portfolio
            </a>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <li
                  key={section.id}
                  className="cursor-pointer hover:text-orange-500 font-medium"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>
    </>
  );
}
