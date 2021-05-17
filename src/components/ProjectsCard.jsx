import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
function ProjectsCard(props) {
    return (
        <>
            
            <div className="card">
                <img src={props.projectImg} className="card-img-top" alt="cardimg" />
                <div className="card-body">
                    <h5 className="card-title">{props.projectTitle}</h5>
                    <p className="card-text">Tools & Technology : {props.projectTools}</p>
                    <a href={props.liveDemo} target="_blank" style={{textDecoration:'none'}} rel="noreferrer">
                        <Button className="btn">Live Demo</Button>
                    </a>
                    <a href={props.githubLink} className="githubIcon" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProjectsCard;