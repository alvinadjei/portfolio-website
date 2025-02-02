import { LuLinkedin, LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const email = {
    "logo": <MdOutlineEmail />,
    "handle": "alvinadjei@alumni.harvard.edu",
    "platform": "Email",
    "link": "mailto:alvinadjei@alumni.harvard.edu",
};
const linkedin = {
    "logo": <LuLinkedin />,
    "handle": "@alvin-adjei",
    "platform": "LinkedIn",
    "link": "https://www.linkedin.com/in/alvin-adjei/",
};
const github = {
    "logo": <LuGithub />,
    "handle": "alvinadjei",
    "platform": "GitHub",
    "link": "https://github.com/alvinadjei",
};

export const cards = [email, linkedin, github, ];
