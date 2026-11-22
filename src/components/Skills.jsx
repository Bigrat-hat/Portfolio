import { motion } from 'framer-motion';
import { 
  LuNetwork as Network, 
  LuTerminal as Terminal, 
  LuCloud as Cloud, 
  LuCode as Code, 
  LuLayoutDashboard as Layout, 
  LuWrench as Wrench, 
  LuUsers as Users 
} from 'react-icons/lu';

const skillCategories = [
  {
    title: 'Networking & Security',
    icon: <Network size={20} />,
    color: 'from-blue-600 to-indigo-600',
    skills: ['VPN', 'Subnetting', 'DHCP', 'Firewall Rules', 'IP Addressing', 'SSH', 'Nmap', 'GNS3', 'Cisco Packet Tracer', 'WireGuard']
  },
  {
    title: 'Linux & DevOps',
    icon: <Terminal size={20} />,
    color: 'from-emerald-500 to-teal-600',
    skills: ['Linux Administration', 'Bash Scripting', 'System Monitoring', 'Automation', 'SSH Remote Access', 'iptables']
  },
  {
    title: 'Cloud Fundamentals (AWS)',
    icon: <Cloud size={20} />,
    color: 'from-amber-500 to-orange-600',
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'AWS VPC', 'AWS CloudWatch', 'AWS IAM']
  },
  {
    title: 'Languages',
    icon: <Code size={20} />,
    color: 'from-cyan-500 to-blue-500',
    skills: ['Python', 'JavaScript', 'Bash', 'SQL (PostgreSQL, SQLite)']
  },
  {
    title: 'Frontend & Backend',
    icon: <Layout size={20} />,
    color: 'from-purple-500 to-pink-500',
    skills: ['React.js', 'FastAPI', 'HTML5', 'CSS3', 'Tailwind CSS', 'WebSockets', 'SMTP', 'Paramiko', 'CRUD Operations']
  },
  {
    title: 'Tools & Security Analysis',
    icon: <Wrench size={20} />,
    color: 'from-rose-500 to-red-600',
    skills: ['Git', 'GitHub', 'VS Code', 'Wireshark', 'Burp Suite', 'Netdata']
  },
  {
    title: 'Soft Skills',
    icon: <Users size={20} />,
    color: 'from-violet-500 to-purple-600',
    skills: ['Analytical Thinking', 'Continuous Learning', 'Problem Solving', 'Team Collaboration', 'Adaptability']
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
