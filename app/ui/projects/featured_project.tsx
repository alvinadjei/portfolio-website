import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function FeaturedProject({ num, title, description, technologies, links, image }: {num: number, title: string, description: string, technologies: Array<string>, links: Array<string>, image: string}) {
    const isEven = num % 2 === 0;
    return (
        <>
            <div className="hidden lg:block justify-center items-center text-lightgrey">
                <a
                    className={`justify-center absolute bottom-0 ${isEven ? "right-[15%] bg-tiel hover:bg-background rounded-md" : "left-[15%] bottom-0 bg-tiel hover:bg-background rounded-md"}`}
                    href={links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image 
                        className="rounded-md opacity-85 hover:opacity-100 transition-all duration-300"
                        src={image}
                        alt={`${image}`}
                        width="520"
                        height="325"
                    />
                        
                </a>
                <div className={`flex flex-col justify-center absolute bottom-0 ${isEven ? "left-[15%] items-start" : "right-[15%] items-end"}`}>
                    <ProjectTitle title={title} links={links} />
                    <ProjectDescription description={description} isEven={isEven} />
                    <ProjectTechnologies technologies={technologies} isEven={isEven} />
                    <ProjectLinks github={links[0]} link={links[1]} isEven={isEven} />
                </div>
            </div>
            <div className="lg:hidden flex justify-start items-center w-[90vw] sm:w-[576px] hover:shadow-2xl rounded-md relative"
                style={{
                    backgroundImage: `url('${image}')`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat", 
                }}
            >
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-background opacity-80 rounded-md"
                />
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-tiel opacity-20 rounded"
                />
                <div className="flex flex-col items-start px-[20px] py-[30px] z-10 text-lightgrey w-[95%]">
                    <ProjectTitle title={title} links={links} />
                    <ProjectDescription description={description} isEven={false} />
                    <ProjectTechnologies technologies={technologies} isEven={false} />
                    <ProjectLinks github={links[0]} link={links[1]} isEven={false} />
                </div>
            </div>
        </>
    );
}

const ProjectTitle = ({ title, links }: {title: string, links: Array<string>}) => (
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

const ProjectDescription = ({ description, isEven }: { description: string, isEven: boolean }) => (
    <div className={`text-wrap p-[20px] max-w-[100%] ${isEven ? "lg:bg-lightbg lg:w-[400px] lg:py-[20px] lg:rounded-md lg:shadow-sm lg:hover:shadow-xl" : "lg:bg-lightbg w-[400px] lg:rounded-md lg:shadow-sm lg:hover:shadow-lg lg:text-right"}`}>
        {description}
    </div>
);

const ProjectTechnologies = ({ technologies, isEven }: { technologies: Array<string>, isEven: boolean }) => (
    <ul className="flex justify-left py-[10px] text-[15px] font-[family-name:var(--font-roboto-mono)]">
        {technologies.map((tech, index) => (
            <li
                className={isEven ? "pr-[20px]" : "pr-[20px] lg:pr-0 lg:pl-[20px]"}
                key={index}
            >
                {tech}
            </li>
        ))}
    </ul>
);

const ProjectLinks = ({ github, link, isEven }: { github: string, link: string, isEven: boolean}) => (
    <ul className="flex pt-[10px] text-gray-200 text-[20px]">
        <li className={isEven? "pr-[20px]" : "pr-[20px] lg:pr-0"}>
            <a 
                className="hover:text-tiel"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FiGithub/>
            </a>
        </li>
        {link ? 
            <li className={isEven ? "" : "lg:pl-[20px]"}>
                <a
                    className="hover:text-tiel"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiExternalLink/>
                </a>
            </li>
        : null
        }
        
    </ul>
);