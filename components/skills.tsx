export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "TailwindCSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "GraphQL", "Firebase", "Appwrite"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Postman", "VSCode", "Data Structures & Algorithms"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Achievements & Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">
                  Engaged in multiple startup funding and mentorship competitions, securing a position in the top 20
                  teams from over 2000 applications
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">
                  Competed in Accenture Challenge, Smart India Hackathon (SIH), Walmart Sparkathon, and Code Cubicle
                  Hackathons
                </span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">
                  Participated in GSoC, GSSoC, SWoC, and Hacktoberfest, contributing to community-driven projects and
                  enhancing coding skills
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">
                  Proficient in Data Structures and Algorithms with a focus on C++ and problem-solving
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
