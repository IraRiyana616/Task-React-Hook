import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle } from 'react-icons/fa';
import '/src/App.css';

function FeedbackList({ feedbacks, onLikeFeedback }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div>
      <ul className="feedback-list">
        {feedbacks
          .slice(0, visibleCount)
          .map(({ id, name, feedback, likes }) => (
            <li key={id} className="feedback-item">
              <div className="feedback-content">
                <div className="name-avatar">
                  <FaUserCircle className="avatar-icon" />
                  <h3 className="feedback-name">{name}</h3>
                </div>
                <p className="feedback-text">{feedback}</p>
                <button
                  className="like-button"
                  onClick={() => onLikeFeedback(id)}>
                  <FontAwesomeIcon icon={faThumbsUp} /> ({likes})
                </button>
              </div>
            </li>
          ))}
      </ul>
      {visibleCount < feedbacks.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          Lihat Selengkapnya
        </button>
      )}
    </div>
  );
}

export default FeedbackList;
