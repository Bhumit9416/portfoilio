import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Streamify",
      description:
        "A comprehensive streaming platform built with modern web technologies, featuring user authentication, video streaming capabilities, and real-time interactions for an enhanced viewing experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "WebRTC", "Socket.io"],
      github: "#",
      live: "#",
    },
    {
      title: "Rozzgari",
      description:
        "Developed a platform to connect individuals seeking work (laborers, housemaids, electricians, plumbers) with those needing services, contributing to employment and poverty reduction.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "HTML", "CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Medfolio",
      description:
        "Created a full-stack platform for managing and organizing medical records, allowing users to store, retrieve, and analyze medical data efficiently with advanced data processing capabilities.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "HTML", "CSS", "SQL", "XML"],
      github: "#",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
