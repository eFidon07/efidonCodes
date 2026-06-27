import { Link } from "@tanstack/react-router";
import ExternalLink from "../icons/ExternalLink";
import type { ProjectProps, WorkProps } from "../../app.types";

const ProjectCard = (props: {
  project: ProjectProps | (WorkProps & { widthClass: string });
}) => {
  return (
    <div>
      <div className="pt-8 pb-6 border-b">
        {props.project.logo ? (
          <div className="flex items-center gap-x-4">
            <img
              src={props.project.logo}
              alt={`${props.project.title}'s logo`}
              className={`${
                "widthClass" in props.project && props.project.widthClass
                  ? props.project.widthClass
                  : "w-fit"
              } object-contain`}
            />

            {props.project.showTitleWithLogo && (
              <p className="text-3xl font-semibold">{props.project.title}</p>
            )}
          </div>
        ) : (
          <p className="text-3xl font-semibold">{props.project.title}</p>
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

            <div className="hidden md:flex items-center gap-x-4">
              <Link
                to={props.project.projectLink}
                className="w-fit mt-4 underline underline-offset-2 text-sm hover:text-lime-500 hover:no-underline transition-all duration-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit website
              </Link>

              {props.project.playStoreLink && (
                <Link
                  to={props.project.playStoreLink}
                  className="w-fit mt-4 underline underline-offset-2 text-sm hover:text-lime-500 hover:no-underline transition-all duration-300"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View on Play Store
                </Link>
              )}

              {props.project.appStoreLink && (
                <Link
                  to={props.project.appStoreLink}
                  className="w-fit mt-4 underline underline-offset-2 text-sm hover:text-lime-500 hover:no-underline transition-all duration-300"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View on App Store
                </Link>
              )}
            </div>
          </div>

          <div className="md:w-1/4 flex md:flex-col justify-between md:justify-start mt-4 md:mt-0 gap-y-4">
            {/* Project role */}
            <div>
              <p>Role{props.project.category.length > 1 ? "s" : ""}</p>
              {props.project.category.length > 1 ? (
                <ul className="w-full flex flex-col gap-y-2 mt-1 list-disc list-inside">
                  {props.project.category.map((category, index) => (
                    <li
                      key={index}
                      className="text-sm text-lime-500 capitalize"
                    >
                      {category} developer
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-sm text-lime-500 capitalize">
                  {props.project.category} developer
                </span>
              )}
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
                    className="w-45 hover:underline text-sm capitalize text-lime-500"
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

          <div className="flex flex-wrap md:hidden items-center gap-x-4 gap-y-4 mt-7">
            <Link
              to={props.project.projectLink}
              className="w-fit underline underline-offset-2 text-sm hover:text-lime-500 hover:no-underline transition-all duration-300"
              target="_blank"
              rel="noreferrer noopener"
            >
              Visit website
            </Link>

            {props.project.playStoreLink && (
              <Link
                to={props.project.playStoreLink}
                className="w-fit underline underline-offset-2 text-sm hover:text-lime-500 hover:no-underline transition-all duration-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                View on Play Store
              </Link>
            )}

            {props.project.appStoreLink && (
              <Link
                to={props.project.appStoreLink}
                className="w-fit underline underline-offset-2 text-sm hover:text-lime-500 hover:no-underline transition-all duration-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                View on App Store
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
