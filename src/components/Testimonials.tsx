export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12 bg-gray-100 text-gray-800 text-center px-8"
    >
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="border-t-4 border-red-500 w-16 mx-auto mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left">
            <p className="text-gray-600 mb-4">
              I enjoy working with the theme and learn so much. You guys make
              the process fun and interesting. Good luck!
            </p>
            <div className="flex items-center">
              {/* <img
                src="https://via.placeholder.com/50"
                alt="Jane Doe"
                className="w-12 h-12 rounded-full mr-4"
              /> */}
              <div>
                <h3 className="font-bold">Jane Doe</h3>
                <p className="text-sm text-gray-500">Themeforest Customer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-xl shadow-md p-6 text-left">
            <p className="text-gray-600 mb-4">
              I enjoy working with the theme and learn so much. You guys make
              the process fun and interesting. Good luck!
            </p>
            <div className="flex items-center">
              {/* <img
                src="https://via.placeholder.com/50"
                alt="Helen Doe"
                className="w-12 h-12 rounded-full mr-4"
              /> */}
              <div>
                <h3 className="font-bold">Helen Doe</h3>
                <p className="text-sm text-gray-500">Themeforest Customer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center space-x-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
