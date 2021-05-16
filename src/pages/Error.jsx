import React from 'react';
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-12 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center text-dark">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2 text-dark">
                                        Look like you're lost
		                            </h3>

                                    <p className="text-dark">the page you are looking for not avaible!</p>

                                    <NavLink to="/" className="link_404">Go to Home</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Error;