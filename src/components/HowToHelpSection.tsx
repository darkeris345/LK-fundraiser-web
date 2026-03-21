import { motion } from "framer-motion";
import { CreditCard, Building2, Heart } from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "Individualiems rėmėjams",
    description:
      "Kiekvienas rėmėjas mums yra svarbus. Prenumeravę naujienlaiškį kartą per metus gausite veiklos ataskaitą ir informaciją, kaip buvo panaudota Jūsų parama.",
    link: "#contact",
    linkText: "Susisiekite su mumis →",
  },
  {
    icon: CreditCard,
    title: "Įmonėms ir organizacijoms",
    description:
      "Įmonėms ir organizacijoms, prisidedančioms sutarto dydžio parama, siūlome profesionalius grupinius užsiėmimus ir ataskaitas.",
    detailTitle: "Siūlomi mokymai:",
    details: [
      "Taktinė medicina ir pirmoji pagalba",
      "Dronų technologijos ir bepiločių orlaivių naudojimas",
      "Išgyvenimo žygiai su karybos elementais",
      "Pilietinio pasipriešinimo pagrindai",
    ],
  },
  {
    icon: Building2,
    title: "Ką parama suteikia",
    description:
      "Parama padeda įsigyti reikalingą įrangą, organizuoti mokymus ir stiprinti visuomenės pasirengimą krizėms.",
    link: "#how-to-help",
    linkText: "Sužinok daugiau →",
  },
];

const HowToHelpSection = () => {
  return (
    <section id="how-to-help" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] mb-4">
            KAIP PADĖTI
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Paramos galimybės
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border p-8 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-sm">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm mb-4 text-justify">
                {step.description}
              </p>
              {step.detailTitle && (
                <p className="text-sm font-semibold text-foreground mb-2 text-left">
                  {step.detailTitle}
                </p>
              )}
              {Array.isArray(step.details) ? (
                <ul className="text-sm text-muted-foreground list-disc list-inside text-left space-y-1 mb-4">
                  {step.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : (
                step.details && (
                  <p className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-sm text-left">
                    {step.details}
                  </p>
                )
              )}
              {step.link && (
                <a
                  href={step.link}
                  className="inline-block text-primary text-sm font-medium hover:underline mt-2"
                >
                  {step.linkText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelpSection;
