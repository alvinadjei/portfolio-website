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
            <section>
                
            </section>
        </div>
    );
}