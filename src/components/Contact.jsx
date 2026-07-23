import { motion } from 'framer-motion';
import { LuMail as Mail, LuPhone as Phone, LuMapPin as MapPin, LuSend as Send } from 'react-icons/lu';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">05. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-textMain mb-6">Get In Touch</h3>
          <p className="text-textMuted max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 w-full max-w-3xl"
          >
            <div className="glass-card p-6 flex flex-col items-center text-center gap-4 flex-1">
              <div className="p-4 rounded-full bg-accent/10 text-accent">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-sm text-textMuted mb-1">Call Me</span>
                <a href="tel:+918817649589" className="text-lg font-bold text-textMain hover:text-accent transition-colors">8817649589</a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center gap-4 flex-1">
              <div className="p-4 rounded-full bg-secondary/10 text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <span className="block text-sm text-textMuted mb-1">Email Me</span>
                <a href="mailto:adityachaturvedi026@gmail.com" className="text-lg font-bold text-textMain hover:text-secondary transition-colors truncate block">adityachaturvedi026@gmail.com</a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center gap-4 flex-1">
              <div className="p-4 rounded-full bg-green-500/10 text-green-400">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-sm text-textMuted mb-1">Location</span>
                <span className="text-lg font-bold text-textMain">Bhopal, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
