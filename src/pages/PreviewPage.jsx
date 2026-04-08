import { useState } from "react";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("green");

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "pink", class: "bg-pink-300" },
    { name: "blue", class: "bg-blue-300" },
    { name: "green", class: "bg-green-300" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row gap-8">
        
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="bg-gray-100 rounded-xl h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-5xl">👗</div>
              <p className="mt-2">Product Image</p>
            </div>
          </div>

          <button className="bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold transition">
            👕 Try This On
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Summer Collection
          </p>

          <h1 className="text-2xl font-bold">
            Floral Summer Dress
          </h1>

          <p className="text-green-700 text-xl font-semibold">$89.00</p>

          <p className="text-gray-600 text-sm leading-relaxed">
            A beautiful floral print dress perfect for summer days.
            Made from lightweight breathable fabric with a flattering
            A-line silhouette.
          </p>

          {/* Size Selector */}
          <div>
            <p className="font-medium mb-2">Size</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-2 border rounded-lg transition
                    ${
                      selectedSize === size
                        ? "border-green-600 text-green-700"
                        : "hover:border-gray-400"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <p className="font-medium mb-2">Color</p>
            <div className="flex gap-3">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 transition
                    ${color.class}
                    ${
                      selectedColor === color.name
                        ? "border-black scale-110"
                        : "border-transparent"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
              🛒 Add To Cart
            </button>

            <button className="w-14 border rounded-xl flex items-center justify-center text-xl hover:bg-gray-100 transition">
              ♡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}