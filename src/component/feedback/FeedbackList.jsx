import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle } from 'react-icons/fa';
import '/src/App.css';

function SuggestionList({ suggestions, onLikeSuggestion }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div>
      <ul className="suggestion-list">
        {suggestions
          .slice(0, visibleCount)
          .map(({ id, name, suggestion, likes }) => (
            <li key={id} className="suggestion-item">
              <div className="suggestion-content">
                <div className="name-avatar">
                  <FaUserCircle className="avatar-icon" />
                  <h3 className="suggestion-name">{name}</h3>
                </div>
                <p className="suggestion-text">{suggestion}</p>
                <button
                  className="like-button"
                  onClick={() => onLikeSuggestion(id)}>
                  <FontAwesomeIcon icon={faThumbsUp} /> ({likes})
                </button>
              </div>
            </li>
          ))}
      </ul>
      {visibleCount < suggestions.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          Lihat Selengkapnya
        </button>
      )}
    </div>
  );
}

export default SuggestionList;
