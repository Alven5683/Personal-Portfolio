export default function Statistics() {
    return (
      <section
      id="statistics"
      className="py-12 bg-gray-100 text-gray-800 px-8"
    >
      <div className="max-w-12xl mx-auto p-10 bg-blue-700 rounded-xl shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-red-500 p-4 rounded-full mb-4">
            <i className="fas fa-thumbs-up text-white text-2xl"></i>
          </div>
          <h3 className="text-4xl font-bold">7</h3>
          <p className="text-sm mt-2">Projects completed</p>
        </div>
        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-red-500 p-4 rounded-full mb-4">
            <i className="fas fa-coffee text-white text-2xl"></i>
          </div>
          <h3 className="text-4xl font-bold">65</h3>
          <p className="text-sm mt-2">Cup of coffee</p>
        </div>
        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-red-500 p-4 rounded-full mb-4">
            <i className="fas fa-smile text-white text-2xl"></i>
          </div>
          <h3 className="text-4xl font-bold">50+</h3>
          <p className="text-sm mt-2">Happy customers</p>
        </div>
        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <div className="bg-red-500 p-4 rounded-full mb-4">
            <i className="fas fa-trophy text-white text-2xl"></i>
          </div>
          <h3 className="text-4xl font-bold">29</h3>
          <p className="text-sm mt-2">Awards won</p>
        </div>
      </div>
    </section>
    );
  }
  