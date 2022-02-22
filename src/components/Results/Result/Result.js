import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result">
        <a href={`/details/${props.document.GLOBALALIAS_PK}`}>
        <img className="card-img-top" src={props.document.IMAGEURL} alt="IMAGE"></img>
            <div className="card-body">
                <h6 className="title-style">{props.document.FULLNAME}</h6>
            </div>
        </a>
    </div>
    );
}
