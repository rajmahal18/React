import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ScreenshotModal({
  screenshots = [],
  isOpen,
  onClose,
  index = 0,
  setIndex,
  originRect,
}) {
  if (!isOpen || !screenshots.length) return null;

  // Track direction (1 = next, -1 = prev)
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <AnimatePresence initial={false} custom={direction}>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="relative flex items-center justify-center p-4 max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main image with sliding animation */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={index}
                src={screenshots[index]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="object-contain max-w-[70vw] max-h-[70vh] rounded-lg shadow-lg"
              />
            </AnimatePresence>

            {/* Prev preview */}
            {index > 0 && (
            <motion.div
                className="absolute left-[-22%] top-1/2 -translate-y-1/2 
                        w-[20vw] max-h-[25vh] flex items-center justify-center 
                        rounded-xl overflow-hidden bg-black hidden md:flex shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => {
                e.stopPropagation();
                setIndex(index === 0 ? screenshots.length - 1 : index - 1);
                }}
            >
                <img
                src={screenshots[index - 1]}
                alt="prev"
                className="w-full h-full object-contain opacity-80
                            rounded-xl cursor-pointer shadow-md
                            transition-transform duration-300 ease-out
                            scale-100 hover:scale-105"
                />

            </motion.div>
            )}

            {/* Next preview */}
            {index < screenshots.length - 1 && (
            <motion.div
                className="absolute right-[-22%] top-1/2 -translate-y-1/2 
                        w-[20vw] max-h-[25vh] flex items-center justify-center 
                        rounded-xl overflow-hidden bg-black hidden md:flex shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => {
                e.stopPropagation();
                setIndex(index === screenshots.length - 1 ? 0 : index + 1);
                }}
            >
                <img
                src={screenshots[index + 1]}
                alt="next"
                className="w-full h-full object-contain opacity-80
                            rounded-xl cursor-pointer shadow-md
                            transition-transform duration-300 ease-out
                            scale-100 hover:scale-105"
                />
            </motion.div>
            )}


            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="absolute top-2 right-2 text-white text-2xl md:text-3xl font-bold"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
