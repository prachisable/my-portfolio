"use client";
import React, { useState } from "react";
import { Download } from "lucide-react";
import AnimatedProgressBar from "./AnimatedProgressBar";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Heart,
} from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Award },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  const technicalSkills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "TailwindCss", level: 85 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "Laravel", level: 50 },
    { name: "MySQL", level: 50 },
    { name: "PHP", level: 30 },
  ];

  const projects = [
    {
      title: "Secured Self Distributive System Using Cloud Computing",
      tech: "Java, NetBeans 7.2.1, MySQL",
      description:
        "An efficient and fine-grained data access control scheme with privacy-preserving policy for big data management.",
      features: [
        "Provides security to data",
        "Easy document management",
        "Covers large geographical areas",
        "Efficient data processing",
      ],
    },
    {
      title: "Text Summarization using NLP Technology",
      tech: "Python, HTML, CSS, Flask",
      description:
        "Automatic text summarization tool that distills important information from source texts using NLP techniques.",
      features: [
        "Natural language processing implementation",
        "Extractive-based summarization model",
        "Single document processing",
        "Reduces reading time significantly",
      ],
    },
  ];

  // Smooth scroll to section & highlight nav
  const handleNavClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      {/* Global styles for shining animation and color */}
      <style jsx global>{`
        :root {
          --custom-blue: #4d88f7;
          --custom-blue-light: #4d88f7;
        }
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shine {
          background: linear-gradient(
            270deg,
            var(--custom-blue),
            var(--custom-blue-light),
            var(--custom-blue),
            var(--custom-blue-light),
            var(--custom-blue)
          );
          background-size: 400% 400%;
          animation: shine 6s ease infinite;
        }
        .bg-custom-blue {
          background-color: var(--custom-blue) !important;
        }
        .text-custom-blue {
          color: var(--custom-blue) !important;
        }
        .border-custom-blue {
          border-color: var(--custom-blue) !important;
        }
        .hover\\:bg-custom-blue:hover {
          background-color: var(--custom-blue) !important;
        }
      `}</style>

      <div className="min-h-screen bg-black font-sans text-white scroll-smooth">
        {/* Header / Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md z-50 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center py-5">
              <button
                onClick={() => {
                  const hero = document.getElementById("hero-section");
                  if (hero)
                    hero.scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveSection("about"); // optional: set active nav to hero/about section
                }}
                className="text-3xl font-extrabold tracking-wide select-none cursor-pointer bg-transparent border-none p-0"
                aria-label="Scroll to top"
              >
                Prachi Sable
              </button>
              <div className="hidden lg:flex space-x-4 font-medium text-gray-300">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition duration-300 focus:outline-none ${
                        isActive
                          ? "bg-custom-blue text-white shadow-lg scale-105"
                          : "hover:bg-gray-700 hover:text-white"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section (also About) */}
        <section
          id="hero-section"
          className="relative min-h-screen max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white overflow-hidden"
        >
          {/* Shiny background effect */}
          <div
            className="animate-shine absolute inset-0 opacity-10 -z-10 rounded-xl"
            aria-hidden="true"
          />

          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-8 relative z-10 ">
            <div className="bg-white rounded-full w-54 h-54 shadow-xl flex items-center justify-center overflow-hidden my-4 lg:my-3">
              <img
                src="/prachi1.png"
                alt="Prachi Sable"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight drop-shadow-md text-white">
              Prachi Sable
            </h1>
            <p className="text-xl font-semibold drop-shadow-sm text-custom-blue">
              Software Engineer
            </p>
            <div className="flex space-x-8 mt-4">
              <a
                href="https://github.com/prachisable/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full border border-white hover:border-blue-600 transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={32} className="text-custom-blue" />
              </a>
              <a
                href="https://www.linkedin.com/in/prachi-sabale-8b07901b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full border border-white hover:border-blue-600 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={32} className="text-custom-blue" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          {/* Right Column */}

          <div className="text-gray-300 max-w-xl mx-auto lg:mx-0 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold mb-6 text-white tracking-wide">
              Objective
            </h2>
            <p className="text-lg leading-relaxed tracking-wide mb-4">
              Eager to embrace challenging roles within the IT sector that
              faster professional growth and innovation. Committed to
              continuously expanding my technical expertise and making
              meaningful contributions to organizational success through
              collaboration and dedication.
            </p>

            {/* Buttons container with gap */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* Download Resume Button */}
              <a
                href="/resume-prachisable.pdf"
                download
                className="inline-flex items-center justify-center bg-blue-600 hover-bg-custom-blue text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
                aria-label="Download Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>

              {/* WhatsApp Connect Button */}
              <a
                href="https://wa.me/9309408498?text=Hello%20Prachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition space-x-2 w-full sm:w-auto"
                aria-label="Connect on WhatsApp"
              >
                <AiOutlineWhatsApp size={24} />
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section (with detail) */}
        <section
          id="about"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-gray-300"
        >
          <h2 className="text-4xl font-extrabold text-custom-blue mb-10 border-b-4 border-white pb-3 tracking-wide">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-wide">
                Professional Profile
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I am a motivated Software Engineer with excellent communication
                and analytical skills. As an energetic team player, I
                demonstrate proficiency in learning new tools and adapting to
                challenging business environments.
              </p>
              <div className="space-y-3 font-medium text-gray-400">
                <p>
                  <span className="text-custom-blue font-bold">
                    Date of Birth:
                  </span>{" "}
                  April 04, 2000
                </p>
                <p>
                  <span className="text-custom-blue font-bold">
                    Nationality:
                  </span>{" "}
                  Indian
                </p>
                <p>
                  <span className="text-custom-blue font-bold">Languages:</span>{" "}
                  English, Marathi, Hindi
                </p>
                <p>
                  <span className="text-custom-blue font-bold">Status:</span>{" "}
                  Unmarried
                </p>
              </div>
            </div>

            <div className="bg-gray-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-wide">
                Personal Skills
              </h3>
              <ul className="space-y-5 font-medium list-disc list-inside text-gray-400">
                <li>Excellent communication skills and team building</li>
                <li>Self-awareness and continuous learning</li>
                <li>Leadership and team management</li>
              </ul>

              <h4 className="text-xl font-semibold text-white mt-10 mb-4 tracking-wide">
                Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "New Technologies",
                  "Outdoor Games",
                  "Traveling",
                  "Cultural Exploration",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="bg-blue-800 text-blue-400 px-4 py-1 rounded-full font-semibold text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-gray-300"
        >
          <h2 className="text-4xl font-extrabold text-custom-blue mb-10 border-b-4 border-white pb-3 tracking-wide">
            Experience
          </h2>
          <div className="space-y-10">
            <article className="bg-gray-900 p-10 rounded-2xl shadow-lg border-l-8 border-white hover:shadow-2xl transition-shadow duration-300 relative">
              <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    Software Engineer
                  </h3>
                  <p className="text-custom-blue font-semibold">
                    Sai Ashirwad Informatia
                  </p>
                </div>
                <span className="badge bg-blue-700 text-white font-semibold px-4 py-1 rounded-full text-sm ml-0 md:ml-4 mt-3 md:mt-0">
                  Current
                </span>
              </header>
              <p className="text-gray-300 leading-relaxed mb-5">
                Utilizing skills in React, Next.js, Tailwind CSS and Laravel to
                develop innovative solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Next.js", "Tailwind CSS", "Laravel"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-blue-800 text-blue-400 rounded-full px-4 py-1 font-semibold text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </article>

            <article className="bg-gray-900 p-10 rounded-2xl shadow-lg border-l-8 border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <header className="flex flex-col md:flex-row md:justify-between md:items-center mb-5">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    CS Lab Instructor
                  </h3>
                  <p className="text-custom-blue font-semibold">
                    PACE Junior Science College
                  </p>
                </div>
                <span className="badge bg-gray-700 text-gray-400 font-semibold px-4 py-1 rounded-full text-sm ml-0 md:ml-4 mt-3 md:mt-0">
                  1 Year
                </span>
              </header>
              <p className="text-gray-300 leading-relaxed">
                Provided computer science education and lab instruction to
                junior college students.
              </p>
            </article>

            <article className="bg-gray-900 p-10 rounded-2xl shadow-lg border-l-8 border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Internship Experience
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">
                    Web Development Internship
                  </span>
                  <span className="text-gray-400 text-sm">5 Months</span>
                </div>
                <p className="text-gray-300 text-sm">HTML, CSS, JavaScript</p>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">
                    Web Development Internship
                  </span>
                  <span className="text-gray-400 text-sm">1 Month</span>
                </div>
                <p className="text-gray-300 text-sm">HTML, CSS</p>
              </div>
            </article>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-gray-300"
        >
          <h2 className="text-4xl font-extrabold text-custom-blue mb-10 border-b-4 border-white pb-3 tracking-wide">
            Projects
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={index}
                className="bg-gray-900 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <ExternalLink
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    size={22}
                    aria-label="External project link"
                  />
                </div>
                <p className="text-blue-400 font-semibold mb-5">
                  {project.tech}
                </p>
                <p className="text-gray-300 mb-7 leading-relaxed">
                  {project.description}
                </p>
                <h4 className="font-semibold text-white mb-4">Key Features:</h4>
                <ul className="grid md:grid-cols-1 gap-3 list-none">
                  {project.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 text-gray-300 text-sm"
                    >
                      <div className="w-3 h-3 bg-blue-700 rounded-full shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-gray-300"
        >
          <h2 className="text-4xl font-extrabold text-custom-blue mb-10 border-b-4 border-white pb-3 tracking-wide">
            Education & Achievements
          </h2>
          <div className="space-y-10">
            <div className="bg-gray-900 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
              <h3 className="text-2xl font-semibold text-white mb-3">
                B.Tech in Computer Science Engineering
              </h3>
              <p className="text-blue-400 font-semibold mb-3">2019 - 2022</p>
              <p className="text-gray-300 mb-6">First Class With Distinction</p>
              <div className="bg-blue-900 border-l-6 border-blue-600 p-5 rounded-xl">
                <p className="text-white font-bold text-lg select-none">
                  🏆 First Class With Distinction
                </p>
              </div>
            </div>

            <div className="bg-gray-900 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Diploma in Computer Engineering
              </h3>
              <p className="text-blue-400 font-semibold mb-3">2017 - 2019</p>
              <p className="text-gray-300 mb-6">First Class With Distinction</p>
              <div className="bg-blue-900 border-l-6 border-blue-600 p-5 rounded-xl">
                <p className="text-white font-bold text-lg select-none">
                  🏆 First Class With Distinction
                </p>
              </div>
            </div>

            <div className="bg-gray-900 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-white mb-8">
                Achievements & Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-semibold text-gray-400 mb-6">
                    Academic Achievements
                  </h4>
                  <ul className="space-y-4 font-medium text-gray-300">
                    {[
                      "Inter School Drawing Competition",
                      "Inter School Speech Competition",
                      "School General Knowledge Competition Winner",
                    ].map((ach, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Award className="text-yellow-400" size={18} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-400 mb-6">
                    Online Certifications
                  </h4>
                  <ul className="space-y-4 font-medium text-gray-300">
                    {[
                      { text: "React.js Course (Udemy)", color: "bg-blue-600" },
                      { text: "HTML & Machine Learning", color: "bg-blue-600" },
                      {
                        text: "C++ and Java Fundamentals",
                        color: "bg-blue-600",
                      },
                    ].map(({ text, color }, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <div
                          className={`${color} w-3 h-3 rounded-full shrink-0`}
                        />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-gray-300"
        >
          <h2 className="text-4xl font-extrabold text-custom-blue mb-10 border-b-4 border-white pb-3 tracking-wide">
            Technical Skills
          </h2>
          <div className="bg-gray-900 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-12">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3 font-semibold tracking-wide text-white">
                    <span>{skill.name}</span>
                    <span className="text-custom-blue font-extrabold">
                      {skill.level}%
                    </span>
                  </div>
                  <AnimatedProgressBar level={skill.level} />
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-2xl font-semibold text-white tracking-wide mb-6">
                Additional Technologies
              </h3>
              <div className="flex flex-wrap gap-5 text-white">
                {[
                  "Git/GitHub",
                  "Responsive Design",
                  "RESTful APIs",
                  "Database Design",
                  "Agile Methodology",
                  "Team Leadership",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-custom-blue px-5 py-2 rounded-2xl font-semibold cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-gray-300"
        >
          <h2 className="text-4xl font-extrabold text-custom-blue mb-10 border-b-4 border-white pb-3 tracking-wide">
            Contact Me
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle WhatsApp message send
              const formData = new FormData(e.target);
              const name = formData.get("name");
              const company = formData.get("company");
              const role = formData.get("role");
              const location = formData.get("location");
              const message = formData.get("message");

              const whatsappMessage = `Name: ${name}%0ACompany: ${company}%0ARole: ${role}%0ALocation: ${location}%0AMessage: ${message}`;
              const whatsappNumber = "919309408498"; // replace with your number

              // Open WhatsApp chat in new tab with prefilled message
              window.open(
                `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                "_blank"
              );
            }}
            className="max-w-3xl mx-auto bg-gray-900 rounded-3xl shadow-lg p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-white"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-custom-blue focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 font-semibold text-white"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company (optional)"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-custom-blue focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 font-semibold text-white"
                >
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="w-full rounded-md border border-2 border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-custom-blue focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select role u want to hire for
                  </option>
                  <option>Software Engineer</option>
                  <option>Frontend Engineer</option>
                  <option>Full Stack Developer</option>
                  <option>Freelancer</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block mb-2 font-semibold text-white"
                >
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="City, Country"
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-custom-blue focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full resize-none rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-custom-blue focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-custom-blue px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 sm:w-auto"
              aria-label="Send message via WhatsApp"
            >
              Connect
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-14 mt-16 text-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h3 className="text-3xl font-extrabold mb-6 tracking-wide select-none">
              Let’s Connect
            </h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto tracking-wide leading-relaxed">
              I am always interested in hearing about new opportunities and
              interesting projects.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-10 space-y-6 sm:space-y-0 mb-10">
              <a
                href="mailto:sabaleprachi16@gmail.com"
                className="flex items-center justify-center space-x-3 bg-gray-800 px-8 py-4 rounded-xl shadow-inner hover:bg-gray-700 transition focus:outline-none focus:ring-4 focus:ring-blue-600"
                aria-label="Email me"
              >
                <Mail size={24} className="text-blue-400" />
                <span className="font-semibold tracking-wide text-white">
                  Email Me
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/prachi-sabale-8b07901b9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gray-800 px-8 py-4 rounded-xl shadow-inner hover:bg-gray-700 transition focus:outline-none focus:ring-4 focus:ring-blue-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-blue-400" />
                <span className="font-semibold tracking-wide text-white">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/prachisable/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gray-800 px-8 py-4 rounded-xl shadow-inner hover:bg-gray-700 transition focus:outline-none focus:ring-4 focus:ring-blue-600"
                aria-label="GitHub"
              >
                <Github size={24} className="text-blue-400" />
                <span className="font-semibold tracking-wide text-white">
                  GitHub
                </span>
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm tracking-wide select-none flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
                &copy; 2025. All Rights Reserved. |
                <span className="inline-flex items-center justify-center ">
                  Made with{" "}
                  <Heart
                    className="mx-1 inline-block text-red-500"
                    size={18}
                    fill="currentColor"
                    aria-hidden="true"
                  />{" "}
                  | Designed and Code by Prachi
                </span>
              </p>
            </div>
          </div>
        </footer>

        {/* Mobile Navigation */}
        <div className="fixed bottom-6 left-6 right-6 lg:hidden z-50">
          <nav className="bg-gray-800 rounded-full shadow-lg border border-white px-2 py-2 flex justify-around text-gray-400">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  aria-label={item.label}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    isActive
                      ? "bg-blue-700 text-white shadow-lg"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <Icon size={24} />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
