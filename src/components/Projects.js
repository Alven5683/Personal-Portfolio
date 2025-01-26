function Projects() {
    const projects = [
      { title: 'Countdown Timer', description: 'A timer built with JavaScript.', img: '/images/project1.jpg' },
      { title: 'Weather App', description: 'Displays weather using an API.', img: '/images/project1.jpg' },
    ];
  
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                {/* <img src={project.img} alt={project.title} className="w-full h-48 object-cover" /> */}
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;
  