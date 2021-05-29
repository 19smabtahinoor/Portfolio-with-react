import React, { useState } from 'react';
import Projectdata from '../components/ProjectsData'
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

function Projects() {

    const [projectItem, setProjectItem] = useState(Projectdata)

    const filterinProjects = (category) => {
        const filteringCategory = Projectdata.filter(currentItem => {
            return (currentItem.category === category)
        })
        setProjectItem(filteringCategory)

    }

    return (
        <>
            <section className="about_page d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="pt-5 about_page_heading">
                                <h1 className="pt-4 text-center">My Projects</h1>
                                <span className="d-block text-center bottom_border"></span>
                            </div>

                            <div className="filterMenuWrapper d-flex justify-content-center flex-row mt-4">
                                <Button className="filerTabButton" onClick={() => setProjectItem(Projectdata)}>All</Button>
                                <Button className="filerTabButton" onClick={() => filterinProjects('landingPage')}>Landing Pages</Button>
                                <Button className="filerTabButton" onClick={() => filterinProjects('hcj')}>Javascript</Button>
                                <Button className="filerTabButton" onClick={() => filterinProjects('Design')}>Designs</Button>
                                <Button className="filerTabButton" onClick={() => filterinProjects('react')}>React</Button>
                            </div>
                            <div className="row my-5 d-flex justify-content-center flex-row">
                                {projectItem.map((value, index) => {
                                    return (
                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                            <div className="card">
                                                <img src={value.image} className="card-img-top" alt="cardimg" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{value.projectTitle}</h5>
                                                    <p className="card-text">Tools & Technology : {value.projectTools}</p>
                                                    <a href={value.liveDemo} target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
                                                        <Button className="btn">Live Demo</Button>
                                                    </a>
                                                    <a href={value.github} className="githubIcon" target="_blank" rel="noreferrer">
                                                        <GitHubIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="d-flex justify-content-center flex-row mt-4">
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