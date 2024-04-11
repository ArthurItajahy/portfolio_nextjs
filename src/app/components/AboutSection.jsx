"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [

    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Postman</li>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>SpringBoot</li>
            </ul>
        )
    },
    {

        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Senac - Computer Engieneer</li>
                <li>Hight School Complete</li>
            </ul>
        )


    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>Generation Full Stack - BootCamp</li>
                <li>Java do Zero ao Profissional - 2024</li>
                <li>JavaScript Crash Course 2021 - Master JavaScript</li>
                <li>Master Next.js by Building Real Apps</li>
            </ul>
        )
    },
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className='list-disc pl-2'>
                <li>English - Fluent</li>
                <li>Portuguese Brazil - Native </li>

            </ul>
        )
    }


]


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPeding, startTranstion] = useTransition();
    const handleTabChange = (id) => {
        startTranstion(() => {
            setTab(id);
        });
    };
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-7 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/relaxflores.gif"
                    width={600} height={600}
                    className='rounded-3xl ' />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Greetings! I'm Arthur aka Dev.AI, step into my world of web development,
                        where my unwavering belief in the power of hard work fuels every project I undertake.
                        I've learned that dedication and perseverance are the keys to success in programming.
                       
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}>
                            {" "}  Skills {" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}>
                            {" "}  Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certification")}
                            active={tab === "certification"}>
                            {" "}  Certification {" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("languages")}
                            active={tab === "languages"}>
                            {" "}  Languages {" "}
                        </TabButton>

                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection
