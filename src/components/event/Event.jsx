import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, removeEvent }) => {
  const [deleteBtnVisibility, setDeleteBtnVisibility] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  const buttonStyle = {
    marginTop: height + marginTop,
  };

  return (
    <>
      <div
        style={eventStyle}
        className="event"
        onClick={() => setDeleteBtnVisibility(!deleteBtnVisibility)}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {deleteBtnVisibility && (
        <button style={buttonStyle} className="delete-event-btn" onClick={() => removeEvent(id)}>
          <i className="fas fa-trash-alt"></i>
          <span>Delete</span>
        </button>
      )}
    </>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  removeEvent: PropTypes.func.isRequired,
};

export default Event;
