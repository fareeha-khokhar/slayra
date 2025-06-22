import React from 'react';

const SelfCareGuide = () => {
  return (
    <section className="min-h-screen bg-green-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-6">Self-Care Guide</h2>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
        Discover personalized self-care tips focused on your diet, skincare, and overall wellness. Stay glowing inside and out with expert recommendations tailored to you.
      </p>

      {/* Self-Care Tips Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-pink-600 mb-2">Skincare</h3>
          <p className="text-md text-gray-600">
            Tips based on your skin type and concerns. Get recommendations for natural routines and dermatologist-approved products.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-pink-600 mb-2">Diet</h3>
          <p className="text-md text-gray-600">
            Explore meal suggestions that fuel your energy and match your lifestyle — whether you're vegan, keto, or just balanced.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-pink-600 mb-2">Wellness</h3>
          <p className="text-md text-gray-600">
            Get daily mental wellness practices, stress-busting routines, and holistic care tips to feel your best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelfCareGuide;