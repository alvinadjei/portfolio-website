import Link from "next/link";
import Image from "next/image";
import { IconContext } from "react-icons";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function FeaturedProject({ title, description, technologies, links, image }) {
    return (
        <div className="flex text-lightgrey">
            <a
                    className="hover:text-tiel"
                    href={links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                >
            <div className="absolute right-[15%] bottom-0 bg-tiel hover:bg-background rounded-md">
                
                    <Image 
                        className="rounded-md opacity-85 hover:opacity-100 transition-all duration-300"
                        src={image}
                        alt={`${image}`}
                        width="520"
                        height="325"
                    />
                
            </div></a>
            <div className="relative left-[15%] bottom-0">
                <ProjectTitle title={title} links={links}/>
                <ProjectDescription description={description}/>
                <ProjectTechnologies technologies={technologies}/>
                <ProjectLinks github={links[0]} link={links[1]}/>
            </div>
        </div>
    );
}

const ProjectTitle = ({ title, links }) => (
    <h2 className="pb-[10px] text-[25px] text-gray-200">
        <a 
            className="hover:text-tiel"
            href={links[1] ? links[1] : links[0]}
            target="_blank"
            rel="noopener noreferrer"
        >
        {title}
        </a>
    </h2>
);

const ProjectDescription = ({ description }) => (
    <div className="bg-lightbg max-w-[30vw] p-[20px] rounded-md shadow-sm">
        {description}
    </div>
);

const ProjectTechnologies = ({ technologies }) => (
    <ul className="flex justify-left py-[10px] text-[15px] font-[family-name:var(--font-roboto-mono)]">
        {technologies.map((tech, index) => (
            <li
                className="pr-[20px]"
                key={index}
            >
                {tech}
            </li>
        ))}
    </ul>
);

const ProjectLinks = ({ github, link }) => (
    <ul className="flex pt-[10px] text-gray-200">
        <li className="pr-[20px]">
            <a 
                className="hover:text-tiel"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FiGithub className="text-[20px]"/>
            </a>
        </li>
        {link ? 
            <li className="">
                <a
                    className="hover:text-tiel"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiExternalLink className="text-[20px]"/>
                </a>
            </li>
        : null
        }
        
    </ul>
);