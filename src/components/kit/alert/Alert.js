import React from 'react';

import AlertDefault from './AlertDefault';

const Alert = () => {
  return (
    <div className="mt--11x">
      <div className="title-area  mb--7x">
        <h2 className="title title--largest title--dark font-weight--thin mb--4x">Alerts</h2>
        <p className="lead-text">Create alert messages with variety of Styles</p>
      </div>

      <div className="mb--11x">
        <AlertDefault />
      </div>

      {/* <div className="mb--11x">
        <ButtonVariants />
      </div>

      <div className="mb--11x">
        <ButtonSize />
      </div>

      <div className="mb--11x">
        <ButtonShadow />
      </div> */}
    </div>
  );
}

export default Alert;
