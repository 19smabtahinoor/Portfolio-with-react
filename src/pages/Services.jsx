import React from 'react';
import Card from '../components/Card'
import ServiceData from '../components/ServiceData'
function Services() {
    return (
        <>
            <section className="about_page d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="pt-5 about_page_heading">
                                <h1 className="pt-4 text-center">My Services</h1>
                                <span className="d-block text-center bottom_border"></span>
                            </div>

                            <div className="row my-5 d-flex justify-content-center flex-row">
                           
                                    {ServiceData.map((value, index) => {
                                        return (
                                            <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
                                            <Card
                                                key={index}
                                                cardImg={value.image}
                                                cardTitle={value.title}
                                                cardDesc={value.description}
                                            />
                                            </div>
                                        )
                                    })}
                                
                          
                        </div>

                        </div>

                      
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;