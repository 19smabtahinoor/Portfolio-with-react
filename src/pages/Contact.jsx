import React,{ useState } from 'react';
import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from '@material-ui/core/Button';


function Contact() {
    const [userData,setUserData] = useState({
        userFullName : '',
        userEmail:'',
        userMessege:'',
        userPhoneNumber:'',
        userWebsite:'',
        userFbId:'',
    })



    const inputEvent = (e) => {
        const {name,value} = e.target

        setUserData((preValue) => {
            return{
                ...preValue,
                [name] : value,
            }
        })
    
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${userData.userFullName} - ${userData.userEmail} - ${userData.userMessege} - ${userData.userPhoneNumber} - ${userData.userWebsite}- ${userData.userFbId}`)
    }

    return (
        <>
            <section className="about_page d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="pt-5 about_page_heading">
                                <h1 className="pt-4 text-center">Contact</h1>
                                <span className="d-block text-center bottom_border"></span>
                            </div>
                            <div className="row my-5 d-flex justify-content-center flex-row">
                                <div className="col-sm-12 col-md-4 col-lg-8">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                name="userFullName" 
                                                value={userData.userFullName}
                                                type="text" 
                                                placeholder="Your name" 
                                                className="inputsField"
                                                onChange={inputEvent} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                name="userEmail" 
                                                value={userData.userEmail}
                                                type="email" 
                                                placeholder="Enter email" 
                                                className="inputsField"
                                                onChange={inputEvent} />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Your Messege</Form.Label>
                                            <Form.Control
                                            name="userMessege" 
                                            value={userData.userMessege}
                                            as="textarea" 
                                            rows={3} 
                                            className="inputsTextField"
                                            onChange={inputEvent} />
                                        </Form.Group>

                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control
                                                name="userPhoneNumber" 
                                                value={userData.userPhoneNumber}
                                                type="number" 
                                                className="inputsField" 
                                                placeholder="+880 1756 678932"
                                                    onChange={inputEvent}
                                                />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Website</Form.Label>
                                                <Form.Control
                                                name="userWebsite" 
                                                value={userData.userWebsite}
                                                type="text" 
                                                className="inputsField" 
                                                placeholder="yourwebsite.com"
                                                    onChange={inputEvent}
                                                />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Facebook Link</Form.Label>
                                                <Form.Control
                                                name="userFbId" 
                                                value={userData.userFbId}
                                                className="inputsField" 
                                                type="link" 
                                                placeholder="https://www.facebook.com/yourusername"
                                                    onChange={inputEvent}
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                            <Button 
                                            variant="contained" 
                                            type="submit" 
                                            className="btn">
                                                Submit
                                            </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Contact;