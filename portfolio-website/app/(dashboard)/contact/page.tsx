import ContactCard from "@/app/ui/contact/contact_card";

export default function Page() {
    return (
        <div className="page-bounds">
            <h1 className="page-title">contact</h1>
            <hr className="page-title-line"></hr>
            <div className="flex justify-center pt-10">
                <ContactCard logo="logo" handle="handle" platform="platform"/>
                <ContactCard logo="logo" handle="handle" platform="platform"/>
                <ContactCard logo="logo" handle="handle" platform="platform"/>
            </div>
        </div>
    );
}