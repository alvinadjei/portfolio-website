import Image from "next/image";

export default function TechBox({ logo }) {

    const src = `/logos/${logo}.svg`;
    const alt = logo.replace(/-/g, '.').replace('Sharp', "#").replace('PP', '++');

    return (
        <div className="flex flex-col justify-center h-[100px] w-[120px] p-[20px] m-[8px] transition-all duration-150 bg-lightbg hover:bg-blue-950 border border-lightgrey rounded-lg">
            <div className="flex justify-center">
                <Image 
                    src={src}
                    alt={logo}
                    width="40"
                    height="40"
                />
            </div>
            <div className="flex justify-center pt-[10px] text-[13px]">
                {alt}
            </div>
        </div>
    );
}

