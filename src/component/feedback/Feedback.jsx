import React, { useState } from 'react';
import FeedbackForm from '/src/component/feedback/FeedbackForm';
import FeedbackList from '/src/component/feedback/FeedbackList';
import '/src/App.css';

function Feedback() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : [];
  });

  const handleAddFeedback = (name, feedback) => {
    setFeedbacks((prevFeedbacks) => {
      const newFeedback = { id: Date.now(), name, feedback, likes: 0 };
      const updatedFeedbacks = [...prevFeedbacks, newFeedback];
      localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
      return updatedFeedbacks;
    });
  };

  const handleLikeFeedback = (id) => {
    setFeedbacks((prevFeedbacks) => {
      const updatedFeedbacks = prevFeedbacks.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      );
      localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
      return updatedFeedbacks;
    });
  };

  const handleDeleteFeedback = (id) => {
    setFeedbacks((prevFeedbacks) => {
      const updatedFeedbacks = prevFeedbacks.filter((item) => item.id !== id);
      localStorage.setItem('suggestions', JSON.stringify(updatedFeedbacks));
      return updatedFeedbacks;
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
      <FeedbackForm onAddFeedback={handleAddFeedback} />
      <FeedbackList
        feedbacks={feedbacks}
        onLikeFeedback={handleLikeFeedback}
        onDeleteFeedback={handleDeleteFeedback}
      />
    </div>
  );
}

export default Feedback;
