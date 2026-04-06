import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpeg"
import gallery14 from "@/assets/gallery-14.jpeg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";



const images = [
  { src: gallery1, alt: "Nuotrauka 1" },
  { src: gallery2, alt: "Nuotrauka 2" },
  { src: gallery3, alt: "Nuotrauka 3" },
  { src: gallery4, alt: "Nuotrauka 4" },
  { src: gallery5, alt: "Nuotrauka 5" },
  { src: gallery6, alt: "Nuotrauka 6" },
  { src: gallery7, alt: "Nuotrauka 7" },
  { src: gallery8, alt: "Nuotrauka 8" },
  { src: gallery9, alt: "Nuotrauka 9" },
  { src: gallery10, alt: "Nuotrauka 10" },
  { src: gallery11, alt: "Nuotrauka 11" },
  { src: gallery12, alt: "Nuotrauka 12" },
  { src: gallery13, alt: "Nuotrauka 13" },
  { src: gallery14, alt: "Nuotrauka 14" },
  { src: gallery15, alt: "Nuotrauka 15" },
  { src: gallery16, alt: "Nuotrauka 16" },
];

const PhotoCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + images.length) % images.length);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 16000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="gallery" className="py-24 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-base md:text-lg tracking-[0.3em] mb-4">
            GALERIJA
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
              Akimirkos iš mūsų veiklos
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-card">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current}
                src={images[current].src}
                alt={images[current].alt}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(current)}
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/40"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                aria-label="Close image"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-4xl max-h-[90vh] object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoCarousel;
