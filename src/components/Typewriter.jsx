import { useState, useEffect, useRef } from 'react';
import useInViewport from './UseInViewport';

export default function Typewriter({ text }) {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    const inViewport = useInViewport(containerRef);

    useEffect(() => {
        if (inViewport) {
            const interval = setInterval(() => {
                setDisplayText(prevDisplayText => prevDisplayText + text.charAt(index));
                setIndex(prevIndex => prevIndex + 1);
            }, 50);

            return () => clearInterval(interval);
        }
    }, [inViewport, text, index]);

    return <p className="p-2 font-mono" ref={containerRef}>{displayText}</p>;
}

