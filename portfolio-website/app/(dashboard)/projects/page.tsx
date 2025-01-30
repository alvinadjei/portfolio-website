import FeaturedProject from "@/app/ui/projects/featured_project";

const proj1 = {
    "title": "3D Solar System Model",
    "description": 
        `A 3D rendering of the Solar System built with Unity. Fly around and explore the solar system,
        complete with planets, the Sun, and Earth's moon rotating and orbiting at relatie speeds`,
    "technologies": ["Unity", "C#", ],
    "links": ["https://github.com/alvinadjei/3D-Solar-System-Model", null],
    "image": "/projects/solar_system.png",
};

const proj2 = {
    "title": "Postur",
    "description": `Cross-platform mobile app for planning, publicizing, and finding local events. Built with Flutter and Firebase, Postur features an interactive map interface, a personalized QR code to scan for admission to events, and groups called "Tags" that can all be invited to an event at once.`,
    "technologies": ["Flutter", "Dart", ],
    "links": ["https://github.com/alvinadjei/postur", "https://www.figma.com/proto/5NoiyVPt5uXJUFyY8ZIGDx/Postur-Main?page-id=0%3A1&node-id=30-875&viewport=-4858%2C1234%2C0.93&scaling=scale-down&starting-point-node-id=30%3A875"],
    "image": "/projects/solar_system.png",
};

const proj3 = {
    "title": "Postur",
    "description": `Cross-platform mobile app for planning, publicizing, and finding local events. Built with Flutter and Firebase, Postur features an interactive map interface, a personalized QR code to scan for admission to events, and groups called "Tags" that can all be invited to an event at once.`,
    "technologies": ["Flutter", "Dart", ],
    "links": ["https://github.com/alvinadjei/postur", "https://www.figma.com/proto/5NoiyVPt5uXJUFyY8ZIGDx/Postur-Main?page-id=0%3A1&node-id=30-875&viewport=-4858%2C1234%2C0.93&scaling=scale-down&starting-point-node-id=30%3A875"],
    "image": "/projects/solar_system.png",
};

const projects = [proj1, proj2, proj3];

export default function Page() {
    return (
        <div className="page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">my projects</h1>
            <hr className="page-title-line"></hr>
            <ul className="pt-[75px]">
                {projects.map((project, index) => (
                    <li key={index} className="relative mt-[50px] mb-[100px]">
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