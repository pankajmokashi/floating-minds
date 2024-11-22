import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
  { name: "Blogs", href: "/blogs" },
  { name: "Academics", href: "/academics" },
  { name: "Contact Us", href: "/contact" },
];

const NavLinks = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (index) => {
    setDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <div className="hidden sm:ml-6 md:flex items-center">
      <div className="flex space-x-3 lg:space-x-4">
        {navigation.map((item, index) =>
          item.children ? (
            <div
              key={item.name}
              className="relative px-3 py-2"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`rounded-md text-sm font-medium flex gap-1 items-center ${
                  location.pathname.startsWith("/courses")
                    ? "text-[#6EC1E4]"
                    : "text-black sm:hover:text-[#6EC1E4]"
                }`}
              >
                <span>{item.name}</span>
                <ChevronDownIcon className="w-4 mt-1" />
              </button>
              {dropdownOpen === index && (
                <div className="absolute -left-10 z-10 w-56 pt-3 origin-top-right rounded-b-md  transition focus:outline-none">
                  <div className="bg-white border-t border-[#6EC1E4] py-2 shadow-lg ring-1 ring-black/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`block px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-[#6EC1E4] text-center ${
                          location.pathname === child.href
                            ? "text-[#6EC1E4]"
                            : "text-black sm:hover:text-[#6EC1E4]"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              to={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                item.href === location.pathname
                  ? "text-blue-400"
                  : "text-black sm:hover:text-[#6EC1E4]"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default NavLinks;
