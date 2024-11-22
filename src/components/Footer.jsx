import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
// import GoogleMaps from "./GoogleMaps";

function Footer() {
  return (
    <div className="mt-8">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-8 md:px-16 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#454f5e]">
          <div className="sm:col-span-1">
            <div className="flex justify-center">
              <img
                className="w-28 mr-4"
                src="/images/FMI-LOGO.png"
                alt="logo"
              />
            </div>

            <p className="mx-auto text-center sm:text-left sm:mx-0 max-w-xl text-sm xm:text-base lg:text-sm xl:text-base">
              Floating Minds Infotech: &quot;Your premier IT training academy in
              Hadapsar, Pune. Unlock your potential with expert-led courses
              designed to propel your career forward. Join us and embark on a
              transformative learning journey tailored to your success in the
              dynamic world of technology.&quot;
            </p>
          </div>
          <div className="sm:col-span-1 grid grid-cols-1 lg:grid-cols-4 gap-6 text-center sm:text-left lg:pt-2">
            <div className="lg:col-span-2">
              <div className="text-xl font-semibold mb-4">Our Location</div>
              <div className="mx-auto sm:mx-0 max-w-sm text-sm xm:text-base sm:text-sm xl:text-base">
                Office No 203, 2nd Floor, Gandharva Capital, above Hotel
                Kolhapuri, near Sahyadri Hospital, Bhosale Nagar, Hadapsar,
                Pune, Maharashtra 411028
              </div>
              <div>
                {/* <GoogleMaps /> */}
                <a
                  href="https://maps.app.goo.gl/Wp7mVKezMktHo5ek6"
                  target="_blank"
                  className="text-blue-600 text-sm underline"
                >
                  View on google maps
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="text-xl font-semibold mb-4">Contact Us</div>
              <div className="text-sm xm:text-base sm:text-sm xl:text-base">
                <p>+91-986 065 8321</p>
                <p>floatingmindsinfotech@gmail.com</p>
                <p>9:30 a.m. - 6:30 p.m.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 pb-8 flex flex-col items-center justify-between sm:px-8 lg:px-0 sm:flex-row lg:relative lg:justify-center">
          <div className="mb-6 sm:mb-0">
            <Link
              to={"/privacy-policy"}
              className="px-4 py-2 rounded border border-[#e9f8f9] hover:border-black font-semibold"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="lg:absolute lg:right-0 lg:mr-8">
            <div className="flex gap-4 xm:gap-8 sm:gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>
        <p className="text-[10px] xm:text-xs sm:text-sm md:text-base text-center">
          Copyright © 2024 Floating Minds Infotech | Powered by Floating Minds
          Infotech.
        </p>
      </div>
    </div>
  );
}

export default Footer;
