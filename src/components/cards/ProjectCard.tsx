import { Link } from "react-router-dom";
import { ProjectProps, WorkProps } from "../../app.types";
import { ExternalLink } from "../";

const ProjectCard = (props: { project: ProjectProps | WorkProps }) => {
  return (
    <div>
      <div className="pt-8 pb-6 border-b">
        {props.project.logo ? (
          <img
            src={props.project.logo}
            alt={`${props.project.title}'s logo`}
            className="w-fit"
          />
        ) : (
          <p className="text-5xl">{props.project.title}</p>
        )}
        <span className="w-1/2 text-xs text-lime-500">
          {props.project.type}
        </span>

        <div className="flex flex-col md:flex-row gap-x-[5%] mt-2">
          <div className="w-full md:w-[45%]">
            <p
              dangerouslySetInnerHTML={{ __html: props.project.description }}
              className="text-sm"
            />

            <Link
              to={props.project.projectLink}
              className="hidden md:block w-fit mt-4 underline underline-offset-2 text-sm hover:text-lime-500 hover:no-underline transition-all duration-300"
              target="_blank"
              rel="noreferrer noopener"
            >
              Visit website
            </Link>
          </div>

          <div className="md:w-1/4 flex md:flex-col justify-between md:justify-start mt-4 md:mt-0 gap-y-4">
            {/* Project role */}
            <div>
              <p>Role</p>
              <span className="text-sm text-lime-500 capitalize">
                {props.project.category} developer
              </span>
            </div>

            {/* Project duration */}
            <div>
              <p>Started in</p>
              <span className="text-sm text-lime-500 capitalize">
                {props.project.startDate.month}&nbsp;
                {props.project.startDate.year}
              </span>
            </div>
          </div>

          {"collaborators" in props.project &&
          props.project.collaborators?.length ? (
            <div className="mt-4 md:mt-0 w-[20%]">
              <p>Collaborators</p>
              <ul className="w-full flex flex-col gap-y-2">
                {props.project.collaborators.map((collaborator, index) => (
                  <li
                    key={index}
                    className="w-[180px] hover:underline text-sm capitalize text-lime-500"
                  >
                    <Link
                      to={collaborator.website}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-full flex items-center justify-between"
                    >
                      <span>{collaborator.name}</span>
                      <ExternalLink fillClass="fill-lime-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <Link
            to={props.project.projectLink}
            className="block md:hidden w-fit mt-7 underline underline-offset-2 text-sm hover:text-lime-500 hover:no-underline transition-all duration-300"
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
