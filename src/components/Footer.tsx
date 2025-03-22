import { Link } from "react-router-dom";
import { footerlinks } from "../data/constants";

const FooterLinks = () => {
  return (
    <footer className="w-fit flex items-center gap-x-3">
      {footerlinks.map((link, index) => (
        <Link
          key={index}
          to={link.url}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-lime-500"
        >
          <link.Label />
        </Link>
      ))}
    </footer>
  );
};

export default FooterLinks;
