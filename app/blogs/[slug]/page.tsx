'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { blogPostsData, BlogPost } from '../../../data/blogPosts'; // Import blogPostsData and BlogPost type

const BlogPostDetailPage = () => {
  const params = useParams();
  const { slug } = params;
  console.log(slug);
  // Find the blog post based on the slug
  const blogPost = blogPostsData.find((post: BlogPost) => post.slug === slug);

  if (!blogPost) {
    return <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl border-b pb-4 border-gray-200 dark:border-gray-700">{blogPost.title}</h1>
        {/* Optional: Display date if needed */}
        {/* <p className="mt-4 text-gray-700 dark:text-gray-400 text-sm">{blogPost.date}</p> */}

        <div className="relative w-full h-64 mt-6 rounded-lg overflow-hidden">
          <Image src={blogPost.image} alt={blogPost.title} fill={true} className="object-cover" />
        </div>
        
        {/* Render blog post content with Tailwind Typography */}
        <div 
          className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300 prose dark:prose-invert max-w-none" // Added prose and dark:prose-invert classes
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </div>
    </div>
  );
};

export default BlogPostDetailPage; 