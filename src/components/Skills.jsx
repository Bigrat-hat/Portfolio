import { motion } from 'framer-motion';
import { LuCode as Code, LuLayoutDashboard as Layout, LuDatabase as Database, LuServer as Server, LuShield as Shield, LuCloud as Cloud, LuTerminal as Terminal } from 'react-icons/lu';

const skillCategories = [
  {
    title: 'DevOps & Infrastructure',
    icon: <Cloud size={20} />,
    color: 'from-red-500 to-rose-600',
    skills: ['Linux Administration', 'Bash Scripting', 'SSH', 'Networking Fundamentals', 'Cloud Fundamentals (AWS)']
  },
  {
    title: 'Languages',
    icon: <Code size={20} />,
    color: 'from-blue-500 to-cyan-400',
    skills: ['Python', 'JavaScript', 'SQL', 'Bash']
  },
  {
    title: 'Backend',
    icon: <Server size={20} />,
    color: 'from-green-500 to-emerald-400',
    skills: ['FastAPI', 'Node.js', 'Express.js']
  },
  {
    title: 'Database',
    icon: <Database size={20} />,
    color: 'from-yellow-500 to-orange-400',
    skills: ['SQLite', 'MongoDB']
  },
  {
    title: 'Full Stack',
    icon: <Code size={20} />,
    color: 'from-purple-500 to-indigo-400',
    skills: ['MERN Stack (MongoDB, Express, React, Node.js)']
  },
  {
    title: 'Frontend',
    icon: <Layout size={20} />,
    color: 'from-pink-500 to-rose-400',
    skills: ['React', 'HTML5', 'CSS3']
  },
  {
    title: 'Tools & Others',
    icon: <Terminal size={20} />,
    color: 'from-sky-500 to-blue-600',
    skills: ['Git/GitHub', 'Paramiko', 'JWT', 'WebSockets']
  }
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">02. Technical Arsenal</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-textMain">My Skills</h3>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="glass-card p-6 relative overflow-hidden group"
          >
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-textMain shadow-lg`}>
                {category.icon}
              </div>
              <h4 className="text-lg font-bold text-textMain">{category.title}</h4>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-sm font-medium text-textMuted bg-bgGlass/5 border border-borderGlass/10 rounded-lg group-hover:border-borderGlass/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
