import React from 'react';

const Master = (props) => {
  return (
    <>
      <header>
        <div className='header'>
          <div className='header-content'>
            <nav className='navbar navbar-expand'>
              <div className='collapse navbar-collapse justify-content-between'>
                <div className='header-left'>

                </div>

                <ul className='navbar-nav header-right'>
                  <li className='nav-item dropdown notification_dropdown'>
                    <a className='nav-link dz-fullscreen primary' href='#'>
                      <i className="icofont-expand" />
                    </a>
                  </li>
                  <li className='nav-item dropdown notification_dropdown'>
                    <a className='nav-link bell bell-link primary' href='#'>
                      <i className="icofont-ui-text-chat" />
                    </a>
                  </li>
                  <li className='nav-item dropdown header-profile'>
                    <a className='nav-link' href='#' role='button' data-toggle='dropdown'>
                      <div className='header-info'>
                        <span>Hello, <strong>Sameer</strong></span>
                      </div>
                      <img src='https://icon-library.com/images/profile-png-icon/profile-png-icon-27.jpg' width='20'
                           alt='' />
                    </a>
                    <div className='dropdown-menu dropdown-menu-right'>
                      <a href='./app-profile.html' className='dropdown-item ai-icon'>
                        <span className='ml-2'>Profile </span>
                      </a>
                      <a href='./email-inbox.html' className='dropdown-item ai-icon'>
                        <span className='ml-2'>Inbox </span>
                      </a>
                      <a href='./page-login.html' className='dropdown-item ai-icon'>
                        <span className='ml-2'>Logout </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="nav-header">
          <a href="index.html" className="brand-logo">
            <img className="logo-abbr" src="https://cdn.hgicrusade.com/18/02/hgi_aristotle_bug_logo-PQF0ylqG.png"
                 alt="" />
          </a>

          <div className="nav-control">
            <div className="hamburger">
              <span className="line"></span><span className="line"></span><span className="line"></span>
            </div>
          </div>
        </div>

        <div className="deznav">
          <div className="deznav-scroll ps ps--active-y">
            <ul className="metismenu" id="menu">
              <li className=" active-no-child mm-active">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="flaticon-381-networking" />
                  <span className="nav-text">Dashboard</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-bag-alt" />
                  <span className="nav-text">Business</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-tools-1" />
                  <span className="nav-text">Product & Tools</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-ui-calendar" />
                  <span className="nav-text">Events</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-license" />
                  <span className="nav-text">Licensing</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-marker-alt-1" />
                  <span className="nav-text">Marketing</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-university" />
                  <span className="nav-text">HGI University</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-flag" />
                  <span className="nav-text">Canada</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-help-robot" />
                  <span className="nav-text">Help Center</span>
                </a>
              </li>
               <li className=" active-no-child">
                <a href="widget-basic.html" className="ai-icon ">
                  <i className="icofont-ui-settings" />
                  <span className="nav-text">Admin</span>
                </a>
              </li>


            </ul>

            {/*<div className="add-menu-sidebar">*/}
            {/*  <img src="images/icon1.png" alt=""/>*/}
            {/*    <p>Organize your menus through button bellow</p>*/}
            {/*    <a href="javascript:void(0);" className="btn btn-primary btn-block light">+ Add Menus</a>*/}
            {/*</div>*/}
            {/*<div className="copyright">*/}
            {/*  <p><strong>Davur - Restaurant Admin Dashboard</strong> © 2020 All Rights Reserved</p>*/}
            {/*  <p>Made with <i className="fa fa-heart"></i> by DexignZone</p>*/}
            {/*</div>*/}
            {/*<div className="ps__rail-x" style={{left: 0, bottom: 0}}>*/}
            {/*  <div className="ps__thumb-x" tabIndex="0" style={{left: 0, width: 0}}></div>*/}
            {/*</div>*/}
            {/*<div className="ps__rail-y" style={{top: 0, right: 0, height: 575}}>*/}
            {/*  <div className="ps__thumb-y" tabIndex="0" style={{top: 0, height: 194}}></div>*/}
            {/*</div>*/}
          </div>
        </div>
      </header>
      <div className="content-body">
        <div className="container-fluid">
        {props.children}
        </div>
      </div>
      <footer>
        Footer goes here
      </footer>
    </>
  );
};

export default Master;
