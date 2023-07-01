import React from "react";

export const PopUp = (props) => {
  return props.trigger ? (
    <div className='pop-up'>
      <div className='pop-up-inner'>
        <p>
          {props.text}
          {props.setAns}
        </p>
        <button
          className='btn btn-continue'
          onClick={() => props.setTrigger(false)}
        >
          Back
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
