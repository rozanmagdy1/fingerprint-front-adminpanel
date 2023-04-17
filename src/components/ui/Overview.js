import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../styles/main.scss";
import {Link} from "react-router-dom";

function Overview(props) {
    return (
        <>
            <div className="col-lg-2 col-md-4 overview-box mt-3 text-center d-flex flex-column justify-content-center">
                <Link to={props.url} element={props.element} className='text-decoration-none text-black'>
                    <FontAwesomeIcon icon={props.icon} className='fa-2x pt-5'/>
                </Link>
                <Link to={props.url} element={props.element} className='text-decoration-none text-black'>
                    <p className="mt-2">{props.title}</p>
                </Link>
                {/*<p className="mb-5">{spinnerElem}</p>*/}
                <p className="mb-5">{props.number}</p>
            </div>
        </>
    );
}

export default Overview;