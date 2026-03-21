import { motion } from "framer-motion";
import { Mail, MapPin, Phone, FileUser } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary">
            KONTAKTAI
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-8 text-foreground">
            Susisiekite su mumis
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-10">
            Jei turite klausimų apie paramą arba norite koordinuoti paramos pristatymą, susisiekite su mumis žemiau nurodytais kanalais.
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-display text-sm tracking-wide text-foreground mb-1">EMAIL</p>
                <a href="mailto:tevyneslabui@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  tevyneslabui@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-display text-sm tracking-wide text-foreground mb-1">PHONE</p>
                <a href="tel:+380000000000" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +380 (00) 000-00-00
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileUser className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-display text-sm tracking-wide text-foreground mb-1">VšĮ „Tėvynės labui“</p>
                <p className="text-muted-foreground text-sm">Įmonės kodas: 306207884</p>

              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
