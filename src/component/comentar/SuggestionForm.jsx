import React, { useState } from 'react';
import '/src/App.css';

function SuggestionForm({ onAddSuggestion }) {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && suggestion) {
      onAddSuggestion(name, suggestion);
      setName('');
      setSuggestion('');
    }
  };

  return (
    <form className="suggestion-form" onSubmit={handleSubmit}>
      {/* Form Untuk Nama */}
      <div className="form-group">
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan Nama Anda"
          className="form-input"
        />
      </div>
      {/* Form Untuk Saran  */}
      <div className="form-group">
        <textarea
          id="suggestion"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Masukkan Saran Anda "
          className="form-textarea"
        />
      </div>
      <button
        type="submit"
        className="submit-button bg-brandPrimary dark:bg-brandPrimary">
        Kirim Saran
      </button>
    </form>
  );
}

export default SuggestionForm;
