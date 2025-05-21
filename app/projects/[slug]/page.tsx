'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { projectsData, Project } from '../../../data/projects';

const ProjectDetailPage = () => {
  const params = useParams();
  const { slug } = params;

  // Find the project based on the slug
  const project = projectsData.find((p: Project) => p.slug === slug);

  if (!project) {
    return <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">{project.name}</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-400 text-sm">{project.date}</p>
        <div className="relative w-full h-64 mt-6 rounded-lg overflow-hidden">
          {/* <Image src={project.image} alt={project.name} fill={true} className="object-cover" /> */}
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 