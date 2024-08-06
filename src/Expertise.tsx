const skills = [
  { name: "Java", level: 90 },
  { name: "Kotlin", level: 85 },
  { name: "C#", level: 80 },
  { name: "PHP", level: 75 },
  { name: "HTML", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "CSS", level: 85 },
];

const ProgressBar = ({ level }) => (
  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
    <div
      className="bg-blue-600 h-4 rounded-full"
      style={{ width: `${level}%` }}
    ></div>
  </div>
);

const Expertise = () => (
  <div className="bg-blue-900 p-5 rounded-lg mt-2">
    <div id="expertise">
      <div id="expertise_title" className="font-semibold mb-2">
        Expertise
      </div>
      <div className="opacity-70">
        <div className="container mx-auto px-4 py-8">
          <p className="mb-4">
            I have a diverse skill set that spans multiple programming languages
            and frameworks. Below is a visual representation of my proficiency
            in each area.
          </p>
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <ProgressBar level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Expertise;
