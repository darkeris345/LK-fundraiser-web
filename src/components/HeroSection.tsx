import { motion } from "framer-motion";
import heroImage from "@/assets/hero-platoon.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Platoon silhouettes at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] mb-4">
            TĖVYNĖS LABUI
          </p> */}
          <h4 className="text-primary font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] mb-6 mx-auto max-w-3xl">
            TĖVYNĖS LABUI
          </h4>
          <h4 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-[0.95] mb-8 mx-auto max-w-4xl">
            Sunkumai, kuriuos įveikiame šiandien, yra saugios rytdienos ir mūsų vienybės pamatas.
          </h4>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 font-light">
            VšĮ „Tėvynės labui“ yra ne pelno siekianti organizacija, vienijanti pilietiškus žmones, siekiančius gilinti žinias ir tobulinti įgūdžius, reikalingus Tėvynės gynybai ir visuomenės atsparumui stiprinti.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#how-to-help"
              className="inline-block bg-primary text-primary-foreground font-display text-sm tracking-[0.2em] px-8 py-3 rounded hover:opacity-90 transition-opacity"
            >
              PRISIDĖK PRIE MISIJOS
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
