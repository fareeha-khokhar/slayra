import React, { useState, useEffect } from 'react';

const MoodStyling = () => {
  const [mood, setMood] = useState('');
  const [typingMessage, setTypingMessage] = useState('');
  const [showTyping, setShowTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood.trim()) {
      setShowTyping(true);
      setTypingMessage('');
    } else {
      setShowTyping(false);
      alert(`Styling tips for mood: ${mood} will be generated!`);
    }
  };

  useEffect(() => {
    if (showTyping) {
      const text = "Mood is not mentioned... tell us how you're feeling.";
      let index = 0;
      const interval = setInterval(() => {
        setTypingMessage(text.slice(0, index + 1));
        index++;
        if (index === text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [showTyping]);

  return (
    <section className="min-h-screen bg-pink-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-6">Mood-Based Styling</h2>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
        Get personalized makeup and fashion recommendations tailored to your mood and energy. Whether you're feeling bold, calm, romantic, or energetic — Slayra has the perfect look for you.
      </p>

      <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-pink-500">Enter Your Mood</h3>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="e.g. calm, confident, bold, romantic..."
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition"
          >
            Get Styling Tips
          </button>
        </form>
        {showTyping && (
          <p className="mt-4 text-pink-600 font-medium italic min-h-[1.5rem]">{typingMessage}</p>
        )}
      </div>
    </section>
  );
};

export default MoodStyling;
