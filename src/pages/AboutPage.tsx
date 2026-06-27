import Background from "../assets/background-image-3.jpg";
import { mySkills, techNTools } from "../data/constants";
import { jobs } from "../data/jobs";
import FooterLinks from "../components/ui/Footer";

const AboutPage = () => {
  return (
    <section
      className="w-full min-h-screen pb-20 md:pb-12"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.8)), url(${Background})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-screen-2xl w-full mx-auto h-full flex flex-col px-10 pt-28">
        <p className="border-b pb-2 mb-4">About me</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">
          Emmanuel&nbsp;<span className="text-lime-500">Ifidon</span>
        </h1>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-3/4">
            <span className="block w-fit mt-1 font-light">
              Full-stack web & mobile developer
            </span>
            <p className="font-light text-lg md:text-xl lg:text-2xl mt-6">
              I'm a backend-leaning full-stack developer who genuinely enjoys
              the puzzle of building systems that just work—solid APIs, smart
              database design, clean code that doesn't fall apart under
              pressure. There's something satisfying about getting the
              architecture right. <br />
              That said, I'm just as comfortable jumping into the frontend when
              a project calls for it, making sure the experience on the other
              end feels just as solid as what's running underneath. <br />
              I'm always tinkering and learning, on the job and off, to sharpen
              my skills across the stack and keep up with where the industry's
              heading. I'm into working with good teams on projects where the
              engineering actually matters—not just shipping features, but
              building things that hold up, end to end.
            </p>
          </div>

          <div className="w-full md:max-w-[20%] mt-12 md:mt-0">
            {/* Skills */}
            <div>
              <p className="underline text-lime-500">My expertise</p>
              <div className="flex flex-col gap-y-1.5 mt-2 font-light">
                {mySkills.map((skill, index) => (
                  <span key={index} className="text-sm capitalize">
                    {skill.name}&nbsp;({skill.proficiencyLevel})
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
                    {tool.name}&nbsp;({tool.proficiencyLevel})
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
                  className="w-75 mb-3"
                />
              ) : (
                <p className="text-5xl text-lime-500">{job.company.name}</p>
              )}

              <p className="text-xs text-lime-500 mb-3">
                Role:{" "}
                <span className="text-white">
                  {job.role.map(
                    (role, index) =>
                      `${role}${index < job.role.length - 1 ? " | " : ""}`,
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
                      )),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="max-w-screen-2xl w-full bg-black py-4 px-10 fixed left-1/2 -translate-x-1/2 bottom-0 mt-auto flex flex-wrap items-end justify-between gap-y-4">
          <a
            href="mailto:efidoncodes@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm underline hover:text-lime-500 hover:no-underline"
          >
            efidoncodes@gmail.com
          </a>

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
