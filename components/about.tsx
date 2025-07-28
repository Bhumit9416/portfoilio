export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Passionate Developer & Problem Solver</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a B.Tech student at Maharaja Agrasen Institute of Technology, specializing in Artificial Intelligence
              and Machine Learning with a CGPA of 7.79/10.0. My journey in technology is driven by a passion for
              creating innovative solutions and contributing to meaningful projects.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With hands-on experience in full-stack development using the MERN stack, I've worked on projects ranging
              from employment platforms to medical record management systems. I'm also actively involved in open-source
              contributions and have mentored fellow developers in various programs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Experiences</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium">B.Tech - AI & Machine Learning</h5>
                  <p className="text-blue-100">Maharaja Agrasen Institute of Technology</p>
                  <p className="text-blue-100 text-sm">2022 - 2026 | CGPA: 7.79/10.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
