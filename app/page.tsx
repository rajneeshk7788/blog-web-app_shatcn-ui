"use client"

import Link from "next/link"
import Image from 'next/image';
import { projectsData, Project } from '../data/projects'; // Import projectsData and Project type with corrected path

export default function Home() {
  // Remove local projects array
  // const projects = [...]; 

  const professionalProjects: Project[] = projectsData.filter((p: Project) => p.category === 'Professional');
  const personalProjects: Project[] = projectsData.filter((p: Project) => p.category === 'Personal');
  // Add more categories if needed, e.g., const practiceProjects = projects.filter(p => p.category === 'Practice');


  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      {/* Profile Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">Profile</h2>
        <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
          Experienced in building responsive, user-friendly applications with a strong focus on performance and design.
          Skilled in developing dynamic user interfaces and collaborating with cross-functional teams to deliver high-quality
          solutions. Familiar with back-end technologies, including designing RESTful APIs, managing databases, and
          integrating efficient data handling systems. Adaptable to fast-paced environments, committed to continuous learning,
          and driven to innovate with emerging technologies.
        </p>
      </section>

      {/* Professional Experience Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">Professional Experience</h2>
        <div className="mt-8 space-y-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">NextLoop Technologies LLP</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm">Software Engineer | Jul 2022 - present | Indore, Madhya Pradesh</p>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Developed and maintained high-performance, responsive web applications to enhance user experience.</li>
              <li>Collaborated with designers, backend developers, and product managers to implement and optimize features.</li>
              <li>Refactored and optimized code for better performance, scalability, and maintainability.</li>
              <li>Conducted code reviews to ensure quality and best practices.</li>
              <li>Built reusable UI components and managed state efficiently for a seamless user experience.</li>
              <li>Contributed to backend development by working with RESTful APIs, basic server-side logic, and database integration.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">Skills</h2>
        <div className="mt-8 space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Skills</h3>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Front-End Development - React JS, Next Js, HTML5, CSS3, JavaScript, TypeScript, Material-UI, Tailwind CSS, Redux-Toolkit</li>
              <li>Back-End Development - Node.js, Express.js, GraphQL</li>
              <li>Databases - MongoDB, Firebase</li>
              <li>Development Tools & Frameworks - GitHub, NPM, Yarn, GitHub Copilot</li>
              <li>Desktop Application Development - Electron Js</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">Projects</h2>

        {/* Professional Projects */}
        {professionalProjects.length > 0 && (
          <div className="mt-8">
             <h3 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200 mb-4">Professional Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionalProjects.map((project: Project) => (
                <Link href={`/projects/${project.slug}`} key={project.slug}>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
                    <div className="relative w-full h-48">
                      {/* <Image src={project.image} alt={project.name} fill={true} className="object-cover" /> */}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">{project.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Personal Projects */}
         {personalProjects.length > 0 && (
          <div className="mt-12">
             <h3 className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200 mb-4">Personal Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project: Project) => (
                <Link href={`/projects/${project.slug}`} key={project.slug}>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
                    <div className="relative w-full h-48">
                      {/* <Image src={project.image} alt={project.name} fill={true} className="object-cover" /> */}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">{project.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Add more project categories here if needed */}

      </section>

      {/* Education Section */}
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">Education</h2>
        <div className="mt-8 space-y-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Full-Stack Web Development</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm">Universal Informatics | Aug 2021 - Apr 2022 | Indore, Madhya Pradesh</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Master of Science in Computer Science</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm">Shree Ramkrishna College of Commerce and Science | Jul 2019 - Jun 2021 | Satna, Madhya Pradesh</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm">Shree Ramkrishna College of Commerce and Science | Jul 2016 - Jun 2019 | Satna, Madhya Pradesh</p>
          </div>
        </div>
      </section>

    </div>
  )
}
