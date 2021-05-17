import React from 'react';
import Projectdata from '../components/ProjectsData'
import ProjectsCard from '../components/ProjectsCard'
import Button from '@material-ui/core/Button';

function Projects() {
    return (
        <>
            <section className="about_page d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="pt-5 about_page_heading">
                                <h1 className="text-center">My Projects</h1>
                                <span className="d-block text-center bottom_border"></span>
                            </div>

                            <div className="row my-5 d-flex justify-content-center flex-row">

                                {Projectdata.map((value, index) => {
                                    return (
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <ProjectsCard
                                                key={index}
                                                projectImg={value.image}
                                                projectTitle={value.projectTitle}
                                                projectTools={value.projectTools}
                                                liveDemo={value.liveDemo}
                                                githubLink={value.github}
                                            />
                                        </div>
                                    )
                                })}

                                <a href="https://github.com/19smabtahinoor" target="_blank" rel="noreferrer">
                                <Button className="See_more_btn">See More</Button>
                                </a>

                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;