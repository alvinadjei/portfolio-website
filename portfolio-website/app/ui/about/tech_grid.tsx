import TechBox from "./tech_box";

const images = [
                    "Python", "MySQL", "Git", 
                    "JavaScript", "HTML", "CSS", 
                    "React", "Next-js", "Flutter", 
                    "Arduino", "Raspberry Pi", "CPP", 
                    "Unity", "MATLAB", "AWS", 
               ];

export default function TechGrid() {
    return (
        <div className="flex flex-wrap justify-center p-[10px]">
            {images.map((image, index) => 
                <TechBox key={index} logo={image}/>
            )}
        </div>
    );
}