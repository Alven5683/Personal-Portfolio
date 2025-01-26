export default function Skill() {
    return (
      <section
      id="skill"
      className="py-12 bg-gray-100 text-gray-800 text-center px-8"
    >
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <div className="border-t-4 border-red-500 w-16 mx-auto mb-6"></div>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          As a React.js developer, I focus on building scalable, efficient, and visually
          appealing web applications. With a strong foundation in JavaScript and modern
          frameworks, I ensure seamless user experiences that bridge functionality and
          design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Skill 1 */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">React</span>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          {/* Skill 2 */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">HTML & CSS</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          {/* Skill 3 */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">JavaScript</span>
              <span className="text-sm font-medium">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          {/* Skill 4 */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">APIs & GraphQL</span>
              <span className="text-sm font-medium">70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>  
    );
  }
  