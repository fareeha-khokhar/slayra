import React from 'react';

const SkinAnalysis = () => {
  return (
    <section className="min-h-screen bg-white text-center py-16 px-6">
      <h2 className="text-4xl font-bold text-pink-600 mb-4">AI Skin & Tone Analysis</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        Upload your selfie and let Slayra's AI detect your undertones, identify your skin type,
        and suggest your most flattering color palette.
      </p>

      {/* Upload box */}
      <div className="border-2 border-dashed border-pink-300 p-10 rounded-xl max-w-xl mx-auto">
        <input type="file" accept="image/*" className="mb-4" />
        <p className="text-sm text-gray-500">Upload a clear selfie in natural light.</p>
        <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
          Analyze
        </button>
      </div>

      {/* Results */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Results</h3>
        <p className="text-gray-600 italic">Your analysis will appear here after uploading your image.</p>
      </div>
    </section>
  );
};

export default SkinAnalysis;
