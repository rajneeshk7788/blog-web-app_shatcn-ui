// Define a type for your project objects
export interface Project {
  name: string;
  slug: string;
  description: string;
  date: string;
  image: string;
  category: string;
  link?: string; // Optional link
}

export const projectsData: Project[] = [
  {
    name: "Xecta Web Application",
    slug: "xecta-web-application",
    description: "Build a responsive and dynamic front-end for an enhanced user experience. Led front-end development initiatives, enhancing UI/UX and optimizing performance. Utilized React Highcharts, React Flow, and D3.js for advanced data visualization, and employed Material-UI and CSS to craft interactive, responsive interfaces. Collaborated with cross-functional teams to ensure seamless integration across systems, ensuring a cohesive and high-quality user experience.",
    date: "Mar 2023 - present",
    image: "/images/xecta-web-application.png",
    category: "Professional",
  },
  {
    name: "Dashboard Application",
    slug: "dashboard-application",
    description: "Built an interactive data visualization and analytics dashboard. Enhanced a real-time data visualization dashboard utilizing Material-UI, React Highcharts, and related libraries. Engineered reusable UI components to ensure design consistency, scalability, and maintainability while optimizing performance with large datasets. Integrated GraphQL for efficient data retrieval and management, enabling dynamic real-time updates and improving overall application responsiveness and reliability.",
    date: "Jul 2022 - Mar 2023",
    image: "/images/dashboard-application.png",
    category: "Professional",
  },
  {
    name: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description: "Developed a seamless and responsive online shopping interface. Built a responsive online shopping interface with interactive product displays, real-time search, and advanced filters. Gained hands-on experience in UI/UX design, performance optimization, and front-end development using JavaScript. Developed back-end functionality by creating RESTful APIs with Node.js and Express.js, implementing authentication and data validation, and integrating MongoDB for efficient data management, contributing to a scalable full-stack application.",
    date: "Dec 2021 - Apr 2022",
    image: "/images/e-commerce-platform.png",
    category: "Professional",
  },
   {
    name: "Electron Desktop App",
    slug: "electron-desktop-app",
    image: "/images/placeholder-desktop.png",
    description: "A personal desktop application built with Electron.",
    date: "Date of completion/work",
    link: "#",
    category: "Personal",
  },
   {
    name: "Native Android App",
    slug: "native-android-app",
    image: "/images/placeholder-android.png",
    description: "A personal project for building a native Android application.",
    date: "Date of completion/work",
    link: "#",
    category: "Personal",
  },
   {
    name: "Todo App",
    slug: "todo-app",
    image: "/images/placeholder-todo.png",
    description: "A simple todo list application.",
    date: "Date of completion/work",
    link: "#",
    category: "Personal",
  },
   {
    name: "Weather Info App",
    slug: "weather-info-app",
    image: "/images/placeholder-weather.png",
    description: "An application to display weather information.",
    date: "Date of completion/work",
    link: "#",
    category: "Personal",
  },
]; 