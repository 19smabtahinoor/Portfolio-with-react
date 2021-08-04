import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row bg-gray-50 p-9 box-border rounded-xl shadow-xl py-12">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Abtahi's Profile Pic"
            data-aos="zoom-out-right" data-aos-duration="1500"
          />
        </div>
        <div className="nine columns main-col" data-aos="zoom-out-left" data-aos-duration="1500">
          <h2 className="text-gray-700">About Me</h2>

          <p className="text-justify">{bio}</p>
          <div className="row ">
            <div className="columns contact-details mt-6">
              <h2 className="text-gray-700">Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download mt-6">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
