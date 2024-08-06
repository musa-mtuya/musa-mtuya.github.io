const projects = [
  {
    title: "Project One",
    description:
      "This is a brief description of Project One. It showcases my skills in Java and Spring Boot.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    link: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description:
      "This is a brief description of Project Two. It highlights my expertise in Kotlin and Android development.",
    technologies: ["Kotlin", "Android", "Firebase"],
    link: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description:
      "This is a brief description of Project Two. It highlights my expertise in Kotlin and Android development.",
    technologies: ["Kotlin", "Android", "Firebase"],
    link: "https://example.com/project-two",
  },
];

const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="bg-blue-50 shadow-md rounded-lg overflow-hidden mb-6">
    <div className="p-6">
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="bg-blue-900 p-5 rounded-lg mt-2">
    <div id="projectportfolio">
      <div id="projectportfolio_title" className="font-semibold mb-2">
        Project / Portfolio
      </div>
      <div className="opacity-70">
        <div className="container mx-auto px-2 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
