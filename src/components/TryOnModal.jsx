import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Upload, Camera, Loader2 } from "lucide-react";

export default function TryOnModal({ open, onOpenChange }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Try On</h2>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleUpload}
              className="border h-40 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-50"
            >
              <Upload />
              Upload Photo
            </button>

            <button
              className="border h-40 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-gray-50"
            >
              <Camera />
              Take Photo
            </button>
          </div>

          {loading && (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="animate-spin" />
              <span className="ml-2">Generating preview...</span>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}