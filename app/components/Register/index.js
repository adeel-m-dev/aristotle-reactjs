import React, { Component } from 'react';
import '../../public/css/register.css';

export default class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };
    this.next = this.next.bind(this);
  }

  next() {
    this.setState({ step: this.state.step + 1 });
  }

  back() {
    this.setState({ step: this.state.step - 1 });
  }

  render() {
    let { step } = this.state;
    console.log(step);
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
                    <li className={`first ${step === 0 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 0 ? 'selected_color' : ''}`}> Select Country and Plan </a>
                    </li>
                    <li className={`first ${step === 1 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 1 ? 'selected_color' : ''}`}> Tell Us about yourself</a>
                    </li>
                    <li className={`first ${step === 2 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 2 ? 'selected_color' : ''}`}> Contact Information </a>
                    </li>
                    <li className={`first ${step === 3 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 3 ? 'selected_color' : ''}`}> Address </a>
                    </li>
                    <li className={`first ${step === 4 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 4 ? 'selected_color' : ''}`}> Password </a>
                    </li>
                    <li className={`first ${step === 5 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 5 ? 'selected_color' : ''}`}> Setup Your UserName </a>
                    </li>
                    <li className={`first ${step === 6 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 6 ? 'selected_color' : ''}`}> Social Security Number </a>
                    </li>
                    <li className={`first ${step === 7 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 7 ? 'selected_color' : ''}`}> Questionnaire </a>
                    </li>
                    <li className={`first ${step === 8 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 8 ? 'selected_color' : ''}`}> Payment </a>
                    </li>
                    <li className={`first ${step === 9 ? 'current' : ''}`}>
                      <a className={`se_n_c ${step === 9 ? 'selected_color' : ''}`}> Success Message </a>
                    </li>

                  </ul>
                </div>

                <div className="content clearfix">
                  <div className="camel-casing">
                    <div className="body self tab-active">
                      {step === 0 && (
                        <section className="body self tab-active">
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
                                        <img style={{ width: 150 }}
                                             src="http://localhost:8080/assets/images/usa1.jpg" />
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
                      )}

                      {step === 1 && (
                        <section className="body self tab-active mr18">
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
                          </form>
                        </section>
                      )}
                      {step === 2 && (
                        <section className="body self tab-active mr18">
                          <form name='formValid_0'>
                            <div style={{ height: 550 }}>
                              <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group">
                                <label>Phone</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group">
                                <label>Alt Phone</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </form>
                        </section>
                      )}
                      {step === 3 && (
                        <section className="body self tab-active mr18">
                          <form name='formValid_0'>
                            <div style={{ height: 550 }}>
                              <div className="form-group">
                                <label>Address</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group">
                                <label>Address 2</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group">
                                <label>City</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group">
                                <label>State</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group">
                                <label>Postal Code</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </form>
                        </section>
                      )}
                      {step === 4 && (
                        <section className="body self tab-active mr18">
                          <form name='formValid_0'>
                            <div style={{ height: 550 }}>
                              <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password" />
                              </div>
                              <div className="form-group">
                                <label>Re Type Password</label>
                                <input className="form-control" type="password" />
                              </div>
                            </div>
                          </form>
                        </section>
                      )}
                      {step === 5 && (
                        <section className="body self tab-active mr18">
                          <form name='formValid_0'>
                            <div style={{ height: 550 }}>
                              <div className="form-group">
                                <label>User Name (Auto Generated through first and last name)</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </form>
                        </section>
                      )}
                      {step === 6 && (
                        <section className="body self tab-active mr18">
                          <form name='formValid_0'>
                            <div style={{ height: 550 }}>
                              <div className="form-group">
                                <label>Social Security Number</label>
                                <input className="form-control" type="text" placeholder='XXX-XXX-XXX' />
                              </div>
                            </div>
                          </form>
                        </section>
                      )}
                      {step === 7 && (
                        <section className="body self tab-active mr18">
                          <form name='formValid_0'>
                            <div style={{ height: 550 }}>
                              <div className=" mp col-md-12 mb10">
                                <form name="que_form_{{$index}}" noValidate>
                                  <div style={{ height: 470 }}>
                                    <div style={{ maxHeight: 350, overflow: 'auto' }}>
                                      <div>
                                        By continuing, I: (i) signify my acceptance to all of the terms, and conditions
                                        and restrictions contained or referenced in the Associate Membership Agreement
                                        ("AMA") with HGI; (ii) agree that upon acceptance by HGI the AMA shall be a
                                        valid
                                        and enforceable agreement between us in its electronic form; and (iii) consent
                                        to
                                        the record of the AMA transaction being maintained in its electronic form,
                                        unless
                                        I withdraw this consent in the manner set forth on the first page of the
                                        application and in the instructions above. A copy of the AMA between us must be
                                        printed by pushing the print button below on your browser. You are signing this
                                        Agreement electronically. You agree your electronic signature is the legal
                                        equivalent of your manual signature on this Agreement. You consent to be legally
                                        bound by this Agreement's terms and conditions. You further agree that your use
                                        of
                                        a key pad,
                                      </div>
                                    </div>
                                    <div className="col-md-6 mb10" style={{ position: 'relative', top: 10 }}>
                                      <label className="mb10">
                                        <input type="radio" className="option-input radio" name="q_123" value="q_123" />
                                        &nbsp; Agree
                                      </label>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </form>
                        </section>
                      )}
                      {step === 8 && (
                        <section className="body self tab-active mr18">
                          <form name='formValid_0'>
                            <div style={{ height: 550 }}>
                              <div>
                                <div className="form-group">
                                  <label>Name on Card</label>
                                  <input type="text" className="form-control" id="name" name="name" />

                                  <div className="form-group">
                                    <label>Credit Card</label>
                                    <input type="text" name="card" className="form-control" id="card" />
                                  </div>
                                  <div className="row mt35">
                                    <div className="col-md-6 form-group"><label>Select Expiry Month</label>
                                      <select className="form-control" name="exp_month">
                                        <option value="" className="" selected="selected">Select Expiry Month</option>
                                        <option label="1" value="number:1">1</option>
                                        <option label="2" value="number:2">2</option>
                                        <option label="3" value="number:3">3</option>
                                        <option label="4" value="number:4">4</option>
                                        <option label="5" value="number:5">5</option>
                                        <option label="6" value="number:6">6</option>
                                        <option label="7" value="number:7">7</option>
                                        <option label="8" value="number:8">8</option>
                                        <option label="9" value="number:9">9</option>
                                        <option label="10" value="number:10">10</option>
                                        <option label="11" value="number:11">11</option>
                                        <option label="12" value="number:12">12</option>
                                      </select>
                                    </div>
                                    <div className="col-md-6 form-group">
                                      <label>Select Expiry year</label>
                                      <select
                                        className="form-control" name="exp_year">
                                        <option value="" className="" selected="selected">Select Expiry year</option>
                                        <option label="2020" value="number:2020">2020</option>
                                        <option label="2021" value="number:2021">2021</option>
                                        <option label="2022" value="number:2022">2022</option>
                                        <option label="2023" value="number:2023">2023</option>
                                        <option label="2024" value="number:2024">2024</option>
                                        <option label="2025" value="number:2025">2025</option>
                                        <option label="2026" value="number:2026">2026</option>
                                        <option label="2027" value="number:2027">2027</option>
                                        <option label="2028" value="number:2028">2028</option>
                                        <option label="2029" value="number:2029">2029</option>
                                        <option label="2030" value="number:2030">2030</option>
                                      </select>
                                    </div>
                                    <div className="col-md-6">
                                      <label htmlFor="">CVC</label>
                                      <input type="text" className="form-control" name="cvc" />
                                    </div>
                                    <div className="col-md-6">
                                      <label>Zip Code</label>
                                      <input type="text" className="form-control" name="zip" placeholder="A0A 0A0"
                                             maxLength="7" />
                                    </div>
                                    <div className="form-group col-md-12" style={{ marginTop: 15 }}>
                                      <div>
                                        <label>
                                          <input type="checkbox" name="authorize" /> I
                                          certify that the above credit card is my personal card and I authorize a
                                          one-time
                                          charge for the amount below </label>
                                      </div>
                                      <div style={{ marginTop: 15 }}>
                                        <label>
                                          <input type="checkbox" name="refund" />  &nbsp;
                                          I understand that there are NO REFUNDS and this purchase is NOT TRANSFERABLE.
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </section>
                      )}
                      {step === 9 && (
                        <section className="body self tab-active mr18">
                          <form name='formValid_0'>
                            <div style={{ height: 550 }}>
                              <div className="text-center successIcon form-group">
                                <i className="icofont-check-circled" />
                              </div>
                              <h5 className="text-center form-group" style={{ lineHeight: '30px' }}>
                                Dear , Welcome to your HGI Aristotle. Once logged in, please navigate to the account
                                tab
                                to complete your
                                profile. Be sure to enter your banking information to expedite commission payouts.
                              </h5>
                            </div>
                          </form>
                        </section>
                      )}

                      <button type="submit" onClick={() => this.next()}
                              className="btn btn-space btn-primary next-btn pull-right">
                        <span>Next</span> <i className="next-mdi icofont-rounded-right pull-right" /></button>
                      <button onClick={() => this.back()} type="submit"
                              className="btn btn-space btn-basic back-btn pull-right">
                        <i className="back-mdi icofont-rounded-left pull-left" /> <span>Previous</span>
                      </button>

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
