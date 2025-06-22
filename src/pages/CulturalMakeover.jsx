import React from 'react';

const CulturalMakeovers = () => {
  return (
    <section className="min-h-screen bg-yellow-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-6">Cultural Makeovers</h2>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
        Preview beautiful fashion and makeup inspirations from around the world. Explore fusion-friendly styles and experiment with your look through our cultural makeover previews.
      </p>

      {/* Preview Gallery Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Placeholder Cards */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
            <h3 className="text-2xl font-semibold text-pink-600">Style #{item}</h3>
            <p className="text-md text-gray-600 mt-1">A beautiful cultural fusion look.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CulturalMakeovers;
