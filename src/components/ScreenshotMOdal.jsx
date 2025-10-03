import { useState } from "react";

export default function ScreenshotModal({ screenshots, isOpen, onClose }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () => setIndex(i => (i === screenshots.length - 1 ? 0 : i + 1));

  if (!isOpen) return null;

  return (
    <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        onClick={onClose}
        >
        <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
        >
            <img
            src={screenshots[index]}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
            />

            {/* Prev/Next buttons */}
            <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-black text-4xl font-bold"
            >
            ‹
            </button>
            <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-black text-4xl font-bold"
            >
            ›
            </button>

            {/* Close button */}
            <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 text-black text-3xl font-bold"
            >
            ✕
            </button>
        </div>
        </div>

  );
}
