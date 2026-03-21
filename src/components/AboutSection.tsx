import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] mb-4">
            APIE MUS
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            VšĮ „Tėvynės labui"
          </h2>
          <div className="space-y-5 text-lg leading-relaxed font-light justify-start text-left">
            <p>
              VšĮ „Tėvynės labui“ telkia žmones, kuriems rūpi Lietuvos saugumas, pilietiškumas ir visuomenės atsparumas. Mūsų tikslas – gilinti žinias, lavinti praktinius įgūdžius ir dalintis patirtimi, kuri gali būti svarbi kritinėse situacijose bei ginant Tėvynę.
            </p>
            <p>
              Organizacija telkia bendruomenę, kuri nuolat mokosi, stiprina kompetencijas ir kuria iniciatyvas, padedančias visuomenei būti labiau pasirengusiai iššūkiams.
            </p>
            <p>
              Mes buvome vieni pirmųjų stoję Covid-19 pandemijos, migrantų krizės, oro balionų užkardymo akivaizdon. Visada einame ten, kur mūsų reikia.
            </p>
            <p>
              Savanorio stiprybė – visų mūsų vienybėje. Mes pasirenkame tarnauti Lietuvai savo laisvo laiko sąskaita. Palaikykite mus ne tik žodžiais, bet ir darbais, kad taptume dar geresni.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
