import React, { useState } from 'react';
import SuggestionForm from '/src/component/feedback/FeedbackForm';
import SuggestionList from '/src/component/feedback/FeedbackList';
import '/src/App.css';

function Comentar() {
  const [suggestions, setSuggestions] = useState(() => {
    const savedSuggestions = localStorage.getItem('suggestions');
    return savedSuggestions ? JSON.parse(savedSuggestions) : [];
  });

  const handleAddSuggestion = (name, suggestion) => {
    setSuggestions((prevSuggestions) => {
      const newSuggestion = { id: Date.now(), name, suggestion, likes: 0 };
      const updatedSuggestions = [...prevSuggestions, newSuggestion];
      localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions));
      return updatedSuggestions;
    });
  };

  const handleLikeSuggestion = (id) => {
    setSuggestions((prevSuggestions) => {
      const updatedSuggestions = prevSuggestions.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      );
      localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions));
      return updatedSuggestions;
    });
  };

  const handleDeleteSuggestion = (id) => {
    setSuggestions((prevSuggestions) => {
      const updatedSuggestions = prevSuggestions.filter(
        (item) => item.id !== id
      );
      localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions));
      return updatedSuggestions;
    });
  };

  return (
    <div className="container dark:black">
      <h1
        className="text-neutralDGrey dark:text-white font-semibold text-custom-30 ml-14"
        style={{ paddingTop: '40px' }}>
        Kritik dan Saran
      </h1>

      <p
        className="text-custom-17 text-neutralGrey dark:text-white"
        style={{ marginLeft: '55px', fontWeight: 'normal' }}>
        Silakan masukkan kritik dan saran Anda
      </p>
      <SuggestionForm onAddSuggestion={handleAddSuggestion} />
      <SuggestionList
        suggestions={suggestions}
        onLikeSuggestion={handleLikeSuggestion}
        onDeleteSuggestion={handleDeleteSuggestion}
      />
    </div>
  );
}

export default Comentar;
