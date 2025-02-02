import ContactCard from "@/app/ui/contact/contact_card";
import { Metadata } from 'next';
import { cards } from "./contact_consts";

export const metadata: Metadata = {
    title: 'Contact',
};

export default function Page() {
    return (
        <div className="lg:block flex flex-col items-center page-bounds">
            <h1 className="page-title">contact</h1>
            <hr className="page-title-line"></hr>
            <ul className="flex flex-col lg:flex-row lg:flex-wrap justify-evenly pt-[30px]">
                {cards.map((card, index) => (
                    <li key={index}>
                        <ContactCard
                            logo={card.logo}
                            handle={card.handle}
                            platform={card.platform}
                            link={card.link}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}