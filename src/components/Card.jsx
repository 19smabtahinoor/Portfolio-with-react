import React from 'react';
import Button from '@material-ui/core/Button';

function Card(props) {
    return (
        <>

            <div className="card">
                <img src={props.cardImg} className="card-img-top" alt="cardimg" />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardDesc}</p>
                    <Button className="btn">Learn more</Button>
                </div>
            </div>
        </>
    );
}

export default Card;