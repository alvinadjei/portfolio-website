import TechGrid from "@/app/ui/about/tech_grid";
import NavBar from "@/app/ui/dashboard/navbar";

export default function Page() {
    return (
        <div className="page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">about me </h1>
            <hr className="page-title-line"></hr>
            <div className="flex justify-between py-10"> {/* row[column(profile pic + bio), technologies grid] */}
                <div className="flex flex-col items-center flex-wrap justify-center max-w-[33vw]"> {/* column(profile pic + bio) */}
                    <div className="h-10 justify-center">
                        Picture
                    </div> {/* profile pic */}
                    <p className="font-[family-name:var(--font-roboto-sans)]"> {/* bio */}
                        Hello! My name is Alvin, and I am a software engineer, biomedical engineer, and musician.
                        I ahhhhhhh goooood it buurrrrnnnns make it stooooooop!!!!! :'(
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center max-w-[30vw]"> {/* technologies grid */}
                    <TechGrid /> {/* Technologies grid */}
                </div>
            </div>
        </div>
    );
}