 'use client';

import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Full-Stack Web Development",
      institution: "Universal Informatics",
      date: "Aug 2021 - Apr 2022",
      location: "Indore, Madhya Pradesh",
    },
    {
      degree: "Master of Science in Computer Science",
      institution: "Shree Ramkrishna College of Commerce and Science",
      date: "Jul 2019 - Jun 2021",
      location: "Satna, Madhya Pradesh",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Shree Ramkrishna College of Commerce and Science",
      date: "Jul 2016 - Jun 2019",
      location: "Satna, Madhya Pradesh",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">Education</h2>
        <div className="mt-8 space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm">{edu.institution} | {edu.date} | {edu.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;