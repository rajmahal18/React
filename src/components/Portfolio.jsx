import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFileAlt, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { projects } from "./projects";
import ProjectCard from "./ProjectCard";
import { copyToClipboard } from "./utils";
import toast from "react-hot-toast";
import ScreenshotModal from "./ScreenshotModal";


export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
  copyToClipboard("rajpaute@gmail.com", () => {
    setIsOpen(false);
    toast.success("Email copied to clipboard!");
  });
};

  const [modalData, setModalData] = useState({
  isOpen: false,
  screenshots: [],
  index: 0,
});
  
  return (

    <motion.div
      className="min-h-screen"
      animate={{
        backgroundImage: [
          "linear-gradient(45deg, #f9fafb, #e5e7eb)",   // lightest gray to light gray
          "linear-gradient(45deg, #e5e7eb, #d1d5db)",   // gray-200 to gray-300
          "linear-gradient(45deg, #f3f4f6, #ffffff)"    // neutral gray to pure white
        ]
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
    >
    <div className="min-h-screen text-gray-900 p-6 lg:p-12">
      <header className="max-w-7xl mx-auto mb-10">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold">Portfolio</h1>
          <div className="flex gap-3 items-center">
            <a
              href="#projects"
              className="px-4 py-2 rounded-lg border border-transparent hover:shadow-md transition">
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-sky-600 text-white shadow hover:opacity-95 transition">
              Contact
            </a>
          </div>
        </nav>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold">Hi, I'm Raj</h2>
            <p className="mt-3 text-lg md:text-xl text-gray-700">
              I design and build tools that simplify life. From a Roomba-inspired cleaning robot to practical web apps built with Flask and React, I focus on clean UIs, useful features, and just the right touch of math.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-4 py-2 rounded-md border border-gray-200 hover:shadow-sm">
                See projects
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-md bg-black text-white hover:opacity-95">
                Let's collab
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-4 rounded-2xl shadow w-full">
            <div className="flex items-center gap-4">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover shadow-lg"
              />
              <div>
                <div className="font-semibold">Paute, Alrahje D.</div>
                <div className="text-sm text-gray-500">Frontend • Backend • Problem Solver</div>
              </div>
            </div>

            <ul className="mt-4 grid grid-cols-2 gap-6 text-gray-700">
              {/* Left column - Socials */}
              <div className="space-y-3">
                <li>
                  <a 
                    href="https://facebook.com/rajpaute" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-sky-600 transition"
                  >
                    <FaFacebook className="text-xl" />
                    <span>rajpaute</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com/rajpaute" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-sky-600 transition"
                  >
                    <FaInstagram className="text-xl" />
                    <span>rajpaute</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/rajmahal18" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-sky-600 transition"
                  >
                    <FaGithub className="text-xl" />
                    <span>rajmahal18</span>
                  </a>
                </li>
              </div>

              {/* Right column - Contact */}
              <div className="space-y-3">
                <div>
                  <li>
                    <button
                      onClick={() => setIsOpen(true)}
                      className="flex items-center gap-2 hover:text-sky-600 transition"
                    >
                      <FaEnvelope className="text-xl" />
                      <span>rajpaute@gmail.com</span>
                    </button>
                  </li>

                  {/* Modal */}
                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                      <div className="bg-white rounded-xl p-6 shadow-lg w-80 text-center">
                        <h2 className="text-lg font-semibold mb-4">
                          Copy email address?
                        </h2>
                        <div className="flex justify-center gap-4">
                          <button
                            onClick={handleCopy}
                            className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>  

                <li>
                  <a 
                    href="public/Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-sky-600 transition"
                  >
                    <FaFileAlt className="text-xl" />
                    <span>Download Resume</span>
                  </a>
                </li>
              </div>
            </ul>

          </motion.div>
        </section>
      </header>

      <main className="max-w-7xl w-full mx-auto">
          {/* Projects */}
          <section id="projects" className="mb-10">
            <h3 className="text-2xl font-bold mb-4">Selected projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <ProjectCard
                  key={p.id}
                  {...p}
                  onViewScreenshots={(screenshots) =>
                    setModalData({ isOpen: true, screenshots, index: 0 })
                  }
                />
              ))}
            </div>

            {/* Global modal */}
            <ScreenshotModal
              screenshots={modalData.screenshots}
              isOpen={modalData.isOpen}
              onClose={() => setModalData({ ...modalData, isOpen: false })}
            />
          </section>

        <section id="about" className="mb-10">
          <h3 className="text-2xl font-bold mb-3">About Me</h3>
          <div className="bg-white p-6 rounded-2xl shadow text-gray-700 leading-relaxed">
            <p>
              I am a <span className="font-semibold">Registered Electronics Engineer</span> with a strong
              foundation in both hardware and software systems. Over the years, I’ve developed a passion
              for building <span className="font-semibold">practical digital solutions</span>—from efficient
              web applications to data-driven tools that simplify complex tasks. My approach combines
              technical expertise with a focus on clean design, scalability, and user experience.
            </p>
            <p className="mt-4">
              Beyond engineering, I enjoy exploring the intersection of technology and problem-solving,
              ensuring every project I take on not only works but also delivers measurable value. I’m
              constantly learning, iterating, and refining my craft to stay at the forefront of innovation.
            </p>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h3 className="text-2xl font-bold mb-3">Contact</h3>

          <div className="bg-white p-6 rounded-2xl shadow">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! Form submit would send data in a real app.");
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="p-3 border rounded-md"
                placeholder="Your name"
                required
                />
              <input
                className="p-3 border rounded-md"
                placeholder="Your email"
                type="email"
                required
                />
              <textarea
                className="p-3 border rounded-md md:col-span-2"
                placeholder="How can I help?"
                rows={5}
                required
                />

              <div className="md:col-span-2 flex justify-between items-center">
                <div className="text-sm text-gray-500">Prefer email? alrahje@example.com</div>
                <button className="px-4 py-2 bg-sky-600 text-white rounded-md">Send</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto text-center text-sm text-gray-500">
        <div>Made with ❤️ — React + Tailwind + a lil' sarap</div>
      </footer>
    </div>
    </motion.div>
  );
}
