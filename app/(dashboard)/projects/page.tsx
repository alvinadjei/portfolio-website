import FeaturedProject from "@/app/ui/projects/featured_project";
import { proj1, proj2, proj3, proj4, proj5, proj6 } from "../../ui/projects/project_consts";

const projects = [proj1, proj2, proj3, proj4, proj5, proj6];

export default function Page() {
    return (
        <div className="page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">my projects</h1>
            <hr className="page-title-line"></hr>
            <ul className="mt-[25px]">
                {projects.map((project, index) => (
                    <li key={index} className="relative my-[100px] h-[325px]">
                        <FeaturedProject
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