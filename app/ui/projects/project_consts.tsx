const proj1 = {
    "title": "Eyeblink Conditioning Rig",
    "description": `A python script controls a USB infrared camera, as well as an Arduino Uno connected to other hardware, to condition mice
        to blink in response to an airpuff to the eye sent after a musical tone while saving the fraction of eye closure. Includes 
        GUI to control experiment parameters and run experiment.`,
    "technologies": ["Python", "Arduino", "OpenCV",],
    "links": ["https://github.com/alvinadjei/Eyeblink", ""],
    "image": "/projects/eyeblink.jpeg",
};
const proj2 = {
    "title": "Postur",
    "description": `Cross-platform mobile app for planning, publicizing, and finding local events, with a 
        Flutter frontend and Firebase backend. Features an interactive map interface, user authentication with personalized QR code 
        for event admission and attendance, and groups called "Tags" that can be invited to an event all at once.`,
    "technologies": ["Flutter", "Dart", "Firebase", "XCode",],
    "links": ["https://github.com/alvinadjei/postur", "https://drive.google.com/file/d/1iDn9dOoP9bzSuDNbQbZMVo-r9HriJdir/view?usp=sharing"],
    "image": "/projects/Postur_demo_screenshot.png",
};
const proj3 = {
    "title": "Electric Heating Pad",
    "description": `Feedback-controlled heating pad to help mice regulate body temperature while anesthetized. Includes a temperature
        sensor that informs an Arduino Uno of the mouse's body temp so it can adjust heating accordingly, an LCD display of current body 
        temp and heat setting, and a "kill switch" to cut the heat off at any time.`,
    "technologies": ["Arduino",],
    "links": ["https://github.com/alvinadjei/Heating-Pad", "https://drive.google.com/file/d/1nDUWZLRkT0J4enxF71WYMAipEubTOHXU/view?usp=sharing"],
    "image": "/projects/heating_pad.jpeg",
};
const proj4 = {
    "title": "3D Solar System Model",
    "description": `A 3D rendering of the Solar System built with Unity. Fly around and explore the solar system,
        complete with planets, the Sun, and Earth's moon rotating and orbiting at relative speeds.`,
    "technologies": ["Unity", "C#",],
    "links": ["https://github.com/alvinadjei/3D-Solar-System-Model", ""],
    "image": "/projects/solar_system.png",
};
const proj5 = {
    "title": "Arpeggiator",
    "description": `Electronic musical instrument with a keyboard interface that allows the user to play a chord that the instrument "arpeggiates". 
        That is, it repeatedly cycles through each note in the chord for as long as the user plays it.`,
    "technologies": ["Arduino", "VCV Rack",],
    "links": ["https://github.com/alvinadjei/arpeggiator", "https://drive.google.com/file/d/1Lu3iGZElhlsqXQnfelV3UbhZQMFV8V2I/view?usp=sharing"],
    "image": "/projects/arpeggiator.png",
};
const proj6 = {
    "title": "Portfolio Website",
    "description": `A responsive portfolio website containing my information, past experience, and projects. Built with Next.js and TailwindCSS.`,
    "technologies": ["Next.js", "TailwindCSS",],
    "links": ["https://github.com/alvinadjei/portfolio-website", ""],
    "image": "/projects/portfolio_website.png",
};

export const projects = [
    proj1, 
    proj2, 
    proj3, 
    proj4, 
    proj5, 
    proj6, 
];