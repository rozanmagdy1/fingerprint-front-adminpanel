import React from 'react';
import {faUsers, faClock, faCheck, faX, fa1, fa2, fa3, fa4,} from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import "../../styles/main.scss";
import Overview from "../ui/Overview";
import User from "./User";

function Dashboard() {
    return (
        <div className="home">
            <h2 className='mx-5 pt-3'>Overview</h2>
            <div className="container-fluid">
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <div className="row m-auto gap-md-3 gap-lg-3 d-flex justify-content-center align-items-center">
                        <Overview icon={faUsers} title="Users" number="2000" url='/users' element={<User/>}/>
                        <Overview icon={fa1} title="Transaction One" number="2000"/>
                        <Overview icon={fa2} title="Transaction Two" number="2000"/>
                        <Overview icon={fa3} title="Transaction Three" number="2000"/>
                        <Overview icon={fa4} title="Transaction Four" number="2000"/>
                        <Overview icon={faClock} title="Transactions Waiting" number="2000"/>
                        <Overview icon={faCheck} title="Transactions Accepted" number="2000"/>
                        <Overview icon={faX} title="Transactions Rejected" number="2000"/>
                    </div>
                </div>
            </div>

            <div className='container-fluid mt-5 pt-5 mb-5 pt-5'>
                <div className='row d-flex flex-row justify-content-center flex-wrap'>
                    <div className='col-lg-7 col-xl-6 col-xxl-5'>
                                <Chart
                                    type="pie"
                                    width={450}
                                    height={400}
                                    series={[10, 20, 30, 40]}
                                    options={{
                                        title: {
                                            text: "Pie chart for transactions percentage"
                                        },
                                        colors: ["#345b79", "#293F50", "#A5BACB", "#658095"],
                                        // noData:{text:"Empty Data"},
                                        labels: ['Transaction One', 'Transaction Two', 'Transaction Three', 'Transaction Four']
                                    }}
                                >
                                </Chart>
                    </div>

                    <div className='col-lg-3 requests-today mt-5'>
                        <div className='container text-center'>
                            <p className='pt-5'>Requests Today</p>
                            <p>20</p>
                            <button className='btn text-light'>Check requests</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;