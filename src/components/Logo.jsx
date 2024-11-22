import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex shrink-0 items-center">
      <Link to="/">
        <img
          alt="Your Company"
          src="/images/FMI-LOGO.png"
          className="w-24 sm:w-28"
        />
      </Link>
    </div>
  );
};

export default Logo;
