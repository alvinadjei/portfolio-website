'use client';
import { useState, useEffect } from "react";

const words = [
  " fullstack software engineer",
  " biomedical engineer",
  " musician",
  " fantasy football champion",
  " spicy food enthusiast",
  "n all around stand-up guy"
];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 80; // Typing and deleting speeds
    const pauseTime = isDeleting ? 500 : 1500; // Delay before deleting

    if (!isDeleting && subIndex === words[index].length + 1) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex)); // Update the text
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <p className="text-xl text-lightgrey font-['Roboto_Mono']">
      and I'm a<span className="text-teal-500">{text}</span>
      {blink && <span className="text-teal-500">_</span>}
    </p>
  );
}