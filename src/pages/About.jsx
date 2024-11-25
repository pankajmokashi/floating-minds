import GrowthChart from "../components/GrowthChart";

const data = [
  {
    name: "Mission Statement",
    desc: "At Floating Minds Infotech, our mission is to empower individuals with the latest IT skills and knowledge, positioning them as leaders in the fast-paced world of technology. Located in the vibrant city of Hasapsar, Pune, we are dedicated to providing cutting-edge training programs that leverage modern technology and industry best practices. Our commitment lies in nurturing talent, fostering innovation, and enabling our students to thrive in a dynamic IT landscape. Through comprehensive courses, hands-on learning experiences, and personalized guidance, we aim to shape the next generation of IT professionals equipped to tackle real-world challenges and drive meaningful change. Join us at Floating Minds Infotech, where learning knows no bounds, and possibilities are limitless.",
  },
  {
    name: "Our Core Values",
    desc: "At Floating Minds Infotech, we are not just a training institute; we are the gateway to a bright and successful career in information technology. Located in the bustling city of Hasapsar, Pune, we offer unparalleled opportunities for aspiring IT professionals to excel and thrive in the digital age. With our modern technology-infused training programs, expert faculty, and industry-aligned curriculum, we provide students with the tools they need to embark on a journey towards a fulfilling career in IT. Whether you’re a seasoned professional looking to upskill or a fresh graduate eager to kickstart your career, Floating Minds Infotech is your trusted partner for realizing your ambitions. Join us and unlock endless possibilities for growth, innovation, and success in the dynamic world of information technology.",
  },
  {
    name: "Our Philosophy",
    desc: "At Floating Minds Infotech, we believe that education is the cornerstone of success in the ever-evolving fields of Information Technology and Digital Marketing. Our philosophy is rooted in the belief that every individual has the potential to thrive in these dynamic industries given the right guidance, resources, and support. We are committed to providing comprehensive and cutting-edge training courses that not only equip our students with the technical skills and knowledge needed to excel but also nurture their creativity, critical thinking, and problem-solving abilities. Our philosophy centers on fostering a learning environment that encourages curiosity, innovation, and continuous growth. We believe in empowering our students to embrace change, adapt to new technologies, and become lifelong learners who are capable of making meaningful contributions to the digital world.",
  },
];

function About() {
  return (
    <main>
      <section className="bg-[#3AA6B9] py-16 sm:py-24 mb-8 sm:mb-16">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-16">
          <h1 className="text-white text-4xl xm:text-6xl font-bold text-center">
            About Us
          </h1>
        </div>
      </section>
      <div className="bg-white py-12">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-16">
          <section>
            <div className="mb-16">
              <h2 className="text-2xl xm:text-4xl font-medium text-center mb-8">
                Best IT Training Institute in Hadapar, Pune
              </h2>
              <p className="text-sm md:text-base text-[#454f5e]">
                Welcome to Floating Minds Infotech, the leading IT
                training institute in Hadapsar, Pune. With a commitment to
                excellence and a passion for nurturing talent, we stand as the
                foremost destination for IT enthusiasts seeking top-tier
                education. At Floating Minds Infotech, we pride ourselves on our
                comprehensive range of courses designed to cater to diverse
                skill levels and interests. Whether you&apos;re a beginner
                venturing into the world of technology or a seasoned
                professional looking to expand your expertise, our expert-led
                programs are tailored to meet your needs. What sets us apart is
                our unwavering dedication to providing unparalleled learning
                experiences. Through small, focused classes and personalized
                attention, we ensure that each student receives the guidance and
                support they need to succeed. Our skilled mentors bring years of
                industry experience to the classroom, offering invaluable
                insights and practical knowledge that prepare our students for
                real-world challenges. Located in the heart of Hadapsar, our
                state-of-the-art facilities provide an ideal environment for
                immersive learning. Equipped with the latest tools and
                technologies, our labs and classrooms foster innovation and
                collaboration, enabling students to unleash their full
                potential. Join us at Floating Minds Infotech and embark on a
                transformative journey towards a rewarding career in IT.
                Experience the difference of learning with the best and discover
                endless possibilities for success.
              </p>
            </div>
            <GrowthChart />
          </section>
          <section>
            {data.map((item) => (
              <div
                key={item.name}
                className="mt-8 sm:mt-16 pt-8 sm:pt-16 border-t border-slate-400 flex flex-col md:flex-row gap-4 md:gap-8"
              >
                <h4 className="min-w-[200px] text-lg font-medium">
                  {item.name}
                </h4>
                <p className="text-sm sm:text-base md:text-sm lg:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}

export default About;
