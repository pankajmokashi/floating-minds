function SocialLinks() {
  return (
    <>
      <a
        href={"https://www.facebook.com/floatingmindsinfotech/"}
        target="_blank"
      >
        <img
          className="w-7 h-7"
          src="/public/images/facebook.png"
          alt="facebook"
        />
      </a>
      <a
        href={"https://www.instagram.com/floating_minds_infotech/"}
        target="_blank"
      >
        <img
          className="w-7 h-7"
          src="/public/images/instagram.png"
          alt="instagram"
        />
      </a>
      <a
        href={"https://www.linkedin.com/company/floating-minds-infotechh"}
        target="_blank"
      >
        <img
          className="w-7 h-7"
          src="/public/images/linkedin.png"
          alt="linkedin"
        />
      </a>
      <a
        href={
          "https://mobile.twitter.com/infotech_minds/status/1644309487782891520"
        }
        target="_blank"
      >
        <img className="w-6 h-6" src="/public/images/x-logo.png" alt="x" />
      </a>
    </>
  );
}

export default SocialLinks;