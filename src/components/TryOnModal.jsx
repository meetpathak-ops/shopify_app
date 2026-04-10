import { useState } from "react";
import { X, Upload, Loader2, Check } from "lucide-react";

export default function TryOnModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleUpload = () => {
    setLoading(true);
    setStep(2);

    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2000);
  };

  const handleReset = () => {
    setStep(1);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[520px] rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Try This On</h2>
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Step 1 Upload */}
        {step === 1 && (
          <div className="text-center py-10">
            <Upload className="mx-auto mb-4" size={40} />
            <p className="mb-4 text-gray-600">
              Upload your photo to try this outfit
            </p>

            <button
              onClick={handleUpload}
              className="bg-[#0a7f5a] text-white px-6 py-2 rounded-lg"
            >
              Upload Photo
            </button>
          </div>
        )}

        {/* Step 2 Loading */}
        {step === 2 && (
          <div className="text-center py-10">
            <Loader2 className="mx-auto animate-spin mb-4" size={40} />
            <p className="text-gray-600">Generating Try-On...</p>
          </div>
        )}

        {/* Step 3 Result */}
        {step === 3 && (
          <div className="text-center py-6">
            <Check
              className="mx-auto text-green-600 mb-4"
              size={40}
            />
            <p className="mb-4 font-medium">
              Try-On Generated Successfully
            </p>

            <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
              Preview Image
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={handleReset}
                className="border px-4 py-2 rounded-lg"
              >
                Try Again
              </button>

              <button
                onClick={onClose}
                className="bg-[#0a7f5a] text-white px-4 py-2 rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}