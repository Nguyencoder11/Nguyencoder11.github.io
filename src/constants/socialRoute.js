import { BsTwitter, BsYoutube, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const socialRoute = [
    { icon: <BsTwitter />, link: 'https://x.com/diayti311', showInHero: true, showInContact: true },
    { icon: <BsYoutube />, link: 'https://www.youtube.com/@lenhnguyen1103', showInHero: true, showInContact: false },
    { icon: <BsFacebook />, link: 'https://www.facebook.com/nguyen.lenhnguyen.403', showInHero: true, showInContact: true },
    { icon: <BsGithub />, link: 'https://github.com/lenhnguyen403', showInHero: true, showInContact: false },
    { icon: <BsLinkedin />, link: 'https://www.linkedin.com/in/nguyen-le-lenh-036a11264/', showInHero: true, showInContact: true },
    { icon: <SiGmail />, link: 'mailto:lenhnguyen10a22003@gmail.com', showInHero: false, showInContact: true },
]