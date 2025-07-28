import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Defence Research and Development Organisation (DRDO)",
      location: "Delhi, India",
      duration: "Jun 2025 – July 2025",
      description: [
        "Developed a secure and responsive dashboard using MongoDB, Express.js, React.js, and Node.js for Directed Energy Weapons (DEW) research data management.",
        "Technologies used: React.js, Node.js, MongoDB, Express.js, HTML, CSS, and GitHub for version control.",
      ],
    },
    {
      title: "Web Development Intern",
      company: "OctaNet",
      location: "Delhi, India",
      duration: "Aug 2024 – Sep 2024",
      description: [
        "Worked on Project Rozzgari, a platform designed to connect people in need of work (laborers, housemaids, electricians, plumbers) with those seeking services.",
        "Technologies used: React.js, Node.js, MongoDB, Express.js, HTML, CSS, and GitHub for version control.",
      ],
    },
    {
      title: "Mentor",
      company: "GirlScript Summer of Code (GSSoC)",
      location: "Delhi, India",
      duration: "Sep 2024 - Current",
      description: [
        "Selected as a mentor to guide and support participants in the GSSoC program.",
        "Helped students in open-source contributions and project development.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
