import React from 'react';
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import Dashboard from "../pages/Dashboard";
import Footer from "../layout/Footer";

function DashboardWrapper() {
    return (
        <div>
            <Header/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 p-0 sideBar'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-10 col-md-10 p-0'>
                        <Dashboard />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DashboardWrapper;