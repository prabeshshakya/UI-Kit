import React from 'react';
import './assets/sass/style.scss';

import Header from './components/common/header';

function App() {
  return (
    <>
      <div className="guide-wrapper d-flex">
        <div className="sidebar sidebar--bordered-right-1x">

        </div>

        <div className="guide-content">
          <div className="header">
            <Header />
          </div>
          <div className="guide-content__inner col-8">
            <div className="typography ">
              <h3 className="title--lg mb-8">Typography</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
