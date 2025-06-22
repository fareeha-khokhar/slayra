import React from 'react';

const features = [
  { title: "AI Skin & Tone Analysis", desc: "Detects undertones, skin type & suggests best color palettes." },
  { title: "Mood-Based Styling", desc: "Get makeup & fashion tailored to your mood and energy." },
  { title: "Smart Outfit Pairing", desc: "Upload your wardrobe & get daily pairing ideas." },
  { title: "Cultural Makeovers", desc: "Preview styles from different cultures — fusion-friendly." },
  { title: "Self-Care Guide", desc: "Diet, skincare & wellness tips personalized for you." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 px-6">
      <h3 className="text-3xl text-center font-semibold mb-12">Core Features</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div key={idx} className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-pink-600">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
