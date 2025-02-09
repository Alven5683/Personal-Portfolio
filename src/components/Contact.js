export default function Contact() {
    return (
      <section className="py-12 bg-gray-100 text-gray-800 px-8">
        <div className="max-w-12xl bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in touch</h2>
          <div className="border-t-4 border-red-500 w-16 mx-auto mb-8"></div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-red-500">
                  <i className="fas fa-phone text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-600">9016244785</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-red-500">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold">Email address</h4>
                  <p className="text-gray-600">Akshaysankhat@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-red-500">
                  <i className="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-600">
                    Ahmedabad
                  </p>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                <i className="fas fa-paper-plane mr-2"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  