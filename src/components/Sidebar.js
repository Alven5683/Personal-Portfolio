export default function Sidebar() {
  const sections = [
    { id: "home", title: "Home", icon: "fa-home" },
    { id: "about", title: "About", icon: "fa-user" },
    { id: "services", title: "Services", icon: "fa-lightbulb" },
    { id: "resume", title: "Resume", icon: "fa-graduation-cap" },
    { id: "works", title: "Works", icon: "fa-th" },
    { id: "blog", title: "Blog", icon: "fa-pen" },
    { id: "contact", title: "Contact", icon: "fa-phone" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-64 bg-blue-700 text-white fixed h-full flex flex-col items-center py-8 rounded-r-3xl shadow-lg">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        {/* <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4 border-4 border-white"
        /> */}
        <h2 className="text-2xl font-bold">Bako Doe</h2>
        <p className="text-sm text-gray-300">Web Developer</p>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-6 w-full px-8">
        {sections.map((section) => (
          <li
            key={section.id}
            className="cursor-pointer text-sm font-medium hover:text-gray-300 flex items-center space-x-4"
            onClick={() => scrollToSection(section.id)}
          >
            <i className={`fas ${section.icon} text-lg`}></i>
            <span>{section.title}</span>
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <div className="mt-auto flex justify-center space-x-4">
        <a href="#" className="text-white text-2xl">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-white text-2xl">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-white text-2xl">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-white text-2xl">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      {/* Footer */}
      <p className="mt-4 text-sm text-gray-400">&copy; 2025 Bako Template</p>
    </nav>
  );
}
