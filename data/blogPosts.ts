// Define a type for your blog post objects
export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  image: string;
  content: string;
}

export const blogPostsData: BlogPost[] = [
  {
    title: "Understanding Asynchronous JavaScript",
    slug: "understanding-asynchronous-javascript",
    summary: "Explore the concepts of callbacks, Promises, and async/await.",
    image: "/images/placeholder-tech-1.png",
    content: `
      <article class="prose prose-blue max-w-none">
        <p>
          JavaScript is traditionally <b>asynchronous, single-threaded</b> language. This means code executes sequentially, one line after another. However, for operations like fetching data from a server or reading files, waiting for these tasks to complete would block the entire program, making the application unresponsive.
        </p>
        <p>
          <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">Asynchronous programming</span> allows these tasks to run in the background without freezing the main execution thread.
        </p>

        <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">🔗 Callbacks</h2>
        <p>
          Callbacks are functions passed as arguments to other functions, to be executed later. They were the primary way to handle asynchronous operations in early JavaScript.
        </p>
        <pre class="rounded bg-gray-900 text-green-200 text-sm p-4 my-4 font-mono overflow-x-auto">
          function fetchData(callback) {
            setTimeout(() => {
              callback('Data fetched!');
            }, 1000);
          }

          fetchData(function(data) {
            console.log(data); // Logs 'Data fetched!' after 1 second
          });
          </pre>
        <p>
          While simple for basic tasks, nested callbacks for multiple asynchronous operations can lead to <span class="text-red-600 font-semibold">'callback hell'</span>, making code hard to read and maintain.
        </p>

        <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">🟦 Promises</h2>
        <p>
          Promises provide a cleaner way to handle asynchronous operations and avoid callback hell. A Promise represents a value that may be available now, or in the future, or never. It has three states: <b>pending</b>, <b>fulfilled</b> (successful), or <b>rejected</b> (failed).
        </p>
        <pre class="rounded bg-gray-900 text-green-200 text-sm p-4 my-4 font-mono overflow-x-auto">
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched with Promise!');
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data); // Logs 'Data fetched with Promise!' after 1 second
  })
  .catch(error => {
    console.error(error);
  });</pre>
        <p>
          Promises make chaining asynchronous operations much more manageable.
        </p>

        <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">⚡ Async / Await</h2>
        <p>
          Introduced in ES2017, <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">async/await</span> is syntactic sugar built on top of Promises, making asynchronous code look and behave a bit more like synchronous code.
        </p>
        <pre class="rounded bg-gray-900 text-green-200 text-sm p-4 my-4 font-mono overflow-x-auto">
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched with Async/Await!');
    }, 1000);
  });
}

async function processData() {
  try {
    const data = await fetchData();
    console.log(data); // Logs 'Data fetched with Async/Await!' after 1 second
  } catch (error) {
    console.error(error);
  }
}

processData();</pre>
        <p>
          Async/await significantly improves the readability and maintainability of asynchronous JavaScript code, especially when dealing with multiple sequential asynchronous operations.
        </p>

        <footer class="mt-8 border-t pt-4 text-gray-400">
          <b>In summary:</b> While callbacks were the original approach, Promises offered a structured improvement, and async/await provides the most modern and readable syntax for handling asynchronous operations in JavaScript today.
        </footer>
      </article>
    `,
  },
  {
    title: "A Guide to RESTful API Design",
    slug: "restful-api-design-guide",
    summary: "Best practices for building robust and scalable APIs.",
    image: "/images/placeholder-tech-2.png",
    content: `
    <article class="prose prose-blue max-w-none">
      <p>
        RESTful APIs are the backbone of modern web applications, enabling communication between clients and servers in a standardized way. Designing a robust RESTful API ensures scalability, maintainability, and ease of use for developers.
      </p>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">🔑 Principles of REST</h2>
      <ul>
        <li><span class="font-semibold text-blue-700">Stateless:</span> Each request from client to server must contain all the information needed to understand and process the request.</li>
        <li><span class="font-semibold text-blue-700">Client-Server:</span> Separation of concerns allows clients and servers to evolve independently.</li>
        <li><span class="font-semibold text-blue-700">Uniform Interface:</span> Consistent resource naming and structure make APIs predictable.</li>
        <li><span class="font-semibold text-blue-700">Cacheable:</span> Responses must define themselves as cacheable or not to improve performance.</li>
        <li><span class="font-semibold text-blue-700">Layered System:</span> APIs can be composed of hierarchical layers for flexibility and scalability.</li>
      </ul>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">🛣️ Resource Naming</h2>
      <p>
        Use nouns for endpoints and avoid verbs. Resources should be named in plural form and use consistent, hierarchical paths.
      </p>
      <pre class="rounded bg-gray-900 text-green-200 text-sm p-4 my-4 font-mono overflow-x-auto">
GET /users
POST /users
GET /users/123
PUT /users/123
DELETE /users/123</pre>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">⚙️ HTTP Methods</h2>
      <ul>
        <li><span class="font-semibold text-blue-700">GET:</span> Retrieve resources</li>
        <li><span class="font-semibold text-blue-700">POST:</span> Create new resources</li>
        <li><span class="font-semibold text-blue-700">PUT:</span> Update existing resources</li>
        <li><span class="font-semibold text-blue-700">DELETE:</span> Remove resources</li>
        <li><span class="font-semibold text-blue-700">PATCH:</span> Partially update resources</li>
      </ul>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">📦 Response Structure</h2>
      <p>
        Return consistent and meaningful HTTP status codes and response bodies. Use JSON as the standard format.
      </p>
      <pre class="rounded bg-gray-900 text-green-200 text-sm p-4 my-4 font-mono overflow-x-auto">
{
  "id": 123,
  "name": "Jane Doe",
  "email": "jane@example.com"
}</pre>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">🛡️ Best Practices</h2>
      <ul>
        <li>Use versioning (e.g., <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">/api/v1/</span>)</li>
        <li>Implement proper error handling and return helpful error messages</li>
        <li>Secure your API with authentication and authorization</li>
        <li>Document your API for easy onboarding</li>
      </ul>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">🔒 Security Considerations</h2>
      <ul>
        <li>Always use HTTPS for all API endpoints</li>
        <li>Implement rate limiting to prevent abuse</li>
        <li>Use proper authentication methods (OAuth 2.0, JWT)</li>
        <li>Validate and sanitize all input data</li>
        <li>Implement CORS policies appropriately</li>
      </ul>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">📊 Performance Optimization</h2>
      <ul>
        <li>Implement pagination for large data sets</li>
        <li>Use compression (gzip, deflate)</li>
        <li>Enable HTTP caching with proper cache headers</li>
        <li>Consider implementing partial responses</li>
        <li>Use efficient data formats (JSON, Protocol Buffers)</li>
      </ul>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">📝 API Documentation</h2>
      <p>
        Good documentation is crucial for API adoption. Consider using tools like Swagger/OpenAPI to generate interactive documentation.
      </p>
      <pre class="rounded bg-gray-900 text-green-200 text-sm p-4 my-4 font-mono overflow-x-auto">
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get all users
      responses:
        '200':
          description: List of users</pre>

      <h2 class="text-xl font-semibold text-blue-600 mt-8 mb-2 flex items-center gap-2">🔄 Versioning Strategies</h2>
      <ul>
        <li>URL versioning: <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">/api/v1/users</span></li>
        <li>Header versioning: <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">Accept: application/vnd.company.v1+json</span></li>
        <li>Query parameter versioning: <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-medium">/api/users?version=1</span></li>
      </ul>

      <footer class="mt-8 border-t pt-4 text-gray-400">
        <b>In summary:</b> Good RESTful API design follows clear principles, uses consistent naming, leverages HTTP methods properly, and always considers security, performance, and documentation. Remember to keep your API simple, intuitive, and well-documented for the best developer experience.
      </footer>
    </article>
    `,
  },
  {
    title: "Deep Dive into React Hooks",
    slug: "deep-dive-react-hooks",
    summary: "Learn how to use useState, useEffect, and custom hooks.",
    image: "/images/placeholder-tech-3.png",
    content: "This is the full content for the blog post about React Hooks...", // Placeholder content
  },
  {
    title: "Getting Started with Tailwind CSS",
    slug: "getting-started-tailwind-css",
    summary: "Build modern UIs quickly with this utility-first CSS framework.",
    image: "/images/placeholder-tech-4.png",
    content: "This is the full content for the blog post about Tailwind CSS...", // Placeholder content
  },
  {
    title: "Introduction to Serverless Computing",
    slug: "introduction-serverless-computing",
    summary: "Understand the basics and benefits of serverless architectures.",
    image: "/images/placeholder-tech-5.png",
    content: "This is the full content for the blog post about Serverless Computing...", // Placeholder content
  },
  {
    title: "Optimizing Web Performance",
    slug: "optimizing-web-performance",
    summary: "Tips and tricks to make your websites faster.",
    image: "/images/placeholder-tech-6.png",
    content: "This is the full content for the blog post about Web Performance...", // Placeholder content
  },
  {
    title: "Exploring GraphQL vs REST",
    slug: "graphql-vs-rest",
    summary: "A comparison of two popular API architectural styles.",
    image: "/images/placeholder-tech-7.png",
    content: "This is the full content for the blog post comparing GraphQL and REST...", // Placeholder content
  },
  {
    title: "CSS Grid Layout Explained",
    slug: "css-grid-layout-explained",
    summary: "Master the fundamentals of building 2D layouts with CSS Grid.",
    image: "/images/placeholder-tech-8.png",
    content: "This is the full content for the blog post about CSS Grid Layout...", // Placeholder content
  },
  {
    title: "State Management in Large React Apps",
    slug: "state-management-react-apps",
    summary: "Comparing different state management solutions like Redux and Context API.",
    image: "/images/placeholder-tech-9.png",
    content: "This is the full content for the blog post about State Management in React...", // Placeholder content
  },
  {
    title: "Understanding JWT Authentication",
    slug: "understanding-jwt-authentication",
    summary: "How JSON Web Tokens work and how to use them securely.",
    image: "/images/placeholder-tech-10.png",
    content: "This is the full content for the blog post about JWT Authentication...", // Placeholder content
  },
  {
    title: "Introduction to Docker for Developers",
    slug: "introduction-docker-developers",
    summary: "Containerizing your applications for consistent environments.",
    image: "/images/placeholder-tech-11.png",
    content: "This is the full content for the blog post about Docker...", // Placeholder content
  },
  {
    title: "Building Progressive Web Apps (PWAs)",
    slug: "building-progressive-web-apps",
    summary: "Making your web apps reliable, fast, and engaging.",
    image: "/images/placeholder-tech-12.png",
    content: "This is the full content for the blog post about PWAs...", // Placeholder content
  },
  {
    title: "Testing Strategies for Frontend Applications",
    slug: "frontend-testing-strategies",
    summary: "Unit, integration, and end-to-end testing techniques.",
    image: "/images/placeholder-tech-13.png",
    content: "This is the full content for the blog post about Frontend Testing...", // Placeholder content
  },
  {
    title: "Securing Your Node.js Applications",
    slug: "securing-nodejs-applications",
    summary: "Common security vulnerabilities and how to prevent them.",
    image: "/images/placeholder-tech-14.png",
    content: "This is the full content for the blog post about Node.js Security...", // Placeholder content
  },
  {
    title: "Designing Effective Database Schemas",
    slug: "designing-database-schemas",
    summary: "Tips for creating scalable and maintainable database designs.",
    image: "/images/placeholder-tech-15.png",
    content: "This is the full content for the blog post about Database Schemas...", // Placeholder content
  },
]; 