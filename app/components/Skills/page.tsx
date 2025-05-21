'use client';

import React from 'react';

const Skills = () => {
  const skills = [
    { category: "Front-End Development", items: ["React JS", "Next Js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Material-UI", "Tailwind CSS", "Redux-Toolkit"] },
    { category: "Back-End Development", items: ["Node.js", "Express.js", "GraphQL"] },
    { category: "Databases", items: ["MongoDB", "Firebase"] },
    { category: "Development Tools & Frameworks", items: ["GitHub", "NPM", "Yarn", "GitHub Copilot"] },
    { category: "Desktop Application Development", items: ["Electron Js"] },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">Skills</h2>
        <div className="mt-8 space-y-6">
          {skills.map((skillCategory) => (
            <div key={skillCategory.category} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skillCategory.category}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {skillCategory.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills; 