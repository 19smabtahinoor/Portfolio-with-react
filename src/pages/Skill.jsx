import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';


function Skill() {
    return (
        <>
            <section className="about_page d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="pt-5 about_page_heading">
                                <h1 className="pt-4 text-center">My Skill</h1>
                                <span className="d-block text-center bottom_border"></span>
                            </div>

                            <div className="row my-5 d-flex justify-content-center flex-row">
                                <div className="col-sm-12 col-md-4 col-lg-8 mx-auto">

                                    <div className="row">

                                        <div style={{ width: 150, height: 150 }} className="col-sm-3 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={96}>
                                                <img style={{ width: 80, marginTop: 0 }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" />
                                            </CircularProgressbarWithChildren>
                                        </div>




                                        <div style={{ width: 150, height: 150 }} className="col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={85}>
                                                <img style={{ width: 80, marginTop: 0 }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" />
                                            </CircularProgressbarWithChildren>
                                        </div>




                                        <div style={{ width: 150, height: 150 }} className="col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={80}>
                                                <img style={{ width: 80, marginTop: 0 }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="scss" />
                                            </CircularProgressbarWithChildren>
                                        </div>


                                        <div style={{ width: 150, height: 150 }} className="col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={78}>
                                                <img style={{ width: 80, marginTop: 0 }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js" />
                                            </CircularProgressbarWithChildren>
                                        </div>

                                        <div style={{ width: 150, height: 150 }} className="my-3 col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={65}>
                                                <img style={{ width: 80, marginTop: 0 }} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" />
                                            </CircularProgressbarWithChildren>
                                        </div>

                                        <div style={{ width: 150, height: 150 }} className="my-3 col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={80}>
                                                <img style={{ width: 80, marginTop: 0 }} src="https://img.icons8.com/color/2x/bootstrap.png" alt="bootstrap" />
                                            </CircularProgressbarWithChildren>
                                        </div>



                                        <div style={{ width: 150, height: 150 }} className="my-3 col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={85}>
                                                <img style={{ width: 80, marginTop: 0 }} src="https://bitsrc.imgix.net/3fb49197a90923920dcee2f4f5c36cea2c2a1f73.png
                                                " alt="reactbootstrap" />
                                            </CircularProgressbarWithChildren>
                                        </div>


                                        <div style={{ width: 150, height: 150 }} className="my-3 col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={85}>
                                                <img style={{ width: 80, marginTop: 0 }} src="https://material-ui.com/static/logo_raw.svg" alt="materialui" />
                                            </CircularProgressbarWithChildren>
                                        </div>

                                        <div style={{ width: 150, height: 150 }} className="my-3 col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={75}>
                                                <img style={{ width: 80, marginTop: 0 }} src="
https://img.icons8.com/color/2x/npm.png" alt="npm" />
                                            </CircularProgressbarWithChildren>
                                        </div>


                                        <div style={{ width: 150, height: 150 }} className="my-3 col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={70}>
                                                <img style={{ width: 80, marginTop: 0 }} src="
https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebasae" />
                                            </CircularProgressbarWithChildren>
                                        </div>

                                        <div style={{ width: 150, height: 150 }} className="my-3 col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={60}>
                                                <img style={{ width: 80, marginTop: 0 }} src="
https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" />
                                            </CircularProgressbarWithChildren>
                                        </div>


                                        <div style={{ width: 150, height: 150 }} className="my-3 col-sm-12 col-md-4 col-lg-3">
                                            <CircularProgressbarWithChildren value={75}>
                                                <img style={{ width: 80, marginTop: 0 }} src="
https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg
" alt="ps" />
                                            </CircularProgressbarWithChildren>
                                        </div>


                                    </div>


                                </div>


                            </div>

                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}

export default Skill;





