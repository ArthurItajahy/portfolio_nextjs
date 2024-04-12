"use client"

import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";


const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("musicConsent", String(newState));
    localStorage.setItem("consentTime", new Date().toISOString());
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  const iconOpacity = volume > 0.5 ? 1 : volume * 2;

  return (
    <div
      className="fixed md:top-18 xl:top-3 top-18 right-2.5 xs:right-4 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <audio ref={audioRef} loop>
        <source src={"/audio/somewhere.mp3"} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <motion.button
        onClick={toggle}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className=" w-12 h-12 md:w-20 md:h-16 xl:w-16 xs:h-16 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-9 custom-bg"
        aria-label={"Sound control button"}
        name={"Sound control button"}
      >
        {isPlaying ? (
          <Volume2
            className="text-green-500 w-full h-full text-foreground group-hover:text-accent "
            strokeWidth={1.5}
            style={{ opacity: iconOpacity }}
          />
        ) : (
          <VolumeX
            className="text-white w-full h-full text-foreground group-hover:text-accent hover:text-green-300 "
            strokeWidth={0.9}
            style={{ opacity: iconOpacity }}
          />
        )}
      </motion.button>
      {isPlaying && isHovered && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute right-2.5 xs:right-4 bottom-12 xs:bottom-16 w-12 md:w-20 xl:w-16 xs:w-16 h-2 md:h-4 xl:h-4 xs:h-4 rounded-full"
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="bg-green-500 absolute w-full h-full cursor-pointer rounded-full appearance-none"
            style={{
              WebkitAppearance: "none",
              height: "30%",
              WebkitBackgroundClip: "padding-box",
              WebkitBorderRadius: "10px",
           
            }}
          />

        </motion.div>
      )}
    </div>
  );
};

export default Sound;