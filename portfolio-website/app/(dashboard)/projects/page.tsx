import FeaturedProject from "@/app/ui/projects/featured_project";

const title1 = "title";
const description1 = "description";
const technologies1 = ["Deez", "Nuts", "And", "Balls"];
const links1 = ["https://github.com/alvinadjei", ""];

export default function Page() {
    return (
        <div className="page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">my projects</h1>
            <hr className="page-title-line"></hr>
            <ul className="">
                <li className="relative mt-[50px] mb-[80px]">
                    <FeaturedProject
                        title={title1} 
                        description={description1} 
                        technologies={technologies1} 
                        links={links1}
                    />
                </li>
                <li className="relative">
                    <FeaturedProject
                        title={title1} 
                        description={description1} 
                        technologies={technologies1} 
                        links={links1}
                    />
                </li>
            </ul>
        </div>
    );
}