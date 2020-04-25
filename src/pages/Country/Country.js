import React, { Component } from 'react';

import './Country.css'

class Country extends Component {
    state = {
        country: []
    }

    // componentDidMount() {
    //     // Subscribe to changes
    // }

    // componentWillUnmount() {
    //     // Clean up listener
    // }


    render() {
        return (
            <div>
                <div className="container-fluid mt-4" >
                    <div className="card corona-card my-3">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                    <div className="h5 my-2">Affected Countries/Places
                        <span className="ml-2 badge badge-primary bg-green">3230</span>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-2">
                            <div data-toggle="modal" data-target="#exampleModalCenter"
                                className="card corona-card country-border mt-2 mb-3">
                                <div className="card-header py-1">
                                    <div className="h6 text-secondary text-center mb-0 mt-1"> Turkey
                                    </div>
                                </div>
                                <div className="card-body py-2 px-5">
                                    <div className="d-flex justify-content-between mb-1">
                                        <div className="text-small"> Cases: </div>
                                        <div className="text-small text-primary">30,000</div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-1">
                                        <div className="text-small">Deaths: </div>
                                        <div className="text-small text-danger">86</div>
                                    </div>
                                    <div className="d-flex justify-content-between mb-1">
                                        <div className="text-small">Cures: </div>
                                        <div className="text-small text-green">400</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true" >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-green" id="exampleModalCenterTitle">Turkkey</h5>
                                <button type="button" className="close text-light" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="card corona-card corona-border my-2 text-center">
                                            <div className="card-body py-2">
                                                <div className="h5 text-primary">43,856</div>
                                                <div className="h6 mb-0">Total Cases</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="card corona-card corona-border my-2 text-center">
                                            <div className="card-body py-2">
                                                <div className="h5 text-green">14,989</div>
                                                <div className="h6 mb-0">Total recovery</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="card corona-card corona-border my-2 text-center">
                                            <div className="card-body py-2">
                                                <div className="h5 text-danger">200</div>
                                                <div className="h6 mb-0">Total deaths</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="card corona-card corona-border my-2 text-center">
                                            <div className="card-body p-2">
                                                <div className="h5 text-warning">78</div>
                                                <div className="h6 mb-0">Total severe cases</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="card corona-card corona-border my-2 text-center">
                                            <div className="card-header">
                                                <div className="h5 mb-0">Death rate</div>
                                            </div>
                                            <div className="card-body py-2">

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div >


            </div >




        )
    }

}


export default Country;