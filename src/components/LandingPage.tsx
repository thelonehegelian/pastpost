"use client";
import { useState } from "react";
const LandingPage: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false);
  // TODO if form is visible then the button should be Create Capsule
  return (
    <div
      className="h-screen w-full bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1661626753732-f9f5dfd1fc16')",
        backgroundColor: "rgba(0, 0, 0, 1)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <button
          className="rounded text-lg font-bold px-6 py-2 flex items-center gap-2 mb-4 bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => setFormVisible(!formVisible)}
        >
          <i className="fas fa-clock"></i>{" "}
          {/* Assuming you're using FontAwesome for the clock icon */}
          Seize the Clock
        </button>

        {formVisible && (
          <div className="w-1/3 bg-white p-6 rounded shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Capsule Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Video Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Number of People
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Owner
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Capsule Type
              </label>
              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option>Wedding Capsule</option>
                <option>Graduation Capsule</option>
                <option>Birthday Capsule</option>
                <option>Anniversary Capsule</option>
                <option>Create Your Own</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
