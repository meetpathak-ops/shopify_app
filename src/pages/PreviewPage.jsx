import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Shirt,
  Settings,
} from "lucide-react";
import TryOnModal from "../components/TryOnModal";

export default function Preview() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  const colors = [
    "bg-pink-200",
    "bg-blue-200",
    "bg-green-200",
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="p-8 bg-[#f6f6f7] min-h-screen">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Preview
          </h2>
          <p className="text-sm text-gray-500">
            See how the try-on button looks on your storefront
          </p>
        </div>

        {/* Customize Button */}
        <button
          onClick={() => navigate("/settings")}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 flex items-center gap-2"
        >
          <Settings size={16} />
          Customize
        </button>
      </div>

      {/* Browser Card */}
      <div className="bg-white rounded-xl border shadow-sm">
        {/* Browser Top */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-50 rounded-t-xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>

          <div className="text-xs bg-white border rounded-full px-4 py-1 text-gray-500">
            yourstore.myshopify.com/products/summer-dress
          </div>

          <div />
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 gap-10 p-10">
          {/* Left */}
          <div>
            <div className="bg-gray-100 rounded-xl h-[420px] flex items-center justify-center">
              <div className="text-center">
                <Shirt
                  className="mx-auto text-blue-500"
                  size={48}
                />
                <p className="text-gray-500 mt-2 text-sm">
                  Product Image
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mt-6 w-full bg-[#0a7f5a] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#096a4c]"
            >
              <Shirt size={16} />
              Try This On
            </button>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs text-gray-500 tracking-widest">
              SUMMER COLLECTION
            </p>

            <h2 className="text-2xl font-semibold mt-1">
              Floral Summer Dress
            </h2>

            <p className="text-[#0a7f5a] font-semibold mt-2">
              $89.00
            </p>

            <p className="text-gray-600 text-sm mt-4 leading-6">
              A beautiful floral print dress perfect for
              summer days.
            </p>

            {/* Size */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">
                Size
              </p>

              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border text-sm
                    ${
                      selectedSize === size
                        ? "border-green-600 text-green-700 bg-green-50"
                        : "text-gray-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">
                Color
              </p>

              <div className="flex gap-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full border-2 ${color}
                    ${
                      selectedColor === index
                        ? "border-green-600"
                        : "border-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <button className="flex-1 bg-[#0a7f5a] text-white py-3 rounded-lg flex items-center justify-center gap-2">
                <ShoppingCart size={16} />
                Add To Cart
              </button>

              <button className="border rounded-lg px-4">
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <TryOnModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}