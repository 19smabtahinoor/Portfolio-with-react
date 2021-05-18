import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <>
            <section className="about_page d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="about_page_heading">
                                <h1 className="text-center">About Me</h1>
                                <span className="d-block text-center bottom_border"></span>
                            </div>

                            <div className="row my-5 d-flex justify-content-center flex-row">
                                <div className="col-md-7 col-10 mx-auto about_me_description pt-4">
                                    <p>Hello dear! I'm <b>S.M.Abtahi Noor</b>.Everyone call me by the name"Abtahi". I'm a student of Class VIII. I study at Dhaka Residential Model College.

                                    Besides my study, I'm working as <b>Frontend Web Developer</b>. I'm an <b>Artist</b> .Painting is my hobby.

                                    Otherwise, I have been receiving awards from different places since 2013.I got two International Award.One of them,I got prizes from Japan in 2013 at painting.Other,I got prizes from Turkey in 2019 at painting.I stayed Turkey for seven days to met the <b style={{color:'#00CF5D'}}>Turkey's President Recep Tayyip Erdoğan</b>.I have more than 60 certificates and medals.I am very happy to get many awards and I wanna to work for the country and the people of the country when I grow up.</p>

                                    <div className="get_in_touch_btn">
                                    <NavLink to="/contact" className="hire_text">
                                        <Button className="mt-3 hire_btn">Get in Touch</Button>
                                    </NavLink>

                                    <NavLink to="/projects" className="hire_text">
                                        <Button className="mt-3 ml-2 skill_btn">Skill</Button>
                                    </NavLink>
                                    </div>
                                </div>

                                <div className="col-md-5 order-2 order-lg-2">
                                    <img className="img-thumbnail myImg" src="https://abtahinoor.netlify.app/images/Background.png" alt="mypicture"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;