import Link from "next/link";

export default function ContactCard({ logo, handle, platform }) {
    return (
        <div className="flex flex-col p-5 mx-10 border border-lightgrey text-lightgrey">
            <div className="flex justify-center">{logo}</div>
            <div className="flex justify-center">{handle}</div>
            <div className="flex justify-center">{platform}</div>
        </div>
    );
}

