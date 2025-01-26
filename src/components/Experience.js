export default function Experience() {
  const experiences = [
    {
      year: "[2025 - Present] - Web3workstore",
      title: "React & Next.js Development",
      description:
        "Responsible for developing and maintaining dynamic, responsive web applications using React and Next.js. Focused on optimizing user experience, improving performance, and ensuring scalability for growing web platforms.",
    },
    
    {
      year: "[2022 - 2024] - Codal India",
      title: "React & Next.js Development",
      description:
        "Building dynamic, high-performance web applications with React and Next.js to deliver seamless user experiences and fast load times.",
    }    
  ];

  return (
    <section id="experience" className="py-12 bg-gray-100 text-gray-800 px-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6">
          Experience
          <span className="block w-16 h-1 bg-red-500 mt-2 rounded"></span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-red-500 pl-6 space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col">
              {/* Timeline Dot */}
              <div className="absolute -left-3 w-6 h-6 bg-white border-2 border-red-500 rounded-full"></div>
              {/* Year */}
              <p className="text-sm text-gray-500">{experience.year}</p>
              {/* Title */}
              <h3 className="text-xl font-bold">{experience.title}</h3>
              {/* Description */}
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
