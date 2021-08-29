import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result">
        <a href={`/details/${props.document.ROWID_OBJECT}`}>
            <div className="card-body">
                <h6 className="title-style">{props.document.NAME_FULL}</h6>
            </div>
        </a>
    </div>
    );
}
