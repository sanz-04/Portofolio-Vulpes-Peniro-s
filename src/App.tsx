/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Radio, 
  Wifi, 
  Smartphone, 
  CheckCircle2, 
  Zap, 
  ExternalLink, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  User
} from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
            <Cpu size={20} className="text-white" />
          </div>
          <span className="font-display font-black italic text-xl tracking-wider">PORTFOLIO</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#tech" className="hover:text-white transition-colors">Tech Stack</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
            Hire Me
          </button>
          <button className="w-10 h-10 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center hover:bg-border-subtle transition-colors">
            <User size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
          Available for projects
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[1.1]">
          Hi, I'm <br />
          <span className="text-accent italic">[Nama Anda]</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
          Flutter Developer | Robotics & <span className="text-accent font-medium">IoT Enthusiast</span> building precise digital-physical bridges.
        </p>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-colors">
            View Work <ArrowRight size={20} />
          </button>
          <button className="bg-transparent border border-border-subtle hover:bg-border-subtle text-white px-8 py-4 rounded-full font-semibold transition-colors">
            Contact Me
          </button>
        </div>
        
        <div className="flex items-center gap-12 pt-8 border-t border-border-subtle">
          <div>
            <div className="text-4xl font-display font-black text-accent mb-1">5+</div>
            <div className="text-xs font-semibold tracking-widest text-text-muted uppercase">Years Exp.</div>
          </div>
          <div>
            <div className="text-4xl font-display font-black text-accent mb-1">20+</div>
            <div className="text-xs font-semibold tracking-widest text-text-muted uppercase">Projects Done</div>
          </div>
        </div>
      </div>
      
      <div className="relative flex justify-center lg:justify-end">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-[100px] rounded-full -z-10"></div>
        
        <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-border-subtle bg-bg-card transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const stack = [
    {
      icon: <Cpu size={24} className="text-accent" />,
      title: "Arduino",
      desc: "Microcontroller Programming for rapid prototyping and complex automation systems."
    },
    {
      icon: <Radio size={24} className="text-accent" />,
      title: "ESP32",
      desc: "Advanced IoT solutions with dual-core processing and integrated WiFi/Bluetooth stack."
    },
    {
      icon: <Wifi size={24} className="text-accent" />,
      title: "ESP8266",
      desc: "Cost-effective wireless connectivity and node-based sensor integration."
    },
    {
      icon: <Smartphone size={24} className="text-accent" />,
      title: "Flutter",
      desc: "High-performance cross-platform mobile & web apps for IoT dashboards."
    }
  ];

  return (
    <section id="tech" className="py-24 px-6 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="mb-16 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-1.5 h-8 bg-accent"></div>
          <h2 className="text-3xl md:text-4xl font-display font-black italic tracking-tight uppercase">Hardware & Tech Stack</h2>
        </div>
        <p className="text-text-muted text-lg">
          Bridging the gap between robust software and high-performance hardware systems with precision engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stack.map((item, i) => (
          <div key={i} className="bg-bg-card border border-border-subtle p-8 rounded-2xl hover:bg-bg-card-hover transition-colors group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-border-subtle">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" 
              alt="Circuit Board" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl shadow-2xl max-w-xs hidden sm:block">
            <Zap size={32} className="text-white mb-4" />
            <h4 className="text-2xl font-bold text-white mb-1">High Precision</h4>
            <p className="text-white/80 text-sm">Electronics expert</p>
          </div>
        </div>

        <div className="lg:pl-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1.5 h-8 bg-accent"></div>
            <h2 className="text-3xl md:text-4xl font-display font-black italic tracking-tight uppercase">About Me</h2>
          </div>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
            <p>
              I am a developer driven by the fusion of software elegance and hardware reliability. With a background in electronics and robotics, I specialize in building complete ecosystems where microcontrollers interact seamlessly with modern mobile applications.
            </p>
            <p>
              My approach combines meticulous circuitry design with user-centric software development. Whether it's optimizing code for an ESP32 or designing a responsive UI in Flutter, I focus on performance, scalability, and user experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "Circuitry Motif",
              "IoT Architecture",
              "Custom PCBs",
              "Cloud Integration"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={20} className="text-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      tags: ["FLUTTER", "FIREBASE"],
      title: "Aplikasi Pendaftaran TK",
      desc: "A comprehensive digital registration platform for kindergartens featuring parent portals and administrative management tools."
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      tags: ["DART", "SQLITE"],
      title: "Aplikasi Pengelolaan Warung",
      desc: "Inventory management and POS system specifically designed for micro-retailers with offline-first capabilities."
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-black italic tracking-tight uppercase inline-block relative">
          Featured Projects
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-accent"></div>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-bg-card border border-border-subtle rounded-3xl overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                {p.tags.map((tag, j) => (
                  <span key={j} className={`text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase ${j === 0 ? 'bg-accent text-white' : 'bg-bg-dark/80 text-white backdrop-blur-sm'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
              <p className="text-text-muted mb-6 line-clamp-2">{p.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors">
                View Project <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-border-subtle">
      <div className="bg-bg-card border border-border-subtle rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black italic tracking-tight leading-none mb-6">
              Let's build <br />
              <span className="text-accent underline decoration-accent decoration-4 underline-offset-8">something great.</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-12 max-w-md">
              Ready to start your next IoT project or need a custom mobile application? Get in touch and let's discuss how we can work together.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-bg-dark border border-border-subtle flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-accent uppercase mb-1">Email Me</div>
                  <div className="text-lg font-medium">hello@yourdomain.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-bg-dark border border-border-subtle flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-accent uppercase mb-1">Call Me</div>
                  <div className="text-lg font-medium">+62 812 3456 7890</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-bg-dark/50 backdrop-blur-sm border border-border-subtle p-8 rounded-3xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-bg-card border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-bg-card border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-gray-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Project Type</label>
                <select className="w-full bg-bg-card border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white appearance-none">
                  <option>IoT Development</option>
                  <option>Mobile App (Flutter)</option>
                  <option>Hardware Prototyping</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-bg-card border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>
              
              <button type="button" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
            <Cpu size={20} className="text-white" />
          </div>
          <span className="font-display font-black italic text-xl tracking-wider">PORTFOLIO</span>
        </div>
        
        <p className="text-text-muted text-sm text-center">
          © 2024 [Nama Anda]. Built with precision for the digital age.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-text-muted hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-text-muted hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
