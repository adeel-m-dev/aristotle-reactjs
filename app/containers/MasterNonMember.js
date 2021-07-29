import React from 'react';

const MasterNonMember = props => (
    <>
      <div className='h-100' style={{ paddingTop: 200 }}>
        <div className='authincation h-100'>
          <div className='container h-100'>
            <div className='row justify-content-center h-100 align-items-center'>
              <div className='col-md-6'>
                <div className='authincation-content'>
                  <div className='row no-gutters'>
                    <div className='col-xl-12'>
                      <div className='auth-form'>
                        {props.children}
                      </div>
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
export default MasterNonMember;
