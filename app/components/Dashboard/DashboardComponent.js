import React, { Component } from 'react';

export default class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="h-100">
          <div className="authincation">
            <div className="form-head d-flex mb-3 align-items-start">
              <div className="mr-auto d-none d-lg-block">
                <h2 className="text-black font-w600 mb-0">Dashboard</h2>
                <p className="mb-0">Welcome to Aristotle Admin!</p>
              </div>

              <div className="dropdown custom-dropdown">
                <div className="btn btn-sm btn-primary light d-flex align-items-center svg-btn" data-toggle="dropdown">
                  <div className="text-left ml-3">
                    <span className="d-block fs-16">Filter Periode</span>
                    <small className="d-block fs-13">4 June 2020 - 4 July 2020</small>
                  </div>
                  <i className="fa fa-angle-down scale5 ml-3"/>
                </div>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">4 June 2020 - 4 July 2020</a>
                  <a className="dropdown-item" href="#">5 july 2020 - 4 Aug 2020</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="widget-stat card">
                  <div className="card-body p-4">
                    <div className="media ai-icon">
									<span className="mr-3 bgl-primary text-primary">
										 <i class="icofont-coffee-cup"/>
									</span>
                      <div className="media-body">
                        <h3 className="mb-0 text-black"><span className="counter ml-0">56</span></h3>
                        <p className="mb-0">Total Menus</p>
                        <small>4% (30 days)</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="widget-stat card">
                  <div className="card-body p-4">
                    <div className="media ai-icon">
									<span className="mr-3 bgl-primary text-primary">
									<i class="icofont-dollar"/>
									</span>
                      <div className="media-body">
                        <h3 className="mb-0 text-black"><span className="counter ml-0">126</span>k</h3>
                        <p className="mb-0">Total Revenue</p>
                        <small>4% (30 days)</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="widget-stat card">
                  <div className="card-body p-4">
                    <div className="media ai-icon">
									<span className="mr-3 bgl-primary text-primary">
										 <i class="icofont-read-book"/>

									</span>
                      <div className="media-body">
                        <h3 className="mb-0 text-black"><span className="counter ml-0">279</span></h3>
                        <p className="mb-0">Total Orders</p>
                        <small>4% (30 days)</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="widget-stat card">
                  <div className="card-body p-4">
                    <div className="media ai-icon">
									<span className="mr-3 bgl-primary text-primary">
										 <i class="icofont-users-social"/>

									</span>
                      <div className="media-body">
                        <h3 className="mb-0 text-black"><span className="counter ml-0">65</span></h3>
                        <p className="mb-0">Total Client</p>
                        <small>4% (30 days)</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </>
    );
  }
}
