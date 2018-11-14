import React from 'react';

const Continue = ({isVisible, onContinue})  => {
    return (
      <div className="row">
        {!isVisible ? null : <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Next</button>
        </div> }
      </div>)
};

export default Continue;
