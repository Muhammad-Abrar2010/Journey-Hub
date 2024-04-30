
const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 m-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-6 mb-4">
              <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Travel Guides</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Our team of expert travel guides provide insider tips and recommendations to help you make the most of your journey.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-6 mb-4">
              <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customized Itineraries</h3>
            <p className="text-lg text-gray-600 leading-relaxed">We create personalized itineraries tailored to your preferences, ensuring a seamless and unforgettable travel experience.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-6 mb-4">
              <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">24/7 Customer Support</h3>
            <p className="text-lg text-gray-600 leading-relaxed">Our dedicated customer support team is available 24/7 to assist you with any questions or concerns you may have before, during, or after your trip.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
