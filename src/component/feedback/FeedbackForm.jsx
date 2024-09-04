import React, { useState } from 'react';
import '/src/App.css';

function FeedbackForm({ onAddFeedback }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && feedback) {
      onAddFeedback(name, feedback);
      setName('');
      setFeedback('');
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
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
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
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

export default FeedbackForm;
