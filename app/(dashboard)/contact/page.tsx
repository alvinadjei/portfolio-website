import ContactCard from "@/app/ui/contact/contact_card";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const email = [<MdOutlineEmail />, "alvinadjei@alumni.harvard.edu", "Email", "mailto:alvinadjei@alumni.harvard.edu"];
const linkedin = [ <LuLinkedin />,  "@alvin-adjei", "LinkedIn", "https://www.linkedin.com/in/alvin-adjei/"];
const github = [<LuGithub />, "alvinadjei", "GitHub", "https://github.com/alvinadjei"];

const cards = [
    email,
    linkedin,
    github,
];

export default function Page() {
    return (
        <div className="page-bounds">
            <h1 className="page-title">contact</h1>
            <hr className="page-title-line"></hr>
            <div className="flex justify-evenly pt-10">
                {cards.map((card, index) => (
                    <ContactCard
                        key={index} 
                        logo={card[0]}
                        handle={card[1]}
                        platform={card[2]}
                        link={card[3]}
                    />
                ))}
            </div>
        </div>
    );
}