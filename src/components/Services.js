export default function Services() {
  return (
    <section
      id="services"
      className="py-12 bg-gray-100 text-gray-800 text-center px-8"
    >
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Services</h2>
        <div className="border-t-4 border-red-500 w-16 mx-auto mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:shadow-purple-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Development</h3>
            <p className="text-sm text-gray-600">
              Custom web apps to fit your business needs.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:shadow-purple-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Design</h3>
            <p className="text-sm text-gray-600">
              Beautiful, user-friendly interfaces.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:shadow-purple-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Advertising</h3>
            <p className="text-sm text-gray-600">
              Reach a larger audience with effective strategies.
            </p>
          </div>
          {/* Service 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:shadow-purple-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">SEO</h3>
            <p className="text-sm text-gray-600">
              Boost your rankings and drive organic traffic.
            </p>
          </div>
          {/* Service 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:shadow-purple-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-pencil-alt"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Copywriting</h3>
            <p className="text-sm text-gray-600">
              High-quality content that speaks to your audience.
            </p>
          </div>
          {/* Service 6 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition hover:shadow-purple-500">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-comments"></i>
            </div>
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <p className="text-sm text-gray-600">
              Reliable assistance whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
