"use client";
import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { useTranslations } from 'next-intl';
import { Roller } from '../hoc';


















const ProjectsSection = () => {
    const t = useTranslations('ProjectsSection')


    const projectsData = [

        {
            id: 1,
            title: "Lord of the rings | Memorial",
            description: t('projects.1_description'),
            image: "/images/projects/Lotr_project.png",
            tag: ["All", "React"],
            gitUrl: "https://github.com/ArthurItajahy/Lord_Project_v2/tree/main",

            previewUrl: "https://lord-project-v2.vercel.app/"
        },

        {
            id: 2,
            title: "Sumz.AI",
            description: t('projects.2_description'),
            image: "/images/projects/sum_ai.png",
            tag: ["All", "Next.js"],
            gitUrl: "https://github.com/ArthurItajahy/summrizer_ai",
            previewUrl: "https://summrizer-ai.vercel.app/"
        },
        {
            id: 3,
            title: "Gênio Indomavel",
            description: t('projects.3_description'),
            image: "/images/projects/telalogin.png",
            tag: ["All", "React"],
            gitUrl: "https://github.com/ArthurItajahy/ReadmeProjectBlogPessoal?tab=readme-ov-file",
            previewUrl: "https://genioindomavel.netlify.app/"
        },
        {
            id: 4,
            title: "Anime Data | Server Side",
            description: t('projects.4_description'),
            image: "/images/projects/anime.png",
            tag: ["All", "Next.js"],
            gitUrl: "https://github.com/ArthurItajahy/scroll_infinity_nextjs",
            previewUrl: "https://scroll-infinity-nextjs.vercel.app/"
        },

    ]

    const [tag, setTag] = useState("All");
    






    const handleTagChange = (newTag) => {
        setTag(newTag);
    }
    const filteredProject = projectsData.filter((project) =>
        project.tag.includes(tag)
    )
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-10'>{t('title')}</h2>
            <p className='text-[#ADb7BE] text-center text-base sm:text-lg mb-6  lg:text-xl'>
                {t('firstphrase')}</p>
            <div className='text-white flex flex-row justify-center item-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"} />


                <ProjectTag onClick={handleTagChange}
                    name="React"
                    isSelected={tag === "React"} />



                <ProjectTag onClick={handleTagChange}
                    
                    name="Next.js"
                    isSelected={tag === "Next."} />
            </div>

            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12'>
                {filteredProject.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl} />

                ))}
            </div>

        </>
    )
}

export default Roller(ProjectsSection, "projects");