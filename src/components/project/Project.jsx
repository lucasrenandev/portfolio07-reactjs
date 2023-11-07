import { useEffect } from "react";
import { Project, ProjectContent, Box, Image, Icon } from "./styled";
import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpg";
import project4 from "../../assets/project-4.jpg";
import project5 from "../../assets/project-5.jpg";
import project6 from "../../assets/project-6.jpg";
import project7 from "../../assets/project-7.jpg";
import project8 from "../../assets/project-8.jpg";
import project9 from "../../assets/project-9.jpg";
import { FaPlus } from "react-icons/fa";

export default function project() {
    useEffect(() => {
        lightGallery(document.querySelector(".project .project-content"));
    }, []);

    return(
        <Project className="project" id="project">
            <header className="heading">
                <h2>My <span>projects</span></h2>
            </header>
            <ProjectContent className="project-content">
                <Box href={project1}>
                    <Image src={project1} alt="Project image 1"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
                <Box href={project2}>
                    <Image src={project2} alt="Project image 2"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
                <Box href={project3}>
                    <Image src={project3} alt="Project image 3"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
                <Box href={project4}>
                    <Image src={project4} alt="Project image 4"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
                <Box href={project5}>
                    <Image src={project5} alt="Project image 5"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
                <Box href={project6}>
                    <Image src={project6} alt="Project image 6"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
                <Box href={project7}>
                    <Image src={project7} alt="Project image 7"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
                <Box href={project8}>
                    <Image src={project8} alt="Project image 8"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
                <Box href={project9}>
                    <Image src={project9} alt="Project image 9"/>
                    <Icon>
                        <FaPlus/>
                    </Icon>
                </Box>
            </ProjectContent>
        </Project>
    )
}