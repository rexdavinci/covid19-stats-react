import React, { Component } from "react";


class Home extends Component {
    state = {
        country: []
    }

    componentDidMount() {
        // Subscribe to changes
    }

    componentWillUnmount() {
        // Clean up listener
    }


    render() {
        return (
            <div>

                <div className="container-fluid mt-4">
                    <div className="card corona-card my-2">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="h5 my-2">Dashboard
                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="h6 text-right mb-0 my-2">As at: <span className="text-green">
                                        sept 24th, 2020</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="card corona-card my-3">
                                <div className="card-body px-4 d-flex justify-content-between">
                                    <div>
                                        <div className="h3 text-primary">835632</div>
                                        <div className="h6">Total Cases</div>
                                    </div>
                                    <div className="display-4 text-primary">
                                        <i className="fa fa-head-side-cough"></i> </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="card corona-card my-3">
                                <div className="card-body px-4 d-flex justify-content-between">
                                    <div>
                                        <div className="h3 text-green">835632
                        </div>
                                        <div className="h6">Total Recovered</div>
                                    </div>
                                    <div className="display-4 text-green">
                                        <i className="fa fa-virus-slash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="card corona-card my-3">
                                <div className="card-body px-4 d-flex justify-content-between">
                                    <div>
                                        <div className="h3 text-danger">835632</div>
                                        <div className="h6">Total Deaths</div>
                                    </div>
                                    <div className="display-4 text-danger">
                                        <i className="fa fa-box"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="card corona-card my-3">
                                <div className="card-body px-4 d-flex justify-content-between">
                                    <div>
                                        <div className="h3 text-warning">835632</div>
                                        <div className="h6">Affected Countries/Places</div>
                                    </div>
                                    <div className="display-4 text-warning">
                                        <i className="fa fa-flag"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card corona-card my-2">
                                <div className="card-header d-flex justify-content-between px-4">
                                    <div className="h5 mb-0">Recovery rate</div>
                                    <div className="h5 mb-0 text-green pointer">
                                        <i className="far fa-chart-bar"></i>
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptate? Ratione blanditiis, molestias eum corrupti suscipit voluptate, sequi libero aut rem quasi, deserunt consequuntur nihil sit officiis error reiciendis ab!
                        </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card corona-card my-2">
                                <div className="card-header">
                                    <div className="h5 mb-0">Severe cases rate</div>
                                </div>
                                <div className="card-body d-flex justify-content-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptate? Ratione blanditiis, molestias eum corrupti suscipit voluptate, sequi libero aut rem quasi, deserunt consequuntur nihil sit officiis error reiciendis ab!
                        </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card corona-card my-2">
                                <div className="card-header d-flex justify-content-between px-4">
                                    <div className="h5 mb-0">Death rate</div>
                                    <div className="h5 mb-0 text-danger pointer">
                                        <i className="far fa-chart-bar"></i>
                                    </div>
                                </div>
                                <div className="card-body d-flex justify-content-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, voluptate? Ratione blanditiis, molestias eum corrupti suscipit voluptate, sequi libero aut rem quasi, deserunt consequuntur nihil sit officiis error reiciendis ab!
                        </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


}



export default Home;