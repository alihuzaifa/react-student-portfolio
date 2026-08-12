import { useEffect, useState } from "react";

/* The hero effect that types a word, holds it, deletes it and moves on.

   Give it an array of words and it returns the text to show right now:
       const text = useTypingText(profile.typingRoles); */
export function useTypingText(words, typeSpeed = 90, deleteSpeed = 45, holdTime = 1400) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIndex];
        const isWordComplete = text === word;
        const isWordGone = text === "";

        /* Pause on a finished word, and take a shorter breath between words */
        let delay = isDeleting ? deleteSpeed : typeSpeed;
        if (!isDeleting && isWordComplete) delay = holdTime;
        if (isDeleting && isWordGone) delay = 350;

        const timer = setTimeout(() => {
            if (!isDeleting && isWordComplete) {
                setIsDeleting(true);
                return;
            }

            if (isDeleting && isWordGone) {
                setIsDeleting(false);
                setWordIndex((current) => (current + 1) % words.length);
                return;
            }

            const nextLength = isDeleting ? text.length - 1 : text.length + 1;
            setText(word.slice(0, nextLength));
        }, delay);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime]);

    return text;
}
