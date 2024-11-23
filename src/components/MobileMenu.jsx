import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Courses",
    href: "/courses",
    children: [
      {
        name: "Full Stack Java Course",
        href: "/courses/full-stack-java-course",
      },
      { name: "Software Testing", href: "/courses/software-testing" },
      {
        name: "Digital Marketing Course",
        href: "/courses/digital-marketing-course",
      },
    ],
  },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Academics", href: "/academics" },
  { name: "Contact Us", href: "/contact" },
];

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ handleLinkClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="md:hidden">
      <div className="flex flex-col space-y-1 px-2 pb-3 pt-2 border-t">
        {navigation.map((item, index) =>
          item.children ? (
            <div key={item.name} className="relative ml-3">
              <button
                onClick={() => toggleDropdown(index)}
                className={`w-full rounded-md px-3 py-2 text-base font-medium flex items-center justify-center gap-2 ${
                  location.pathname.startsWith("/courses")
                    ? "text-[#6EC1E4]"
                    : "text-black hover:bg-gray-100 sm:hover:text-[#6EC1E4]"
                }`}
              >
                <span>Courses</span>
                <ChevronDownIcon className="w-4 mt-1" />
              </button>
              {dropdownOpen === index && (
                <div className="border-b">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      onClick={handleLinkClick}
                      className={`block px-4 py-2 text-base font-medium hover:bg-gray-100 text-center ${
                        location.pathname === child.href
                          ? "text-[#6EC1E4]"
                          : "text-black hover:bg-gray-100 sm:hover:text-[#6EC1E4]"
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleLinkClick}
              className={`block w-full rounded-md px-3 py-2 text-base font-medium text-center ${
                item.href === location.pathname
                  ? "text-[#6EC1E4]"
                  : "text-black hover:bg-slate-100 sm:hover:text-[#6EC1E4]"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
        <div className="flex justify-center pt-4">
          <div className="flex gap-4 xm:gap-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
