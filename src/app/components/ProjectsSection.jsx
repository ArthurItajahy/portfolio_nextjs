"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'







const projectsData = [

    {
        id: 1,
        title: "Lord of the rings | Memorial",
        description: "This project was made with the joy to share my love for the LOTR, all the things have been change because of it.",
        image: "/images/projects/Lotr_project.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/ArthurItajahy/Lord_Project_v2/tree/main",
        previewUrl: "https://lord-project-v2.vercel.app/"
    },
    {
        id: 2,
        title: "Lord of the rings | Memorial",
        description: "This project was made with the joy to share my love for the LOTR, all the things have been change because of it.",
        image: "/images/projects/Lotr_project.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/ArthurItajahy/Lord_Project_v2/tree/main",
        previewUrl: "https://lord-project-v2.vercel.app/"
    },
    {
        id: 3,
        title: "Lord of the rings | Memorial",
        description: "This project was made with the joy to share my love for the LOTR, all the things have been change because of it.",
        image: "/images/projects/Lotr_project.png",
        tag: ["All", "React"],
        gitUrl: "https://github.com/ArthurItajahy/Lord_Project_v2/tree/main",
        previewUrl: "https://lord-project-v2.vercel.app/"
    },
    {
        id: 4,
        title: "Next.JS Project 2",
        description: "This project was made with the joy to share my love for the LOTR, all the things have been change because of it.",
        image: "/images/projects/Lotr_project.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/ArthurItajahy/Lord_Project_v2/tree/main",
        previewUrl: "https://lord-project-v2.vercel.app/"
    },
    {
        id: 5,
        title: "Next.JS Project",
        description: "This project was made with the joy to share my love for the LOTR, all the things have been change because of it.",
        image: "/images/projects/Lotr_project.png",
        tag: ["All", "Next.js"],
        gitUrl: "https://github.com/ArthurItajahy/Lord_Project_v2/tree/main",
        previewUrl: "https://lord-project-v2.vercel.app/"
    },
]












const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }
    const filteredProject = projectsData.filter((project) =>
        project.tag.includes(tag)
    )
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-10'>My Projects</h2>
            <p className='text-[#ADb7BE] text-center text-base sm:text-lg mb-6  lg:text-xl'>
                "Nothing is impossible with a little hard work."</p>
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

            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
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

export default ProjectsSection;