import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Bot,
  Sparkles,
  Rocket,
  Zap,
  ArrowRight,
  Brain,
  CheckCircle2,
  Linkedin,
  ShieldCheck,
  Lightbulb,
  Scale,
  Cpu,
  MousePointer2,
  Sun,
  Moon
} from 'lucide-react';
import logoImage from './assets/logo.png';

// Hook para animaciones al hacer scroll (Parallax simple)
const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset * speed);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  return offset;
};

// Componente para revelar elementos al hacer scroll
const RevealOnScroll = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Default to Light Mode
  const scrollY = useParallax(0.1);

  const primaryColor = "#3d1efe";
  const accentColor = "#00c6ff"; // Cyan compatible para reemplazar el rojo

  const toggleTheme = () => setDarkMode(!darkMode);

  const teamMembers = [
    {
      name: "Sebastian Fernandez Moris",
      role: "Project Manager & Innovation Lead",
      image: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Sebastian%20Fernandez%20Moris.jpeg?raw=true",
      linkedin: "https://www.linkedin.com/in/sebastian-fernandez-moris-469a43292/",
      quote: "Innovación es rebeldía estratégica."
    },
    {
      name: "Gustavo Huamaní Pimentel",
      role: "Advertising Manager & Graphic Lead",
      image: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Gustavo%20Huamani.png?raw=true",
      linkedin: "https://www.linkedin.com/in/gustavo-enmanuel-huamani-pimentel-086261254/",
      quote: "El diseño no decora, comunica verdad."
    },
    {
      name: "Franca Alatrista Valdivia",
      role: "Content Manager & Creator",
      image: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Franca%20Alatrista%20Valdivia.png?raw=true",
      linkedin: "https://www.linkedin.com/in/franca-alatrista-466307249/",
      quote: "Contenido con alma en la era digital."
    },
    {
      name: "Daniel Zapata Trelles",
      role: "Product Developer & DevOps",
      image: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Daniel%20Zapata.png?raw=true",
      linkedin: "https://www.linkedin.com/in/daniel-alonso-zapata-trelles-1664aa1b9/",
      quote: "Código limpio, futuro escalable."
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`font-sans min-h-screen overflow-x-hidden transition-colors duration-500 selection:bg-[#3d1efe] selection:text-white ${darkMode ? 'bg-[#050510] text-white' : 'bg-white text-gray-900'}`}>

      {/* Estilos Globales: Fuente Jost (Similar a Futura) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,600;0,800;0,900;1,400&family=Space+Grotesk:wght@300;400;500;700&display=swap');
        
        .font-heading { font-family: 'Jost', sans-serif; }
        .font-tech { font-family: 'Space Grotesk', sans-serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .glass-panel {
          background: ${darkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.7)'};
          backdrop-filter: blur(10px);
          border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
          box-shadow: ${darkMode ? 'none' : '0 10px 30px -10px rgba(0,0,0,0.1)'};
        }
        
        /* New Gradient Text for Blue Theme */
        .text-gradient-primary {
          background: linear-gradient(135deg, #3d1efe 0%, #00c6ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Nav Link Hover Underline */
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #3d1efe;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Dynamic Background Elements (Blobs) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Blob 1 - Primary Blue */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"
          style={{ background: darkMode ? primaryColor : '#e0e7ff', transform: `translateY(${scrollY * 0.5}px)` }}
        />
        {/* Blob 2 - Cyan Accent */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-20"
          style={{ background: darkMode ? accentColor : '#d1f4ff', transform: `translateY(${-scrollY * 0.3}px)` }}
        />
        {/* Grid Overlay */}
        <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] ${darkMode ? 'opacity-[0.03]' : 'opacity-[0.4] invert'}`}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${darkMode ? 'bg-[#050510]/80 border-white/5' : 'bg-white/90 border-gray-100'} backdrop-blur-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
              {/* Reemplazamos todo el bloque complejo anterior por la imagen */}
              <img
                src={logoImage}
                alt="Improve Digitals Logo"
                className="h-12 w-auto object-contain transition-transform hover:scale-105"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center font-heading font-medium">
              {['Soluciones', 'Filosofía', 'Equipo'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  // Se añade hover:bg-gray-100 para un efecto suave en modo claro
                  className={`nav-link text-sm uppercase tracking-widest transition-colors px-3 py-2 rounded-lg bg-transparent ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#3d1efe] hover:bg-gray-50'}`}
                >
                  {item}
                </button>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/10 hover:bg-white/20 text-yellow-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:-translate-y-0.5 text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Hablemos
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'text-yellow-300' : 'text-gray-600'}`}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={darkMode ? 'text-white' : 'text-gray-900'}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden border-b absolute w-full font-heading ${darkMode ? 'bg-[#050510] border-white/10' : 'bg-white border-gray-100'}`}>
            <div className="px-4 py-6 space-y-4">
              {['Soluciones', 'Filosofía', 'Equipo'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left text-xl transition-colors ${darkMode ? 'text-gray-300 hover:text-[#3d1efe]' : 'text-gray-800 hover:text-[#3d1efe]'}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left text-xl font-bold"
                style={{ color: primaryColor }}
              >
                Contáctanos
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION - Clean & Geometric */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Bot size={60} className={`absolute top-[20%] left-[10%] animate-[float_4s_ease-in-out_infinite] ${darkMode ? 'text-white/10' : 'text-[#3d1efe]/10'}`} style={{ transform: `translateY(${scrollY * -0.2}px)` }} />
          <Brain size={100} className={`absolute bottom-[20%] right-[5%] animate-[float_6s_ease-in-out_infinite_reverse] ${darkMode ? 'text-[#3d1efe]/20' : 'text-[#3d1efe]/10'}`} style={{ transform: `translateY(${scrollY * -0.5}px)` }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <div className={`inline-flex items-center px-6 py-2 rounded-full glass-panel mb-8 border border-[#3d1efe]/30 text-[#3d1efe] font-heading font-bold uppercase tracking-widest text-xs animate-[pulse_3s_infinite]`}>
              <Zap size={14} className="mr-2" /> Agencia de IA & Automatización
            </div>

            <h1 className={`font-heading text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8 ${darkMode ? 'mix-blend-lighten text-white' : 'text-gray-900'}`}>
              INNOVACIÓN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d1efe] via-[#2a15b0] to-[#00c6ff]">
                CON IMPACTO
              </span>
            </h1>

            <p className={`font-heading text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No somos otra agencia más. Somos tus mentores estratégicos en la era del caos digital.
              <span className={`block mt-4 font-medium italic text-3xl ${darkMode ? 'text-white' : 'text-[#3d1efe]'}`}>"Convertimos incertidumbre en ingresos."</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('soluciones')}
                className="group relative px-8 py-5 rounded-lg bg-[#3d1efe] text-white font-bold font-heading text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl shadow-blue-500/20"
              >
                <span className="relative flex items-center">
                  Explorar Soluciones <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('equipo')}
                className={`px-8 py-5 rounded-lg border-2 font-heading font-bold text-lg transition-all ${darkMode ? 'border-white/30 hover:border-white text-white hover:bg-white/10' : 'border-gray-200 hover:border-[#3d1efe] text-gray-700 hover:text-[#3d1efe]'}`}
              >
                Conoce a los Expertos
              </button>
            </div>
          </RevealOnScroll>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 ${darkMode ? 'text-white' : 'text-gray-400'}`}>
          <MousePointer2 size={32} />
        </div>
      </section>

      {/* MANIFESTO / PROBLEM SECTION */}
      <section className={`py-32 relative ${darkMode ? 'bg-black/20' : 'bg-gray-50'}`}>
        <div className={`absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#3d1efe] to-transparent`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <RevealOnScroll>
              <h2 className={`font-heading text-5xl md:text-6xl font-bold leading-none mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                El mundo está <br />
                <span className={`line-through decoration-[#3d1efe] decoration-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>saturado</span>. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d1efe] to-[#00c6ff]">Buscas Verdad.</span>
              </h2>
              <div className={`space-y-8 font-tech text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  Hay demasiados proveedores vendiendo "humo" tecnológico. Tú no quieres solo "IA", quieres
                  <span className="text-[#3d1efe] font-bold"> certeza</span>.
                </p>
                <div className="pl-6 border-l-4 border-[#3d1efe]">
                  <p className={`italic text-2xl font-heading font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    "Actuamos como el Sabio. Traducimos la complejidad en decisiones éticas y rentables."
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-[#3d1efe] to-blue-400 blur-2xl opacity-10 animate-[pulse_4s_infinite]`}></div>
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, title: "Legitimidad", desc: "Sin riesgos legales ni éticos." },
                  { icon: Rocket, title: "Velocidad", desc: "Automatización que escala." },
                  { icon: Lightbulb, title: "Claridad", desc: "Adiós a la jerga técnica." },
                  { icon: Scale, title: "Ética", desc: "Tecnología con consciencia." }
                ].map((item, idx) => (
                  <RevealOnScroll key={idx} className={`glass-panel p-6 transition-colors group rounded-xl ${darkMode ? 'hover:bg-white/5' : 'hover:bg-white hover:shadow-lg'}`}>
                    <item.icon size={40} className={`mb-4 transition-colors ${darkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-400 group-hover:text-[#3d1efe]'}`} />
                    <h3 className={`font-heading text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                    <p className={`font-tech text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</p>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERTICALS - "Alarako" but Blue */}
      <section id="soluciones" className="py-32 relative overflow-hidden">
        {/* Background Abstract */}
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#3d1efe]/5 to-transparent rounded-full blur-3xl pointer-events-none`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <h2 className={`font-heading text-4xl md:text-6xl text-center mb-20 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Dos Caminos. <span className="text-[#3d1efe] italic">Un Objetivo.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Vertical 1 */}
            <RevealOnScroll className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-[#3d1efe] to-[#050510] transform skew-y-2 group-hover:skew-y-0 transition-transform duration-500 rounded-3xl ${darkMode ? 'opacity-100' : 'opacity-10'}`}></div>
              <div className={`relative border p-10 rounded-3xl h-full hover:-translate-y-4 transition-transform duration-300 shadow-2xl ${darkMode ? 'bg-[#0a0a1a] border-white/10 shadow-black/50' : 'bg-white border-gray-100 shadow-blue-900/10'}`}>
                <div className="w-20 h-20 bg-[#3d1efe] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 transform rotate-3 group-hover:rotate-0 transition-transform">
                  <Sparkles size={40} className="text-white animate-pulse" />
                </div>
                <h3 className={`font-heading text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Content AI</h3>
                <p className={`font-tech mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Generación de contenido que no parece generado por un robot. Usamos LLMs y modelos de difusión para crear narrativas visuales y textuales que <span className={darkMode ? 'text-white font-bold' : 'text-[#3d1efe] font-bold'}>venden</span>.
                </p>
                <ul className={`space-y-4 font-tech text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center"><CheckCircle2 className="text-[#3d1efe] mr-3" /> Guiones & Copywriting Viral</li>
                  <li className="flex items-center"><CheckCircle2 className="text-[#3d1efe] mr-3" /> Avatares & Video Sintético</li>
                  <li className="flex items-center"><CheckCircle2 className="text-[#3d1efe] mr-3" /> Arte Generativo High-End</li>
                </ul>
              </div>
            </RevealOnScroll>

            {/* Vertical 2 */}
            <RevealOnScroll className="group relative mt-12 md:mt-0">
              <div className={`absolute inset-0 bg-gradient-to-br from-[#00c6ff] to-[#050510] transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-500 rounded-3xl ${darkMode ? 'opacity-100' : 'opacity-10'}`}></div>
              <div className={`relative border p-10 rounded-3xl h-full hover:-translate-y-4 transition-transform duration-300 shadow-2xl ${darkMode ? 'bg-[#0a0a1a] border-white/10 shadow-black/50' : 'bg-white border-gray-100 shadow-blue-900/10'}`}>
                <div className="w-20 h-20 bg-[#00c6ff] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/30 transform -rotate-3 group-hover:rotate-0 transition-transform">
                  <Cpu size={40} className="text-white" />
                </div>
                <h3 className={`font-heading text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Automatización & Apps</h3>
                <p className={`font-tech mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Recupera tu activo más valioso: el tiempo. Desarrollamos automatizaciones que eliminan lo repetitivo y apps que resuelven problemas cotidianos.
                </p>
                <ul className={`space-y-4 font-tech text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center"><CheckCircle2 className="text-[#00c6ff] mr-3" /> Chatbots de Atención 24/7</li>
                  <li className="flex items-center"><CheckCircle2 className="text-[#00c6ff] mr-3" /> Workflows Automatizados</li>
                  <li className="flex items-center"><CheckCircle2 className="text-[#00c6ff] mr-3" /> Desarrollo de SaaS a medida</li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* TEAM - Creative/Alarako Display */}
      <section id="equipo" className={`py-32 relative ${darkMode ? 'bg-[#050510]' : 'bg-white'}`}>
        {/* Decorative Typography Background */}
        <div className={`absolute top-20 left-0 w-full overflow-hidden opacity-5 leading-none select-none pointer-events-none ${darkMode ? 'text-white' : 'text-[#3d1efe]'}`}>
          <span className="text-[20vw] font-black font-heading whitespace-nowrap">THE SQUAD </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <h2 className={`font-heading text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Mentes Maestras</h2>
              <p className="font-tech text-xl text-[#3d1efe]">Ingeniería + Arte + Estrategia</p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <RevealOnScroll key={idx} className="group perspective-1000">
                {/* Contenedor Giratorio */}
                <div className="relative h-[400px] w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

                  {/* --- CARA FRONTAL (Imagen) --- */}
                  {/* 'backface-hidden' es CRUCIAL para que esta cara deje de recibir clicks cuando gira */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className={`w-full h-full overflow-hidden rounded-2xl relative border transition-colors ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
                      <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-black' : 'from-[#3d1efe]/80'} via-transparent to-transparent z-10 opacity-60`}></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-white font-heading text-xl leading-tight font-bold">
                          {member.name.split(" ")[0]} <br /> {member.name.split(" ")[1]}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* --- CARA TRASERA (Info + Botón) --- */}
                  {/* Debe tener 'rotate-y-180' para estar volteada inicialmente y 'backface-hidden' */}
                  <div className="absolute inset-0 bg-[#3d1efe] rounded-2xl p-6 flex flex-col justify-center items-center text-center backdrop-blur-sm shadow-xl rotate-y-180 backface-hidden">
                    <p className="font-heading italic text-lg text-white mb-4">"{member.quote}"</p>
                    <div className="relative z-10">
                      <p className="font-tech text-xs uppercase tracking-widest font-bold text-[#3d1efe] bg-white px-3 py-1 mb-6 rounded-full inline-block">{member.role}</p>
                    </div>

                    {/* Botón LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      // 'pointer-events-auto' asegura la interactividad
                      className="relative z-50 w-12 h-12 rounded-full bg-white text-[#3d1efe] flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>

                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY - Large Typography */}
      <section id="filosofia" className={`py-20 border-y ${darkMode ? 'border-white/5 bg-gradient-to-r from-[#0a0a1a] to-black' : 'border-gray-100 bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <RevealOnScroll>
                <h3 className="text-[#3d1efe] font-tech font-bold uppercase tracking-widest mb-4">Nuestra Esencia</h3>
                <h2 className={`font-heading text-4xl md:text-5xl font-bold leading-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  El Arquetipo del <br /><span className={`${darkMode ? 'text-white' : 'text-[#3d1efe]'} italic text-6xl`}>Sabio</span>.
                </h2>
              </RevealOnScroll>
            </div>
            <div className="md:w-1/2 border-l-4 border-[#3d1efe] pl-8">
              <RevealOnScroll>
                <p className={`font-heading text-2xl leading-relaxed italic mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  "No buscamos ser magos. La magia es engañosa. Buscamos ser sabios: la sabiduría es eterna, verificable y estratégica."
                </p>
                <p className={`font-tech ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Empoderamos a través del conocimiento, no de la dependencia tecnológica.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER - Big & Bold */}
      <section id="contacto" className="py-32 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d1efe] via-[#2a15b0] to-[#3d1efe] opacity-10 bg-[length:200%_200%] animate-[spin-slow_10s_linear_infinite]"></div>
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/80' : 'bg-white/80'}`}></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <RevealOnScroll>
            <h2 className={`font-heading text-6xl md:text-8xl font-black mb-8 tracking-tighter ${darkMode ? 'text-white mix-blend-overlay' : 'text-[#3d1efe]'}`}>
              LET'S TALK
            </h2>
            <p className={`font-tech text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              ¿Listo para dejar de adivinar y empezar a ejecutar? La primera consulta va por nuestra cuenta.
            </p>

            <form className="max-w-lg mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="tu@empresa.com"
                  className={`w-full bg-transparent border-b-2 px-4 py-4 text-xl focus:outline-none transition-colors font-tech ${darkMode ? 'border-gray-600 text-white focus:border-[#3d1efe] placeholder-gray-600' : 'border-gray-300 text-gray-900 focus:border-[#3d1efe] placeholder-gray-400'}`}
                />
                <div className="absolute right-0 bottom-4 text-[#3d1efe] opacity-0 group-focus-within:opacity-100 transition-opacity">
                  <ArrowRight />
                </div>
              </div>
              <button className={`w-full font-bold font-heading text-xl py-6 transition-colors mt-8 uppercase tracking-widest ${darkMode ? 'bg-white text-black hover:bg-[#3d1efe] hover:text-white' : 'bg-[#3d1efe] text-white hover:bg-[#2a15b0]'}`}>
                Solicitar Auditoría
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </section>

      <footer className={`py-8 border-t text-center font-tech text-xs uppercase tracking-widest ${darkMode ? 'bg-black border-white/10 text-gray-600' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
        &copy; {new Date().getFullYear()} Improve Digitals. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;