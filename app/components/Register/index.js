import React, { Component } from 'react';
import '../../public/css/register.css';

export default class RegisterComponent extends Component {
  render() {
    return (
      <>
        <div className="whitBG">
          <div className="container" style={{ paddingTop: 60 }}>
            <div className="inner">
              <div className="row">

                <div className="col-md-3">
                  <img width="120" src="https://cdn.hgicrusade.com/18/02/hgi_aristotle_bug_logo-PQF0ylqG.png" />
                </div>

                <div className="col-md-6 text-center" style={{ padding: 0 }}>
                  <p style={{ color: 'red' }}> This application must be completed by the person joining HGI, not the
                    sponsoring HGI Associate or another person.
                  </p>
                  <p style={{ color: 'red' }}> By completing this
                    application, you affirm that you are the person applying to join HGI.
                  </p>
                </div>
                <div className="col-md-3 text-center" style={{ padding: 0 }}>
                  <img width="60" style={{ marginTop: -10 }} className="img-circle"
                       src="http://localhost:8080/assets/images/avatar.png" />
                  <br />
                  <h4 style={{ paddingTop: 10 }}>
                    <a target="_blank" style={{ textTransform: 'uppercase' }}
                       href="http://localhost:8080/sameer"> <strong>Sameer Ali</strong> </a>
                  </h4>
                </div>

              </div>
              <div className="wizard clearfix">
                <div className="steps clearfix">
                  <ul>
                    <li className="first current">
                      <a className="se_n_c selected_color"> Select Country and Plan </a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Tell Us about yourself</a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Contact Information </a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Address </a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Password </a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Setup Your UserName </a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Social Security Number </a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Questionnaire </a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Payment </a>
                    </li>
                    <li className="first">
                      <a className="se_n_c"> Success Message </a>
                    </li>

                  </ul>
                </div>

                <div className="content clearfix">
                  <div className="camel-casing">
                    <div className="body self tab-active">

                      <section className="body self tab-active" style={{ display: 'none' }}>
                        <form name='formValid_0'>
                          <div style={{ height: 500 }}>
                            <div className="row p20">
                              <div className="col-md-12 text-center mb30 form-group">
                                <h3 style={{ fontSize: 20 }} className="text-center">
                                  Select Your Country of Residence
                                </h3>
                              </div>
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-6 selectCountry form-group text-center">
                                    <a href="javascript:void(0)" className="mb10">
                                      <img style={{ width: 150 }} src="http://localhost:8080/assets/images/usa1.jpg" />
                                    </a>
                                    <p><strong>USA</strong></p>
                                  </div>
                                  <div className="col-md-6 selectCountry form-group text-center">
                                    <a href="javascript:void(0)" className="mb10" ng-click="chooseCountry('CA')">
                                      <img style={{ width: 150 }}
                                           src="http://localhost:8080/assets/images/canada.jpg" />
                                    </a>
                                    <p><strong>Canada</strong></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </section>

                      <section className="body self tab-active">
                        <form name='formValid_0'>
                          <div style={{ height: 550 }}>

                            <div className="form-group">
                              <label>First Name</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Last Name</label>
                              <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Date Of Birth</label>
                              <input className="form-control" type="date" />
                            </div>

                            <div className="row form-group">

                              <div className="col-md-6 mb10">
                                <div>
                                  <label>Martial Status</label>
                                </div>
                                <div className="be-radio-icon inline">
                                  <input type="radio" name="marital_status" id="rad2" value="0" />
                                  <label htmlFor="rad2">
                                    <span className="icofont-boy" />
                                  </label>
                                </div>
                                <div className="be-radio-icon inline" style={{ marginLeft: 10 }}>
                                  <input type="radio" name="marital_status" id="rad1" value="1" />
                                  <label htmlFor="rad1">
                                    <span className="icofont-users-alt-4" />
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6 mb10">
                                <div><label>Gender</label></div>
                                <div className="be-radio-icon inline">
                                  <input type="radio" name="gender" id="rad3" value="1" />
                                  <label htmlFor="rad3">
                                    <span className="icofont-female" />
                                  </label>
                                </div>
                                <div className="be-radio-icon inline" style={{ marginLeft: 10 }}>
                                  <input type="radio" name="gender" id="rad4" value="0" />
                                  <label htmlFor="rad4">
                                    <span className="icofont-male" />
                                  </label>
                                </div>
                              </div>

                            </div>
                          </div>
                          <button type="submit" className="btn btn-space btn-primary next-btn pull-right">
                            <span>Next</span> <i className="next-mdi icofont-rounded-right pull-right"/></button>
                          <button type="submit" className="btn btn-space btn-basic back-btn pull-right">
                            <i className="back-mdi icofont-rounded-left pull-left"/> <span>Previous</span>
                          </button>
                        </form>
                      </section>

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
