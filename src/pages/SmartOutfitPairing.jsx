import React, { useState } from 'react';

const SmartOutfitPairing = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      console.log('Uploading:', selectedFile.name);
      // Later: send to backend or AI model
    } else {
      alert('Please upload at least one wardrobe image.');
    }
  };

  return (
    <section className="min-h-screen bg-pink-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-6">Smart Outfit Pairing</h2>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
        Upload your wardrobe and get daily outfit pairing ideas. Let Slayra AI help you style smarter every day.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
        <label className="block text-left text-pink-500 font-medium mb-2">Upload Clothing Items:</label>
        <input 
          type="file" 
          multiple 
          onChange={handleFileChange} 
          className="w-full border p-3 rounded-md" 
          accept="image/*"
        />

        <button
          type="submit"
          className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition"
        >
          Get Pairing Ideas
        </button>
      </form>
    </section>
  );
};

export default SmartOutfitPairing;
