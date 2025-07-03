export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              MICHAEL PLYMIRE
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-cyan-400 transition-all duration-300 font-semibold hover:scale-110">ABOUT</a>
              <a href="#experience" className="text-white hover:text-purple-400 transition-all duration-300 font-semibold hover:scale-110">EXPERIENCE</a>
              <a href="#projects" className="text-white hover:text-pink-400 transition-all duration-300 font-semibold hover:scale-110">PROJECTS</a>
              <a href="#contact" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold hover:scale-110">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-12">
              {/* Futuristic Avatar */}
              <div className="w-40 h-40 mx-auto mb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-black text-black">MP</span>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 animate-ping"></div>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none">
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  MICHAEL
                </span>
                <span className="block text-white">PLYMIRE</span>
              </h1>
              
              <div className="text-2xl md:text-4xl font-bold text-cyan-400 mb-8 uppercase tracking-wider">
                <span className="inline-block animate-bounce">FULL</span>{" "}
                <span className="inline-block animate-bounce animation-delay-200">STACK</span>{" "}
                <span className="inline-block animate-bounce animation-delay-400">DEVELOPER</span>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Crafting <span className="text-purple-400 font-bold">next-generation</span> digital experiences with 
                <span className="text-cyan-400 font-bold"> cutting-edge</span> technology
              </p>
              
              <div className="flex gap-6 justify-center flex-wrap">
                <button className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-none border-4 border-transparent hover:border-cyan-400 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider">
                  <span className="relative z-10">VIEW PROJECTS</span>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                <button className="group relative px-12 py-4 bg-transparent text-white font-bold text-lg border-4 border-white hover:border-pink-400 hover:text-pink-400 transition-all duration-300 uppercase tracking-wider hover:bg-pink-400/10">
                  DOWNLOAD CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black border-t-4 border-cyan-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 uppercase tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">ABOUT</span>{" "}
            <span className="text-white">ME</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                I&apos;m a <span className="text-cyan-400 font-bold">passionate software engineer</span> who lives and breathes 
                <span className="text-purple-400 font-bold"> cutting-edge technology</span>. I transform complex problems into 
                elegant, scalable solutions that push the boundaries of what&apos;s possible.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                When I&apos;m not architecting the future, you&apos;ll find me exploring emerging technologies, 
                contributing to open source, and sharing knowledge with the global developer community.
              </p>
              
              {/* Skills with neon effect */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                {[
                  { skill: 'React', color: 'cyan' },
                  { skill: 'Next.js', color: 'purple' },
                  { skill: 'TypeScript', color: 'pink' },
                  { skill: 'Node.js', color: 'yellow' },
                  { skill: 'Python', color: 'green' },
                  { skill: 'AWS', color: 'orange' }
                ].map(({ skill, color }) => (
                  <div key={skill} className={`group relative p-4 bg-black border-2 border-${color}-500 hover:bg-${color}-500/10 transition-all duration-300 cursor-pointer`}>
                    <div className={`absolute inset-0 bg-${color}-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <span className={`relative z-10 text-${color}-400 font-bold text-lg uppercase tracking-wider group-hover:text-white transition-colors duration-300`}>
                      {skill}
                    </span>
                    <div className={`absolute -inset-1 bg-gradient-to-r from-${color}-400 to-${color}-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Futuristic graphic */}
            <div className="relative">
              <div className="w-full h-96 relative overflow-hidden bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-4 border-cyan-500/30">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-pulse">⚡</div>
                </div>
                {/* Matrix-style grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-cyan-500/20 animate-pulse" style={{ animationDelay: `${i * 50}ms` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black border-t-4 border-purple-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 uppercase tracking-wider">
            <span className="text-white">MY</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">EXPERIENCE</span>
          </h2>
          <div className="space-y-12">
            <div className="group relative bg-gray-900 border-l-8 border-cyan-500 p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <div className="absolute -left-2 top-8 w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">SOFTWARE DEVELOPER</h3>
                  <p className="text-cyan-400 font-bold text-lg uppercase">Your Company Name</p>
                </div>
                <span className="text-purple-400 font-black text-lg border-2 border-purple-400 px-4 py-2 uppercase">2023 - PRESENT</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Architected and deployed <span className="text-cyan-400 font-bold">next-generation web applications</span> using React, Next.js, and Node.js. 
                Led cross-functional teams to deliver <span className="text-purple-400 font-bold">cutting-edge software solutions</span> that exceeded performance benchmarks.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="group relative bg-gray-900 border-l-8 border-purple-500 p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              <div className="absolute -left-2 top-8 w-4 h-4 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">JUNIOR DEVELOPER</h3>
                  <p className="text-purple-400 font-bold text-lg uppercase">Previous Company</p>
                </div>
                <span className="text-cyan-400 font-black text-lg border-2 border-cyan-400 px-4 py-2 uppercase">2022 - 2023</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Built <span className="text-purple-400 font-bold">responsive web applications</span> and robust APIs. 
                Mastered modern development practices and delivered <span className="text-cyan-400 font-bold">high-impact client projects</span>.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black border-t-4 border-pink-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-20 uppercase tracking-wider">
            <span className="text-white">FEATURED</span>{" "}
            <span className="bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { id: 1, color: 'cyan', accent: 'purple' },
              { id: 2, color: 'purple', accent: 'pink' },
              { id: 3, color: 'pink', accent: 'yellow' }
            ].map(({ id, color, accent }) => (
              <div key={id} className={`group relative bg-black border-4 border-${color}-500 overflow-hidden hover:border-${accent}-400 transition-all duration-300 hover:scale-105`}>
                {/* Project image placeholder with animated grid */}
                <div className={`h-64 bg-gradient-to-br from-${color}-900/20 to-${accent}-900/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-6xl text-${color}-400 animate-pulse`}>⚡</div>
                  </div>
                  {/* Animated grid overlay */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="grid grid-cols-6 grid-rows-6 h-full">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className={`border border-${color}-500/20 animate-pulse`} style={{ animationDelay: `${i * 25}ms` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-8">
                  <h3 className={`text-2xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-${color}-400 transition-colors duration-300`}>
                    PROJECT {id}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    A <span className={`text-${color}-400 font-bold`}>revolutionary</span> application showcasing 
                    <span className={`text-${accent}-400 font-bold`}> cutting-edge</span> technology and modern development practices.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <span className={`text-sm bg-${color}-500/20 text-${color}-400 px-3 py-1 border border-${color}-500 font-bold uppercase tracking-wide`}>React</span>
                      <span className={`text-sm bg-${accent}-500/20 text-${accent}-400 px-3 py-1 border border-${accent}-500 font-bold uppercase tracking-wide`}>Next.js</span>
                    </div>
                    <button className={`text-${color}-400 hover:text-white font-black text-lg uppercase tracking-wide hover:scale-110 transition-all duration-300`}>
                      VIEW →
                    </button>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-${color}-400 to-${accent}-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black border-t-4 border-yellow-500">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase tracking-wider">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">LET&apos;S</span>{" "}
            <span className="text-white">COLLABORATE</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-16 leading-relaxed">
            Ready to build something <span className="text-yellow-400 font-bold">EXTRAORDINARY</span>? 
            Let&apos;s create the <span className="text-red-400 font-bold">FUTURE</span> together.
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            <a 
              href="mailto:plymire.2@wright.edu" 
              className="group relative px-12 py-6 bg-gradient-to-r from-yellow-500 to-red-600 text-black font-black text-xl border-4 border-transparent hover:border-yellow-400 transform hover:scale-110 transition-all duration-300 uppercase tracking-wider overflow-hidden"
            >
              <span className="relative z-10">SEND EMAIL</span>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-red-400 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
            </a>
            <a 
              href="https://linkedin.com" 
              className="group relative px-12 py-6 bg-transparent text-white font-black text-xl border-4 border-white hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 uppercase tracking-wider hover:bg-cyan-400/10 hover:scale-110"
            >
              <span className="relative z-10">LINKEDIN</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black py-16 px-6 border-t-4 border-gradient-to-r from-cyan-500 to-purple-500">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider">
              MICHAEL PLYMIRE
            </div>
          </div>
          <p className="text-gray-400 text-lg">
            © 2025 <span className="text-cyan-400 font-bold">MICHAEL PLYMIRE</span>. 
            Crafted with <span className="text-red-400">⚡</span> Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
