import React, { useEffect, useState } from "react";
import './emojis-carousel.css'

interface Emoji {
    name: string;
    unicode: string[];
    htmlCode: string[]
}

const EmojisCarousel: React.FC = () => {
    const [emojis, setEmojis] = useState<Emoji[]>([]);
    const [emojiIndex, setEmojiIndex] = useState<number>(0);

    const getEmojis = async () => {
        const response = await fetch("https://emojihub.yurace.pro/api/all");
        const data = await response.json();
        setEmojis(data);
    }

    useEffect(() => {
        getEmojis();
    }, []);

    const handlePrevious = () => {
        if (emojiIndex > 0) {
            setEmojiIndex((prev: number) => prev - 1);
        }
    }
    const handleNext = () => {
        if (emojiIndex < emojis.length - 1) {
            setEmojiIndex((prev: number) => prev + 1);
        }
    }

    const handleEmojiSearch = (name: string) => {
        if (name.length > 20) {
            return name.slice(0, 20) + "...";
        }
        return name;
    }

    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        setEmojiIndex(randomIndex);
    }

    return (
        <div className="emojis-container">
            <section>
                {emojis.length > 0 && (
                    <div className="emojis-display">
                        <span dangerouslySetInnerHTML={{ __html: emojis[emojiIndex].htmlCode[0] }}></span>
                        <p>{handleEmojiSearch(emojis[emojiIndex].name)}</p>
                    </div>
                )
                }
            </section>
            <section className="emojis-buttons">
                <button className="emojis-btn" onClick={handlePrevious}>PREVIOUS</button>
                <button className="emojis-btn" onClick={handleNext}>NEXT</button>
                <button className="emojis-btn" onClick={handleRandom}>RANDOM</button>
            </section>
        </div>
    )
}
export default EmojisCarousel;