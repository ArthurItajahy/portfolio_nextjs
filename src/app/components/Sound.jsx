"use client"
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";



const Sound = () => {



  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);



  const toggle = () => {


    const newState = !isPlaying;

    setIsPlaying(newState);
    


    newState ? audioRef.current.play() : audioRef.current.pause();

    localStorage.setItem("musicConsent", String(newState));

    localStorage.setItem("consentTime", new Date().toISOString());



  };
 





  return (

    <div className="fixed md:top-18 xl:top-2 top-18 right-2.5 xs:right-4 z-50 group">



      <audio ref={audioRef} loop>

        <source src={"/audio/sad.mp3"} type="audio/mpeg" />

        your browser does not support the audio element.

      </audio>

      <motion.button

        onClick={toggle}

        initial={{ scale: 0 }}

        animate={{ scale: 1 }}

        transition={{ delay: 1 }}

        className="w-12 h-12 md:w-20 md:h-16 xl:w-16 xs:h-16 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-9 custom-bg"

        aria-label={"Sound control button"}

        name={"Sound control button"}

      >

        {isPlaying ? (

          <Volume2

            className="w-full h-full text-foreground group-hover:text-accent"

            strokeWidth={1.5}

          />

        ) : (

          <VolumeX

            className="w-full h-full text-foreground group-hover:text-accent"

            strokeWidth={1.5}

          />

        )}

      </motion.button>

    </div>

  );

};

export default Sound;