import { Link } from "react-router-dom";
import Background from "../assets/background-image-3.jpg";
import { FooterLinks } from "../components";
import { mySkills, techNTools } from "../data/constants";
import { jobs } from "../data/jobs";

const AboutPage = () => {
  return (
    <section
      className="w-full min-h-screen overflow-auto pb-20 md:pb-12"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.8)), url(${Background})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-screen-2xl w-full mx-auto h-full flex flex-col px-10 pt-28">
        <p className="border-b pb-2 mb-4">About me</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">
          eFidon<span className="text-lime-500">Codes</span>
        </h1>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/4">
            <span className="block w-fit mt-1 font-light">
              Full-stack web & mobile developer
            </span>
            <p className="font-light text-xl md:text-2xl lg:text-3xl mt-6">
              I'm a passionate and fast-learning full-stack web and mobile
              developer with a strong desire to build and improve digital
              products. I love coding and enjoy the process of solving complex
              problems through clean and efficient code. <br />
              While I'm still growing my experience, I'm constantly
              learning—both on the job and in my free time—to refine my skills
              and stay up to date with the latest technologies. I’m eager to
              take on new challenges, collaborate with others, and contribute to
              meaningful projects that enhance user experiences and drive
              innovation.
            </p>
          </div>

          <div className="w-full md:max-w-[20%] mt-12 md:mt-0">
            {/* Skills */}
            <div>
              <p className="underline text-lime-500">My expertise</p>
              <div className="flex flex-col gap-y-1.5 mt-2 font-light">
                {mySkills.map((skill, index) => (
                  <span key={index} className="text-sm capitalize">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech and tools */}
            <div className="mt-8">
              <p className="underline text-lime-500">Tech I use</p>
              <ul className="flex flex-wrap gap-y-1.5 gap-x-4 mt-2 font-light list-disc list-inside">
                {techNTools.map((tool, index) => (
                  <li key={index} className="text-sm">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-20">
          <p className="mb-2">Work Experience</p>

          {jobs.map((job, index) => (
            <div key={index} className="pt-6 mb-6 border-t">
              {job.company.logo ? (
                <img
                  src={job.company.logo}
                  alt={`${job.company.name}'s logo`}
                  className="w-[300px] mb-3"
                />
              ) : (
                <p className="text-5xl text-lime-500">{job.company.name}</p>
              )}

              <p className="text-xs text-lime-500 mb-3">
                Role:{" "}
                <span className="text-white">
                  {job.role.map(
                    (role, index) =>
                      `${role}${index < job.role.length - 1 ? " | " : ""}`
                  )}
                </span>
              </p>

              <div className="flex flex-col md:flex-row justify-between">
                <p className="w-full md:w-1/2 text-sm">{job.description}</p>

                <div className="w-full md:max-w-[30%] flex flex-col mt-12 md:mt-0">
                  <span role="heading" className="md:text-sm text-lime-500">
                    Technologies used:
                  </span>

                  <ul className="flex flex-wrap gap-y-1.5 gap-x-4 mt-2 font-light list-disc list-inside">
                    {job.techUsed.map((tech) =>
                      tech.technologies.map((technology, index) => (
                        <li key={index} className="text-sm">
                          {technology}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="max-w-screen-2xl w-full bg-black py-4 px-10 fixed left-1/2 -translate-x-1/2 bottom-0 mt-auto flex flex-wrap items-end justify-between gap-y-4">
          <Link
            to="mailto:efidoncodes@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm underline hover:text-lime-500 hover:no-underline"
          >
            efidoncodes@gmail.com
          </Link>

          {/* Background-image attribution */}
          <p className="text-xs">
            Photo by{" "}
            <a
              href="https://unsplash.com/@jannisbrandt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:no-underline hover:text-lime-500 transition-all duration-300"
            >
              Jannis Brandt
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/turned-on-flat-screen-monitors-and-macbook-pro-4mHaSX8zvJI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:no-underline hover:text-lime-500 transition-all duration-300"
            >
              Unsplash
            </a>
          </p>
          {/* Footer links */}
          <FooterLinks />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
