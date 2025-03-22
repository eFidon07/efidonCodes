import { useState } from "react";
import { FooterLinks, TextArea, TextInput } from "../components";
import { Send2 } from "iconsax-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    whatsappPhone: "",
    projectDetails: "",
    budget: 0,
  });

  return (
    <section className="w-full min-h-screen md:h-screen">
      <div className="max-w-screen-2xl w-full mx-auto h-full flex flex-col px-10 pt-28 text-white">
        <p className="border-b pb-2 mb-4">Contact me</p>

        <form
          method="post"
          className="w-full md:w-[800px] mt-8 flex flex-col gap-y-7 pb-20"
        >
          <TextInput
            label="Your name"
            name="username"
            id="your-name"
            value={contactInfo.name}
            placeholder="e.g. John doe"
            onTextChange={(e) =>
              setContactInfo((prev) => ({ ...prev, name: e.target.value }))
            }
          />

          <TextInput
            label="Your email"
            name="email"
            id="your-email"
            type="email"
            value={contactInfo.email}
            placeholder="e.g. johndoe@email.com"
            onTextChange={(e) =>
              setContactInfo((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <TextArea
            label="Tell me about your project"
            value={contactInfo.projectDetails}
            placeholder="e.g. I need a website for my business"
            onTextChange={(e) =>
              setContactInfo((prev) => ({
                ...prev,
                projectDetails: e.target.value,
              }))
            }
          />

          <TextInput
            label="What's your budget?"
            name="budget"
            id="your-budget"
            type="text"
            value={
              contactInfo.budget === 0
                ? ""
                : contactInfo.budget.toLocaleString()
            }
            placeholder="e.g. 3,000"
            onTextChange={(e) =>
              setContactInfo((prev) => ({
                ...prev,
                budget: parseInt(e.target.value.replace(/\D/g, "")) || 0,
              }))
            }
          />

          <button
            type="button"
            className="group mt-4 w-full md:w-[400px] h-[80px] bg-[#242424] flex items-center justify-center border border-transparent hover:border-lime-500/85 hover:text-lime-500 transition-all duration-300"
          >
            <span className="text-lg">Send</span>
            <Send2
              size={20}
              className="ml-4 md:w-0 md:invisible md:group-hover:w-fit md:group-hover:visible md:group-hover:ml-4 transition-[margin] duration-300"
            />
          </button>
        </form>

        {/* Footer */}
        <div className="max-w-screen-2xl w-full bg-[#121212] py-4 px-10 fixed left-1/2 -translate-x-1/2 bottom-0 mt-auto flex items-end justify-between">
          <Link
            to="mailto:efidoncodes@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm underline hover:text-lime-500 hover:no-underline"
          >
            efidoncodes@gmail.com
          </Link>

          {/* Footer links */}
          <FooterLinks />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
