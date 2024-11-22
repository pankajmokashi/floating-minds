import { Link } from "react-router-dom";

const courses = [
  {
    name: "Full Stack Java Course",
    desc: "The Full Stack Java course covers front-end, back-end development, and database management. Learn Java, Spring, Hibernate, JavaScript, HTML, CSS, and more, preparing you for comprehensive web development roles.",
    img: "/images/full-stack-java.jpg",
    link: "/courses/full-stack-java-course",
  },
  {
    name: "Software Testing",
    desc: "Software testing involves evaluating applications to ensure they function correctly, covering manual and automation testing, with methods like unit, integration, and performance testing to identify and fix bugs.",
    img: "/images/software-testing.jpg",
    link: "/courses/software-testing",
  },
  {
    name: "Digital Marketing",
    desc: "Digital marketing promotes products or services through online channels like social media, SEO, email, and PPC. It helps businesses reach wider audiences, drive traffic, and increase engagement effectively.",
    img: "/images/digital-marketing.jpg",
    link: "/courses/digital-marketing-course",
  },
  {
    name: "Python Course",
    desc: "Python is a powerful, easy-to-learn programming language used for web development, data analysis, AI, and automation. It offers readability, extensive libraries, cross-platform support, and a large community.",
    img: "/images/python.jpg",
    link: "/courses",
  },
  {
    name: "Data Science",
    desc: "Data science involves analyzing and interpreting complex data using statistical techniques, machine learning, and algorithms to gain insights, make predictions, and drive decision-making in various fields like business and healthcare.",
    img: "/images/data-science.jpg",
    link: "/courses",
  },
  {
    name: "C and C++",
    desc: "C is a foundational programming language known for system-level programming, while C++ builds on C with object-oriented features, offering more flexibility for software development, games, and high-performance applications.",
    img: "/images/c-cpp.jpg",
    link: "/courses",
  },
];

function CourseCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg::gap-12">
      {courses.map((course, ind) => (
        <div key={ind} className="card rounded-md max-w-sm mx-auto">
          <div className="">
            <img
              className="w-full rounded-t-md aspect-video"
              src={course.img}
              alt={course.name}
            />
          </div>
          <div className="px-4 py-6">
            <h6 className="text-center pb-2 text-xl sm:text-2xl font-semibold">
              {course.name}
            </h6>
            <p className="text-xs xm:text-sm sm:text-xs md:text-sm lg:text-xs xl:text-sm line-clamp-5">
              {course.desc}
            </p>
            <div className="mt-2 flex justify-center">
              <Link
                to={course.link}
                className=" text-[#24A9B2] hover:bg-slate-100 px-6 py-2 rounded-3xl text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCards;
