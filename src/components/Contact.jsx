import { motion } from 'framer-motion';
import { LuMail as Mail, LuPhone as Phone, LuMapPin as MapPin, LuLinkedin as Linkedin } from 'react-icons/lu';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">05. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-textMain mb-6">Get In Touch</h3>
          <p className="text-textMuted max-w-lg mx-auto">
            I'm actively seeking opportunities in Networking, Linux Administration, DevOps, and Cloud Infrastructure. My inbox and phone are always open!
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-full bg-accent/10 text-accent">
                <Phone size={24} />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-textMuted mb-1">Call Me</span>
                <a href="tel:+918602798496" className="text-base font-bold text-textMain hover:text-accent transition-colors">+91-8602798496</a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-full bg-secondary/10 text-secondary">
                <Mail size={24} />
              </div>
              <div className="w-full">
                <span className="block text-xs uppercase tracking-wider text-textMuted mb-1">Email Me</span>
                <a href="mailto:adityachaturvedi026@gmail.com" className="text-sm font-bold text-textMain hover:text-secondary transition-colors truncate block">adityachaturvedi026@gmail.com</a>
              </div>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-full bg-green-500/10 text-green-400">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-textMuted mb-1">Location</span>
                <span className="text-sm font-bold text-textMain">Bhopal, Madhya Pradesh</span>
              </div>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center gap-4">
              <div className="p-4 rounded-full bg-blue-500/10 text-blue-400">
                <Linkedin size={24} />
              </div>
              <div className="w-full">
                <span className="block text-xs uppercase tracking-wider text-textMuted mb-1">LinkedIn</span>
                <a href="https://www.linkedin.com/in/aditya-chaturvedii-/" target="_blank" rel="noreferrer" className="text-sm font-bold text-textMain hover:text-accent transition-colors truncate block">aditya-chaturvedii-</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
