import React from 'react';
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";
import User from "../pages/User";

function UserWrapper() {
    return (
        <div>
            <Header/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 p-0 sideBar'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-10 col-md-10 p-0'>
                        <User />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UserWrapper;