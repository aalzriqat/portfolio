import React from "react";
import "../Projects.css";

const projectsData = [
  {
    title: "TawaSol",
    description: "Developed a web application aimed at connecting developers, particularly in the Arab World, to build professional networks, share posts, and manage profiles.",
    technologies: "React, Redux, CSS, Node.js, Express.js, MongoDB, JWT, Multer, Git, GitHub, Visual Studio Code",
    contributions: [
      "Developed RESTful APIs using Express.js to handle user authentication, profile management, and post interactions.",
      "Built and optimized frontend components with React, managing state efficiently using Redux.",
      "Integrated MongoDB for efficient data storage, managing database connections with Mongoose.",
      "Ensured secure file uploads and storage using Multer.",
      "Designed and implemented responsive UI components to ensure a seamless user experience across devices.",
      "Performed unit testing and debugging to ensure high code quality and system reliability."
    ],
    screenshot: "path/to/tawasol-screenshot.png"
  },
  {
    title: "Scheduler Application (Amazon Project)",
    description: "Developed a robust scheduling application aimed at optimizing employee shift management, handling swap requests, and managing leave requests.",
    technologies: "React, Redux, CSS Modules, Socket.IO, Node.js, Express, MongoDB, Webpack, Babel, ESLint, Jest",
    contributions: [
      "Integrated real-time notifications via Socket.IO, enabling users to receive instant updates on swap requests, approvals, and other relevant events.",
      "Created an advanced filtering system to enhance accessibility and user experience when managing schedules and preferences.",
      "Developed functionality for exporting schedules and leave requests to Excel, simplifying data sharing and reporting processes.",
      "Designed a fully responsive user interface with a focus on improving accessibility and usability.",
      "Worked closely with cross-functional teams to ensure smooth frontend and backend integration."
    ],
    impact: [
      "Boosted scheduling efficiency by 30% through automation and real-time updates.",
      "Improved user satisfaction by delivering a seamless, user-friendly interface with a wide range of features.",
      "Successfully deployed the application to a cloud-based environment, ensuring scalability and high availability."
    ],
    screenshot: "path/to/scheduler-screenshot.png"
  },
  {
    title: "License Management Program",
    description: "Developed a desktop application for license management using C# and MySQL.",
    technologies: "C#, MySQL, .NET Framework, Windows Forms",
    contributions: [
      "Designed and implemented the software architecture and database schema.",
      "Created features for license creation, management, and reporting.",
      "Implemented user authentication and role-based access control.",
      "Developed a user-friendly interface with Windows Forms.",
      "Ensured application adhered to performance and security standards through rigorous testing and optimization."
    ],
    impact: [
      "Streamlined the license management process, reducing manual effort by 40%.",
      "Improved data accuracy and consistency with a centralized database.",
      "Enhanced security with role-based access control and encrypted data storage."
    ],
    screenshot: "path/to/license-management-screenshot.png"
  },
  {
    title: "Portfolio Website",
    description: "Built a portfolio website using the MERN stack (MongoDB, Express.js, React, Node.js).",
    technologies: "MongoDB, Express.js, React, Node.js, CSS, Git, GitHub, Heroku",
    contributions: [
      "Designed and developed the entire website from scratch using the MERN stack.",
      "Implemented a responsive design to ensure compatibility across various devices.",
      "Showcased technical skills and projects through an interactive web interface.",
      "Integrated a contact form with email notifications using Node.js and Express.js.",
      "Deployed the website to Heroku for easy access and scalability."
    ],
    impact: [
      "Provided a professional online presence to showcase skills and projects.",
      "Received positive feedback from peers and potential employers for the design and functionality.",
      "Increased visibility and networking opportunities through an easily accessible portfolio."
    ],
    screenshot: "path/to/portfolio-screenshot.png"
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="gradient-text">Projects</h2>
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.technologies && (
            <p><strong>Technologies Used:</strong> {project.technologies}</p>
          )}
          <p><strong>Key Contributions:</strong></p>
          <ul>
            {project.contributions.map((contribution, idx) => (
              <li key={idx}>{contribution}</li>
            ))}
          </ul>
          {project.impact && (
            <>
              <p><strong>Impact & Results:</strong></p>
              <ul>
                {project.impact.map((impact, idx) => (
                  <li key={idx}>{impact}</li>
                ))}
              </ul>
            </>
          )}
          {project.screenshot && (
            <img src={project.screenshot} alt={`${project.title} screenshot`} className="project-screenshot" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;