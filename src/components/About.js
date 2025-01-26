function About() {
    return (
      <section
      id="about"
      className="h-auto py-12 bg-gray-100 text-gray-800 text-center px-8"
    >
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>
        <div className="border-t-4 border-red-500 w-16 mx-auto mb-6"></div>
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          {/* <img
            src="https://web3workstore.com/assets/images/leader-img.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0"
          /> */}
          {/* Info Section */}
          <div className="md:ml-6 text-left">
            <h3 className="text-2xl font-semibold">Hello,</h3>
            <p className="mt-2 text-sm text-gray-600">
              I am Akshay Sankhat, a React Developer with 2 years of hands-on experience in building dynamic and responsive web applications. I specialize in creating seamless user experiences using React.js and its ecosystem, including Redux, React Router, and Hooks. With a solid understanding of front-end development, I am passionate about writing clean, efficient code and collaborating on team projects to deliver high-quality web solutions.
            </p>

            <div className="mt-4 grid pt-10 grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Name:</strong> Akshay Sankhat
              </div>
              <div>
                <strong>Location:</strong> Ahmedadbad, India
              </div>
              <div>
                <strong>Birthday:</strong> 12 March, 1998
              </div>
              <div>
                <strong>Email:</strong> Akshaysankhat@gmail.com
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                <i className="fas fa-download"></i> Download CV
              </button>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                <i className="fas fa-envelope"></i> Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  
  export default About;
  