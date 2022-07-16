import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebook} from "react-icons/fa";

const aboutConfig = {
  title: `NEW!`,
  subtitle: "SUPERHERO SETS",
  description: `Some lego based lorem ipsum text goes here. Imagine something including the words "Lego" and "Superhero" and "Unique".`,
  socials: [
    { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
    { Social: <FaTwitter />, link: "https://twitter.com/" },
    { Social: <FaFacebook />, link: "https://facebook.com/" },
    { Social: <FaInstagram />, link: "https://instagram.com/" },
  ],
};

export default aboutConfig;
