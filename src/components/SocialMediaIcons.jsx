import { socialMediaData } from "../utils/constant";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {socialMediaData.map((media) => (
        <a
          key={media.id}
          className="hover:opacity-50 transition duration-500"
          href={media.link}
          target="_blank"
          rel="noreferrer"
        >
          <img alt={`${media.name}-link`} src={`../assets/${media.name}.png`} />
        </a>
      ))}
    </div>

    // <div className="flex justify-center md:justify-start my-10 gap-7">
    //   <a
    //     className="hover:opacity-50 transition duration-500"
    //     href="https://www.linkedin.com"
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     <img alt="linkedin-link" src="../assets/linkedin.png" />
    //   </a>
    //   <a
    //     className="hover:opacity-50 transition duration-500"
    //     href="https://www.twitter.com"
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     <img alt="twitter-link" src="../assets/twitter.png" />
    //   </a>
    //   <a
    //     className="hover:opacity-50 transition duration-500"
    //     href="https://www.facebook.com"
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     <img alt="facebook-link" src="../assets/facebook.png" />
    //   </a>
    //   <a
    //     className="hover:opacity-50 transition duration-500"
    //     href="https://www.instagram.com"
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     <img alt="instagram-link" src="../assets/instagram.png" />
    //   </a>
    // </div>
  );
};

export default SocialMediaIcons;
