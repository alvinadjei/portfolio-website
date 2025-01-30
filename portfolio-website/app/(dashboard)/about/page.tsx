import TechGrid from "@/app/ui/about/tech_grid";
import NavBar from "@/app/ui/dashboard/navbar";
import Image from "next/image";

export default function Page() {
    return (
        <div className="page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">about me </h1>
            <hr className="page-title-line"></hr>
            <div className="flex justify-evenly py-10"> {/* row[column(profile pic + bio), technologies grid] */}
                <div className="flex flex-col items-center flex-wrap justify-center max-w-[33vw]"> {/* column(profile pic + bio) */}
                    <div className="flex justify-center">
                        <Image 
                            className="rounded-md"
                            src="/profile_pic.jpeg"
                            alt="Profile pic"
                            width="302"
                            height="250"
                        />
                    </div> {/* profile pic */}
                    <div className="flex flex-col pt-[40px] text-[16px] font-[family-name:var(--font-roboto-sans)]"> {/* bio */}
                        <p>
                            Hello! I'm Alvin, and (depending on who you ask) I am a software engineer, biomedical engineer, neuroscientist, 
                            and/or musician. I enjoy wearing a lot of different hats, tackling interesting problems, and learning by doing and building.
                            Some of the technologies, languages and frameworks I have used to do so are on the right.
                        </p>
                        <br/>
                        <p>
                            I currently build software and electrical devices for&nbsp;
                            <a 
                                href="https://benderlab.ucsf.edu/home"
                                className="underline text-tiel hover:text-emerald-400"
                                target="_blank"
                            > 
                                a neuroscience lab at UC San Francisco
                            </a>.
                            My work involves implementing solutions to perform novel conditioning experiments in mice, as well as&nbsp;
                            <a 
                                href="https://www.biorxiv.org/content/10.1101/2023.06.05.543814v1"
                                className="underline text-tiel hover:text-emerald-400"
                                target="_blank"
                            >
                                parallelizing existing projects
                            </a> in the lab to increase efficiency by 2-3 times.
                        </p>
                        <br/>
                        <p>
                            In my free time I enjoy scoring own-goals in my Volo soccer league, 
                            cooking various types of soup, letting my roommmates win at Mario Kart
                            (when they develop a false sense of security, I'll crush their spirits),
                            and exploring nature in and around San Francisco.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center max-w-[30vw]"> {/* technologies grid */}
                    <TechGrid /> {/* Technologies grid */}
                </div>
            </div>
        </div>
    );
}