import { ArrowRight } from "iconsax-react";
import Background from "../assets/background-image-2.jpg";
import { FooterLinks } from "../components";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section
      className="w-full min-h-screen md:h-dvh bg-right-top md:bg-right"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full mx-auto h-full flex flex-col px-8 md:px-10 pt-[32vh] text-white">
        <div className="w-fit mx-auto">
          <p className="md:text-xl text-center md:text-left mb-1">
            Hi, I&apos;m eFidon<span className="text-lime-500">Codes</span>
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[69px] 2xl:leading-[69px] font-medium flex flex-wrap items-center justify-center gap-x-4">
            <span>Backend(focused)</span>
            <span className="hidden md:block w-24 h-3 bg-lime-500" />{" "}
            <span className="text-lime-500">Full-stack Developer</span>
          </h2>
        </div>

        {/* Footer */}
        <div className="mt-32 md:mt-auto mb-6 flex flex-col md:flex-row items-center md:items-end justify-between gap-y-4">
          <div className="w-[354px] h-[189px] bg-[rgba(53,53,53,0.3)] p-4 border border-zinc-400 rounded-2xl backdrop-blur-sm text-xs flex flex-col justify-between">
            <p className="flex items-center gap-x-0.5 text-lime-500">
              •<span>info</span>
            </p>
            <p className="leading-5">
              Blending aesthetics with functionality, I build robust web and
              mobile applications with a keen eye for design. I enjoy enhancing
              the visual appeal of digital products while ensuring seamless
              usability and performance.
            </p>
            <button
              onClick={() => navigate("/work")}
              className="w-fit flex items-center gap-x-1 hover:gap-x-2 hover:text-lime-500 transition-all duration-300 mt-1"
            >
              <span>explore</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Background-image attribution */}
          <p className="text-xs mt-4">
            Photo by{" "}
            <a
              href="https://unsplash.com/@emilep?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:no-underline hover:text-lime-500 transition-all duration-300"
            >
              Emile Perron
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/macbook-pro-showing-programming-language-xrVDYZRGdw4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
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

export default HomePage;
