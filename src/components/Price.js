export default function Price(){

    return(
        <section
                id="pricing"
                className="py-12 bg-gray-100 text-gray-800 text-center px-8"
              >
                <div className="max-w-12xl mx-auto bg-white p-10 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-bold mb-6">Pricing table</h2>
                  <div className="border-t-4 border-red-500 w-16 mx-auto mb-8"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Basic Plan */}
                    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm flex flex-col items-center">
                      <div className="mb-4">
                        <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                          <i className="fas fa-bolt"></i>
                        </div>
                      </div>
                      <span className="bg-red-100 text-red-500 text-sm font-medium px-3 py-1 rounded-full mb-4">
                        Basic
                      </span>
                      <h3 className="text-4xl font-bold mb-2">$14</h3>
                      <span className="text-sm text-gray-600">/mo</span>
                      <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        <li>Frontend Builder</li>
                        <li>Regular Support</li>
                        <li>1 Year of Updates</li>
                      </ul>
                      <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                        Get Started
                      </button>
                    </div>

                    {/* Professional Plan */}
                    <div className="bg-blue-600 text-white rounded-xl p-6 shadow-md flex flex-col items-center transform scale-105">
                      <div className="mb-4">
                        <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                          <i className="fas fa-fire"></i>
                        </div>
                      </div>
                      <span className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                        Professional
                      </span>
                      <h3 className="text-4xl font-bold mb-2">$41</h3>
                      <span className="text-sm">/mo</span>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li>Frontend Builder</li>
                        <li>Regular Support</li>
                        <li>2 Years of Updates</li>
                        <li>White Labeling</li>
                      </ul>
                      <button className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-100">
                        Get Started
                      </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm flex flex-col items-center">
                      <div className="mb-4">
                        <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                          <i className="fas fa-rocket"></i>
                        </div>
                      </div>
                      <span className="bg-red-100 text-red-500 text-sm font-medium px-3 py-1 rounded-full mb-4">
                        Premium
                      </span>
                      <h3 className="text-4xl font-bold mb-2">$99</h3>
                      <span className="text-sm text-gray-600">/mo</span>
                      <ul className="mt-4 space-y-2 text-sm text-gray-600">
                        <li>Frontend Builder</li>
                        <li>Regular Support</li>
                        <li>3 Years of Updates</li>
                      </ul>
                      <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </section>
    )
}