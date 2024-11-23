import { useEffect, useState } from "react";
import CourseCards from "../components/CourseCards";
import GrowthChart from "../components/GrowthChart";

function Home() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setShow(window.innerWidth > 450);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <main>
      <section className="mt-2 sm:mt-8">
        <img className="w-full" src="/images/image1.jpg" alt="header-image" />
      </section>
      <section className="bg-white mt-2 sm:mt-8 py-16">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-16">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-[#24A9B2]">
              Welcome to the Floating Minds Infotech
            </h1>
            <div className="mb-16">
              <p className="mb-4 text-sm sm:text-base">
                Welcome to Floating Minds Infotech, the best IT training
                institute in Hadapsar, Pune, where we empower aspiring
                professionals with industry-leading skills. As a premier
                software training institute, we offer a range of comprehensive
                courses designed to equip students with the expertise needed in
                today&apos;s competitive tech world. Our flagship programs
                include the Full Stack Java Course, where you can master both
                front-end and back-end development, and the Python Course, which
                prepares you for versatile roles in programming and data
                science. We also specialize in Software Testing, ensuring you
                acquire the skills to deliver high-quality software, and our
                Digital Marketing Course equips you with modern marketing
                strategies to excel in the online world.{" "}
                {!show && (
                  <span
                    onClick={() => setShow(true)}
                    className="xm:hidden text-blue-500 cursor-pointer"
                  >
                    Read more...
                  </span>
                )}
              </p>
              {show && (
                <p className="text-sm sm:text-base">
                  At Floating Minds Infotech, we are committed to delivering
                  hands-on training with real-world applications. Our
                  experienced faculty, coupled with state-of-the-art
                  infrastructure, ensures that each student receives
                  personalized attention and practical knowledge. We also
                  provide placement assistance to help you secure top positions
                  in the industry. Join the best Software training institute in
                  Hadapsar and start your career on the path to success with
                  courses designed to meet the demands of today&apos;s evolving
                  IT landscape.
                </p>
              )}
            </div>
          </div>
          <GrowthChart />
        </div>
      </section>

      <div className="bg-white mt-2 sm:mt-8 py-16">
        <section className="mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Floating Minds Infotech</h3>
            <h4 className="text-2xl sm:text-5xl mb-16">
              Best IT Training Institute in Pune
            </h4>
          </div>
          <div>
            <h3 className="text-3xl text-center mb-8">Our Popular Courses</h3>
            <CourseCards />
          </div>
        </section>
        <section className="mt-16 mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-16">
          <div className="bg-[#3AA6B9] rounded-xl text-center px-8 py-16">
            <div>
              <div className="flex justify-center mb-12">
                <div className="w-20 h-1 bg-white rounded-full"></div>
              </div>
              <h4 className="text-white text-2xl sm:text-3xl font-semibold">
                Wish to know more about admissions and updates? Subscribe now!
              </h4>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                  type="email"
                  className="min-w-full xm:min-w-[300px] px-4 py-3 font-medium rounded-xl outline-none"
                  placeholder="Email"
                  required
                />
                <button className="min-w-full xm:min-w-[300px] sm:min-w-0 px-6 py-3 rounded-xl h-full bg-white text-[#6EC1E4] font-semibold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
