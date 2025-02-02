import ContactCard from "@/app/ui/contact/contact_card";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
};

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
        <div className="lg:block flex flex-col items-center page-bounds">
            <h1 className="page-title">contact</h1>
            <hr className="page-title-line"></hr>
            <ul className="flex flex-col lg:flex-row lg:flex-wrap justify-evenly pt-[30px]">
                {cards.map((card, index) => (
                    <li key={index}>
                        <ContactCard
                            logo={card[0]}
                            handle={card[1]}
                            platform={card[2]}
                            link={card[3]}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}