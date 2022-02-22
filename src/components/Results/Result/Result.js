import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result">
        <a href={`/details/${props.document.GLOBALALIAS_PK}`}>
            <div className="card-body">
                <h6 className="title-style">{props.document.FULLNAME}</h6>
            </div>
        </a>
    </div>
    );
}
