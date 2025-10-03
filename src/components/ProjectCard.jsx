import { useState, useRef } from "react";

export default function ProjectCard({
  title,
  tags,
  description,
  link,
  screenshot,
  screenshots,
  onViewScreenshots,
}) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      className="w-full h-64 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      ref={cardRef}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-front bg-white shadow-md p-5 flex flex-col justify-between rounded-xl">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back */}
        <div
          className="flip-card-back rounded-xl relative flex items-center justify-center text-white text-center p-4"
          style={{
            backgroundImage: `url(${screenshot})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 text-black font-semibold underline text-sm"
          >
            View live
          </a>

          <button
            className="text-black font-semibold underline"
            onClick={(e) => {
                e.stopPropagation();
                const rect = e.currentTarget.getBoundingClientRect(); // get bounding box
                onViewScreenshots({
                screenshots,
                index: 0,
                originRect: rect,
                });
            }}
            >
            View screenshots
            </button>
        </div>
      </div>
    </div>
  );
}
