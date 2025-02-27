export default function ContactCard({ logo, handle, platform, link }: {logo: React.ReactElement, handle: string, platform: string, link: string, }) {
    return (
        <div className="flex flex-col justify-center items-center w-[250px] h-[275px] p-5 m-[20px] lg:m-[50px] border border-emerald-600 rounded-sm text-emerald-600 hover:text-tiel hover:border-tiel transition">
            <a
                className="hover:text-tiel"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="flex justify-center py-[20px] text-[30px] ">{logo}</div>
                <div className="flex justify-center py-[10px] text-[15px]">{handle}</div>
                <div className="flex justify-center text-[14px]">{platform}</div>
            </a>
        </div>
    );
}

