import TechGrid from "@/app/ui/about/tech_grid";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
};

export default function Page() {
    return (
        <div className="lg:block flex flex-col items-center page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">cranial window </h1>
            <hr className="page-title-line"></hr>
            <div className="flex flex-col lg:flex-row justify-evenly items-center py-10"> {/* row[column(profile pic + bio), technologies grid] */}
                <div className="flex flex-col items-center flex-wrap justify-center mb-[50px] lg:mb-0 max-w-[66vw] lg:max-w-[33vw]"> {/* column(profile pic + bio) */}
                    <div className="flex justify-center">
                        <Image 
                            className="rounded-md"
                            src="/profile_pic.jpeg"
                            alt="Alvin's profile pic"
                            width="302"
                            height="250"
                        />
                    </div> {/* profile pic */}
                    <div className="pt-[40px] text-[16px] font-[family-name:var(--font-roboto-sans)]"> {/* bio */}
                        <p>
                            Hello! I&apos;m Alvin, and (depending on who you ask) I am a software engineer, biomedical engineer, 
                            neuroscientist, and/or musician. I recently graduated from Harvard College with a B.A. in Biomedical 
                            Engineering and a minor in Computer Science. I enjoy wearing a lot of different hats, tackling interesting
                            problems, and learning by doing and building. Some of the technologies, languages, and frameworks I have 
                            used to do so are on this page.
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
                            cooking various types of soup, letting my roommmates think I'm bad at Mario Kart
                            (for now), singing in and writing arrangements for&nbsp;
                            <a
                                href="https://www.instagram.com/vocalchordsatucsf/"
                                target="_blank"
                                className="underline text-tiel hover:text-emerald-400"
                            >the UCSF a cappella group
                            </a>, 
                            and exploring nature in and around San Francisco in the hopes of catching and taming a wild coyote.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center max-w-[75vw] lg:max-w-[30vw]"> {/* technologies grid */}
                    <TechGrid /> {/* Technologies grid */}
                </div>
            </div>
        </div>
    );
}