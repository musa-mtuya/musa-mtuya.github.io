import { FC } from "react";

const projects = [
  {
    title: "Onboard Super Intendence",
    description:
      "Website project for Obs organization showcasing their product and services in Inspection and Transportation",
    technologies: ["PHP", "Apache", "Google Cloud"],
    link: "https://obs.co.tz/",
  },
  {
    title: "Tumaini Media",
    description:
      "An Android Application to show live tv and Radio streams From local channel Tumaini TV and Radio",
    technologies: ["Java", "AWS", "MySQL"],
    link: "https://play.google.com/store/apps/details?id=com.tumainimedia&hl=en",
  },
  {
    title: "Mofet Tanzania",
    description:
      "A Website Project for Educational Organization dealing with setting school examiniations, guidance, counselling etc",
    technologies: ["PHP", "Apache", "Google Cloud"],
    link: "https://mofet.ac.tz/",
  },
  {
    title: "Kibega",
    description:
      "An E-commerce project, for kibega team, intended to connect buyer and sellers in Vegitable Transactions",
    technologies: ["Kotlin", "Android", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.kibega&hl=en",
  },
];

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard: FC<Project> = ({
  title,
  description,
  technologies,
  link,
}) => (
  <div className="bg-blue-50 shadow-md rounded-lg overflow-hidden mb-6">
    <div className="p-6">
      <h3 className="font-bold mb-1 text-blue-800">{title}</h3>
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
        className="inline-block  text-teal-700 font-semibold py-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        VIEW PROJECT
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
