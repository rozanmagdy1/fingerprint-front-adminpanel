import {
    faFingerprint,
    faChartLine,
    faUser,
    faSquarePollHorizontal,
    faCheck,
    faArrowRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import "../../styles/main.scss";

function Sidebar() {

    return (
        <div className='sideBar pb-5'>
            <div className="container">
                <div className='mb-5 logo text-center mt-3'>
                    <FontAwesomeIcon icon={faFingerprint} className='fa-5x mt-2'/>
                </div>

                <div className='container sideBar-container d-flex flex-column align-items-center'>
                    <ul className='list-unstyled'>
                        <li  className='mb-4'>
                            <Link to='/dashboard' className="text-light text-decoration-none">
                                <FontAwesomeIcon icon={faChartLine} className="mx-2 "/>Dashboard
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link to='/users' className="text-light text-decoration-none">
                                <FontAwesomeIcon icon={faUser} className="text-light mx-2"/>Users
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link to='/transactions' className="text-light text-decoration-none">
                                <FontAwesomeIcon icon={faSquarePollHorizontal} className="text-light mx-2"/>Transactions
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link to='/confirmations' className="text-decoration-none text-light">
                                <FontAwesomeIcon icon={faCheck} className="text-light mx-1"/>Confirmation
                            </Link>
                        </li>
                        <div className='mb-5 pt-5'>
                            <Link to='/' className="text-light text-decoration-none logout">
                                <FontAwesomeIcon icon={faArrowRightToBracket} className="text-light mx-2"/>LogOut
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default Sidebar;