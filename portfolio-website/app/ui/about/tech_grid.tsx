import TechBox from "./tech_box";

export default function TechGrid() {
    return (
        <div className="flex flex-wrap justify-evenly p-[40px] m-[10px] border border-lightgrey">
            <TechBox />
            <TechBox />
            <TechBox />
            <TechBox />
            <TechBox />
        </div>
    );
}