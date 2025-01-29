import Link from "next/link";

export default function FeaturedProject({ title, description, technologies, links }) {
    return (
        <div className="row text-lightgrey">
            <div className="absolute right-[20%] bottom-0 flex flex-col">
                featured project image
            </div>
            <div className="relative left-[20%] bottom-0 flex flex-col">
                <ProjectTitle title={title} link=""/>
                <ProjectDescription description="description"/>
                <ProjectTechnologies technologies={technologies}/>
                <ProjectLinks github={links[0]} link={links[1]}/>
            </div>
        </div>
    );
}

const ProjectTitle = ({ title, link }) => (
    <h2 className="pb-[10px] text-[25px] text-gray-200">
        <Link 
            className="hover:text-tiel"
            href={`/${link}`}
        >
        {title}
        </Link>
    </h2>
);

const ProjectDescription = ({ description }) => (
    <div className="bg-lightbg max-w-[30vw] p-[20px] rounded-sm shadow-sm">
        Watcha know bout rollin down in the deep when your brain gets numb you can call that mental freeze yeah
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
    <ul className="flex text-gray-200">
        <li className="pr-[20px]">
            <a 
                className="hover:text-tiel"
                href={`${github}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                github
            </a>
        </li>
        <li className="">
            <a
                className="hover:text-tiel"
                href={`${link}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                other
            </a>
        </li>
    </ul>
);