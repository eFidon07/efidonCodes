import { useState } from "react";
import { FooterLinks, TextArea, TextInput } from "../components";
import { Happyemoji, Send2 } from "iconsax-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    projectDetails: "",
    budget: 0,
  });

  const [formState, setFormState] = useState({
    error: false,
    loading: false,
  });

  const submitForm = async () => {
    switch (true) {
      case contactInfo.name === "":
        return toast.error("Please enter your name");
      case contactInfo.email === "":
        return toast.error("Please enter your email");
      case !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        contactInfo.email
      ):
        return toast.error("Please enter a valid email address");
      case contactInfo.projectDetails === "":
        return toast.error("Kindly tell me about your project");
    }

    setFormState({ error: false, loading: true });

    const data = {
      mailAuthentication: {
        email: import.meta.env.VITE_ADMIN_MAIL,
        pass: import.meta.env.VITE_ADMIN_PASS,
      },
      mailFrom: `${contactInfo.name} ${contactInfo.email}`,
      mailTo: "efidoncodes@gmail.com",
      subject: "New contact from your website",
      text: `Hi, my name is ${contactInfo.name}.\nI have a project I want to work on and the details goes as follows:\n${contactInfo.projectDetails}.\nMy budget is $${contactInfo.budget}\n\nMy email address is ${contactInfo.email}`,
      html: `<p>Hi, my name is ${contactInfo.name}.<br />I have a project I want to work on and the details goes as follows:<br/>${contactInfo.projectDetails}.<br/>My budget is $${contactInfo.budget}<br/><br/>My email address is ${contactInfo.email}</p>`,
      sentFrom: "efidonCodes",
    };

    try {
      const response = await fetch(
        "https://send-email-api-bvsz.onrender.com/api/v1/mail/send",
        {
          body: JSON.stringify(data),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      await response.json();

      if (response.ok) {
        setContactInfo({
          name: "",
          email: "",
          projectDetails: "",
          budget: 0,
        });

        toast.success("Email sent successfully");
      } else throw response;

      setFormState({ error: false, loading: false });
    } catch (error: unknown) {
      console.log(error);
      setFormState({ error: true, loading: false });
    }
  };

  return (
    <section className="w-full min-h-screen md:h-screen">
      <div className="max-w-screen-2xl w-full mx-auto h-full flex flex-col items-center px-10 pt-28 text-white">
        <p className="w-full ml-auto border-b pb-2 mb-4">Contact me</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}
          method="post"
          className="w-full md:w-[800px] mt-8 flex flex-col items-center gap-y-7 pb-20"
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

          {formState.error && (
            <p className="text-red-500 mr-auto -mt-3">
              An error occurred while sending the mail. Please try again!
            </p>
          )}

          <button
            type="submit"
            className={`group mt-4 w-full md:w-[400px] h-[80px] bg-[#242424] flex items-center justify-center border border-transparent ${
              formState.loading
                ? "border-lime-500 text-lime-500"
                : "hover:border-lime-500/85 hover:text-lime-500"
            } transition-all duration-300`}
          >
            {formState.loading ? (
              <>
                <Happyemoji className="animate-spin" />
                <span className="ml-3">Sending...</span>
              </>
            ) : (
              <>
                <span className="text-lg">Send</span>
                <Send2
                  size={20}
                  className="ml-4 md:w-0 md:invisible md:group-hover:w-fit md:group-hover:visible md:group-hover:ml-4 transition-[margin] duration-300"
                />
              </>
            )}
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
