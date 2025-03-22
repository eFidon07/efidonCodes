import { project, work } from "../data/work";
import { ProjectCard } from "../components";
import { useState } from "react";

const ProjectPage = () => {
  const projectCategory: ("work" | "project")[] = ["work", "project"];

  const [category, setCategory] = useState<"work" | "project">("work");
  const apps = category === "work" ? work : project;

  return (
    <section className="w-full min-h-screen pb-10">
      <div className="max-w-screen-2xl w-full mx-auto h-full flex flex-col px-10 pt-28 text-white">
        {/* Category section */}
        <div className="relative md:overflow-hidden border-b flex">
          {projectCategory.map((label, index) => (
            <button
              key={index}
              onClick={() => setCategory(label)}
              className={`relative w-28 pb-2 ${
                category === label && "text-lime-500"
              } text-sm overflow-hidden text-center`}
            >
              My {label}s
            </button>
          ))}

          {/* Indicator */}
          <div
            className={`absolute bottom-0 ${
              category === "work" ? "left-0" : "left-28"
            } w-28 h-1 bg-lime-500 rounded-t-md transition-all duration-300`}
          ></div>
        </div>

        {/* Works/Projects list */}
        <div>
          {apps.length ? (
            apps.map((app, index) => <ProjectCard key={index} project={app} />)
          ) : (
            <p className="text-2xl mt-16 text-center">No {category} yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
