import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const sections = [
  {
    title: "Education",
    icon: "🎓",
    items: [
      {
        title: "MSc IT Master Degree",
        institution: "Harvard University, Cambridge, MA, United States",
        description:
          "Harvard University is an educational institution that offers graduate, professional, and research programs in the fields of and public health.",
        year: "2010 - 2012",
      },
      {
        title: "BCA college complete course",
        institution: "XYZ University, India",
        description: "This course covered software development, database management, and computer networking fundamentals.",
        year: "2007 - 2010",
      },
      {
        title: "High / Higher secondary school",
        institution: "ABC High School, India",
        description: "Completed higher secondary education with a focus on science and mathematics.",
        year: "1999 - 2007",
      },
    ],
  },
  {
    title: "Experience",
    icon: "💼",
    items: [
      {
        title: "ABC Themes - Web Design IT Company",
        description: "Worked on creating responsive and interactive web designs for various clients.",
        year: "2020 - 2021",
      },
      {
        title: "DEF Themes - Creative full stack web design & development",
        description: "Led a team to develop full-stack applications with modern frameworks and technologies.",
        year: "2016 - 2019",
      },
      {
        title: "GHI Themes - Web & App IT Company",
        description: "Developed web and mobile applications, focusing on UI/UX and backend optimization.",
        year: "2013 - 2015",
      },
    ],
  },
];

export default function EducationExperience() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="h-auto py-12 bg-gray-100 text-gray-800 text-left px-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Education & Experience</h2>
        <p className="text-center text-gray-600 mb-8">
          We craft digital, graphic, and dimensional thinking to create category-leading brand experiences that have meaning.
        </p>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8 border-b pb-4">
            <div className="flex items-center gap-2 text-xl font-semibold mb-4">
              <span className="text-2xl">{section.icon}</span>
              {section.title}
            </div>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-4">
                <button
                  className="flex items-center justify-between w-full text-left text-lg font-medium text-blue-600"
                  onClick={() => toggleExpand(`${sectionIndex}-${itemIndex}`)}
                >
                  {item.title}
                  {expanded[`${sectionIndex}-${itemIndex}`] ? <FaMinus /> : <FaPlus />}
                </button>
                {expanded[`${sectionIndex}-${itemIndex}`] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-gray-600"
                  >
                    {item.institution && <div className="font-semibold">{item.institution}</div>}
                    {item.description && <p>{item.description}</p>}
                  </motion.div>
                )}
                <div className="text-sm text-gray-500">{item.year}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
