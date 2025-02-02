import FeaturedProject from "@/app/ui/projects/featured_project";
import { projects } from "../../ui/projects/project_consts";

export default function Page() {
    return (
        <div className="lg:block flex flex-col items-center page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">my projects</h1>
            <hr className="page-title-line"></hr>
            <ul className="flex flex-col items-center lg:block  m-[15px] lg:mt-[25px]">
                {projects.map((project, index) => (
                    <li key={index} className="relative mx-[20px] my-[100px] lg:my-[100px] h-[325px]">
                        <FeaturedProject
                            num={index}
                            title={project.title} 
                            description={project.description} 
                            technologies={project.technologies} 
                            links={project.links}
                            image={project.image}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}