import { motion } from "framer-motion";
import { CreditCard, Building2, Heart } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const steps = [
  {
    icon: Heart,
    title: "Individualiems rėmėjams",
    description:
      "Kiekvienas rėmėjas mums yra svarbus. Prenumeravę naujienlaiškį kartą per metus gausite veiklos ataskaitą ir informaciją, kaip buvo panaudota Jūsų parama.",
    details:
      "Parama gali būti prenumeruojama kas mėnesį arba skiriama vienkartinė suma.",

    link: "https://contribee.com/tevyneslabui",
    linkText: "Paremti per Contribee",
    secondaryLink: "modal",
    secondaryLinkText: "Paremti bankiniu pavedimu",
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
    secondaryLink: "#contact",
    secondaryLinkText: "Susisiekite su mumis →",
  },
  {
    icon: Building2,
    title: "Paremkite mūsų veiklą – skirkite 1,2 % GPM",
    description:
      "Kviečiame prisidėti prie mūsų veiklos skiriant 1,2 % jau sumokėto gyventojų pajamų mokesčio. Tai Jums nieko papildomai nekainuoja, tačiau mums leidžia tęsti ir plėsti svarbias iniciatyvas.",
    buttonUrl: "https://www.youtube.com/watch?v=VVpaY-FFbKk",
    buttonText: "Instrukcija, kaip skirti GPM",
    button2Url: "https://deklaravimas.vmi.lt/lt/Pradinis_Prisijungimo_puslapis/Prisijungimasperisorinessistemas.aspx",
    button2Text: "Prisijungti prie EDS sistemos",
    details:
      "Kaip tai padaryti?\nTai užtruks vos kelias minutes – sekite instrukciją.",
    orgInfo: {
      name: "VšĮ „Tėvynės labui“",
      code: "306207884",
    },
    thanks: "Ačiū už Jūsų palaikymą!",
  },
];

const HowToHelpSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <p className="text-primary font-display text-base md:text-lg tracking-[0.3em] mb-4">
            KAIP PADĖTI
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Paramos galimybės
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              <p className="text-foreground/85 font-light leading-relaxed text-md mb-4 text-left">
                {step.description}
              </p>
              {step.details && typeof step.details === "string" && (
                <p className="text-foreground/85 font-light leading-relaxed text-md mb-4 text-left whitespace-pre-line">
                  {step.details}
                </p>
              )}
              {step.buttonUrl && (
                <a
                  href={step.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-primary text-primary-foreground px-6 py-2 rounded hover:opacity-90 transition-opacity text-sm font-medium mb-4 text-center"
                >
                  {step.buttonText}
                </a>
              )}
              {step.button2Url && (
                <a
                  href={step.button2Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-primary text-primary-foreground px-6 py-2 rounded hover:opacity-90 transition-opacity text-sm font-medium mb-4 text-center"
                >
                  {step.button2Text}
                </a>
              )}
              {step.orgInfo && (
                <div className="bg-muted/50 p-3 rounded-sm text-left text-sm mb-4">
                  <p className="font-semibold text-foreground mb-1">
                    {" "}
                    {step.orgInfo.name}
                  </p>
                  <p className="text-foreground/85">
                    {" "}
                    Įmonės kodas: {step.orgInfo.code}
                  </p>
                </div>
              )}
              {step.detailTitle && (
                <p className="text-sm font-semibold text-foreground mb-2 text-left">
                  {step.detailTitle}
                </p>
              )}
              {Array.isArray(step.details) ? (
                <ul className="text-sm text-foreground/85 list-disc list-inside text-left space-y-1 mb-4">
                  {step.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : null}
              <div className="flex flex-col gap-2 mt-4">
                {step.link && (
                  <a
                    href={step.link}
                    target={step.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      step.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity text-center text-sm"
                  >
                    {step.linkText}
                  </a>
                )}
                {step.secondaryLink && step.secondaryLink === "modal" ? (
                  <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                      <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity text-center text-sm">
                        {step.secondaryLinkText}
                      </button>
                    </DialogTrigger>
                    <DialogContent className="p-4 md:p-6 lg:p-8">
                      <DialogHeader>
                        <DialogTitle>Bankinio pavedimo duomenys</DialogTitle>
                        <DialogDescription>
                          Naudokite šiuos duomenis norėdami atlikti bankinį pavedimą:
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-2">
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <p className="font-semibold">Gavėjas:</p>
                          <p>Tėvynės labui, VŠĮ</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <p className="font-semibold">Sąskaitos nr.:</p>
                          <p>LT163500010016160915</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <p className="font-semibold">Bankas:</p>
                          <p>Paysera LT, UAB</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <p className="font-semibold">SWIFT/BIC kodas:</p>
                          <p>EVIULT2VXXX</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  step.secondaryLink && (
                    <a
                      href={step.secondaryLink}
                      className="inline-block text-primary text-base font-medium hover:underline"
                    >
                      {step.secondaryLinkText}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToHelpSection;
