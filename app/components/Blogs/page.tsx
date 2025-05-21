"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Blogs = () => {
  // Placeholder data for multiple blog posts
  const blogPosts = [
    {
      title: "Understanding Asynchronous JavaScript",
      slug: "understanding-asynchronous-javascript",
      summary: "Explore the concepts of callbacks, Promises, and async/await.",
      image: "/images/placeholder-tech-1.png", // Placeholder image
    },
    {
      title: "A Guide to RESTful API Design",
      slug: "restful-api-design-guide",
      summary: "Best practices for building robust and scalable APIs.",
      image: "/images/placeholder-tech-2.png", // Placeholder image
    },
    {
      title: "Deep Dive into React Hooks",
      slug: "deep-dive-react-hooks",
      summary: "Learn how to use useState, useEffect, and custom hooks.",
      image: "/images/placeholder-tech-3.png", // Placeholder image
    },
    {
      title: "Getting Started with Tailwind CSS",
      slug: "getting-started-tailwind-css",
      summary: "Build modern UIs quickly with this utility-first CSS framework.",
      image: "/images/placeholder-tech-4.png", // Placeholder image
    },
    {
      title: "Introduction to Serverless Computing",
      slug: "introduction-serverless-computing",
      summary: "Understand the basics and benefits of serverless architectures.",
      image: "/images/placeholder-tech-5.png", // Placeholder image
    },
    {
      title: "Optimizing Web Performance",
      slug: "optimizing-web-performance",
      summary: "Tips and tricks to make your websites faster.",
      image: "/images/placeholder-tech-6.png", // Placeholder image
    },
    {
      title: "Exploring GraphQL vs REST",
      slug: "graphql-vs-rest",
      summary: "A comparison of two popular API architectural styles.",
      image: "/images/placeholder-tech-7.png", // Placeholder image
    },
    {
      title: "CSS Grid Layout Explained",
      slug: "css-grid-layout-explained",
      summary: "Master the fundamentals of building 2D layouts with CSS Grid.",
      image: "/images/placeholder-tech-8.png", // Placeholder image
    },
    {
      title: "State Management in Large React Apps",
      slug: "state-management-react-apps",
      summary: "Comparing different state management solutions like Redux and Context API.",
      image: "/images/placeholder-tech-9.png", // Placeholder image
    },
    {
      title: "Understanding JWT Authentication",
      slug: "understanding-jwt-authentication",
      summary: "How JSON Web Tokens work and how to use them securely.",
      image: "/images/placeholder-tech-10.png", // Placeholder image
    },
    {
      title: "Introduction to Docker for Developers",
      slug: "introduction-docker-developers",
      summary: "Containerizing your applications for consistent environments.",
      image: "/images/placeholder-tech-11.png", // Placeholder image
    },
    {
      title: "Building Progressive Web Apps (PWAs)",
      slug: "building-progressive-web-apps",
      summary: "Making your web apps reliable, fast, and engaging.",
      image: "/images/placeholder-tech-12.png", // Placeholder image
    },
    {
      title: "Testing Strategies for Frontend Applications",
      slug: "frontend-testing-strategies",
      summary: "Unit, integration, and end-to-end testing techniques.",
      image: "/images/placeholder-tech-13.png", // Placeholder image
    },
    {
      title: "Securing Your Node.js Applications",
      slug: "securing-nodejs-applications",
      summary: "Common security vulnerabilities and how to prevent them.",
      image: "/images/placeholder-tech-14.png", // Placeholder image
    },
    {
      title: "Designing Effective Database Schemas",
      slug: "designing-database-schemas",
      summary: "Tips for creating scalable and maintainable database designs.",
      image: "/images/placeholder-tech-15.png", // Placeholder image
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">Tech Blog</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.slug}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
                <div className="relative w-full h-48">
                  {/* <Image src={post.image} alt={post.title} fill={true} className="object-cover" /> */}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{post.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
