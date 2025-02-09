export default function RecentPosts() {
    return (
      <section className="py-12 bg-gray-100 text-gray-800 text-center px-8">
        <div className="max-w-12xl mx-auto bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
          <div className="border-t-4 border-red-500 w-16 mx-auto mb-8"></div>
  
          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post 1 */}
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              {/* <img
                src="https://via.placeholder.com/400"
                alt="Post Image"
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <span className="text-sm bg-red-100 text-red-500 px-3 py-1 rounded-full">
                  Thoughts
                </span>
                <h3 className="text-lg font-bold mt-4">
                  The Truth About Design In 3 Minutes
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  13 March, 2021 <span className="mx-2">•</span> Bako Doe
                </p>
              </div>
            </div>
  
            {/* Post 2 */}
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              {/* <img
                src="https://via.placeholder.com/400"
                alt="Post Image"
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <span className="text-sm bg-red-100 text-red-500 px-3 py-1 rounded-full">
                  Blog
                </span>
                <h3 className="text-lg font-bold mt-4">
                  The Ugly Truth About Design
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  13 March, 2021 <span className="mx-2">•</span> Bako Doe
                </p>
              </div>
            </div>
  
            {/* Post 3 */}
            <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden">
              {/* <img
                src="https://via.placeholder.com/400"
                alt="Post Image"
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-6">
                <span className="text-sm bg-red-100 text-red-500 px-3 py-1 rounded-full">
                  Thoughts
                </span>
                <h3 className="text-lg font-bold mt-4">
                  How To Become Better With UI Design
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  13 March, 2021 <span className="mx-2">•</span> Bako Doe
                </p>
              </div>
            </div>
          </div>
  
          {/* Show All Blogs Button */}
          <div className="mt-8">
            <button className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600">
              Show All Blogs
            </button>
          </div>
        </div>
      </section>
    );
  }
  