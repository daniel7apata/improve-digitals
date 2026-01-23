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


// Pon esto FUERA del componente App (antes de 'const App = ...') para mejor rendimiento
const LogoSVG = ({ className }) => {
  return (
    <svg
      viewBox="0 0 8317 4341"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor" // ESTO ES CLAVE: Permite heredar el color
      style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}
    >
      <g>
        <rect x="3869.901" y="2085.249" width="77.023" height="381.471" />
        <path d="M4022.46,2466.72l0,-381.471l115.274,0l69.216,260.212l68.436,-260.212l115.534,0l0,381.471l-71.558,0l0,-300.285l-75.722,300.285l-74.16,0l-75.462,-300.285l0,300.285l-71.558,0Z" />
      </g>
      <path d="M4461.692,2466.72l0,-381.471l123.601,0c46.838,0 77.37,1.908 91.595,5.725c21.858,5.725 40.159,18.171 54.905,37.34c14.745,19.169 22.118,43.932 22.118,74.291c0,23.419 -4.25,43.108 -12.75,59.068c-8.5,15.96 -19.299,28.493 -32.396,37.601c-13.097,9.107 -26.412,15.136 -39.943,18.085c-18.388,3.643 -45.017,5.464 -79.885,5.464l-50.221,0l0,143.897l-77.023,0Zm77.023,-316.938l0,108.248l42.154,0c30.358,0 50.655,-1.995 60.89,-5.985c10.235,-3.99 18.258,-10.235 24.07,-18.735c5.811,-8.5 8.717,-18.388 8.717,-29.664c0,-13.878 -4.077,-25.327 -12.23,-34.348c-8.153,-9.021 -18.475,-14.659 -30.965,-16.914c-9.194,-1.735 -27.669,-2.602 -55.425,-2.602l-37.21,0Z" />
      <path d="M4822.724,2473.225l0,-381.471l162.112,0c40.767,0 70.387,3.426 88.862,10.278c18.475,6.852 33.264,19.039 44.366,36.56c11.102,17.521 16.654,37.557 16.654,60.109c0,28.623 -8.414,52.259 -25.241,70.908c-16.827,18.649 -41.981,30.401 -75.462,35.259c16.654,9.715 30.401,20.383 41.244,32.006c10.842,11.623 25.457,32.266 43.846,61.93l46.578,74.421l-92.115,0l-55.685,-83.008c-19.776,-29.664 -33.307,-48.356 -40.593,-56.076c-7.286,-7.72 -15.006,-13.011 -23.159,-15.873c-8.153,-2.862 -21.077,-4.294 -38.772,-4.294l-15.613,0l0,159.25l-77.023,0Zm77.023,-220.139l56.986,0c36.95,0 60.022,-1.561 69.216,-4.684c9.194,-3.123 16.393,-8.5 21.598,-16.133c5.204,-7.633 7.806,-17.174 7.806,-28.623c0,-12.837 -3.426,-23.202 -10.278,-31.095c-6.852,-7.893 -16.523,-12.881 -29.014,-14.962c-6.245,-0.867 -24.98,-1.301 -56.206,-1.301l-60.109,0l0,96.799Z" />
      <path d="M5203.486,2284.832c0,-38.858 5.811,-71.472 17.434,-97.84c8.674,-19.429 20.513,-36.863 35.519,-52.303c15.006,-15.439 31.442,-26.889 49.31,-34.348c23.766,-10.062 51.175,-15.092 82.227,-15.092c56.206,0 101.179,17.434 134.92,52.303c33.741,34.868 50.611,83.355 50.611,145.459c0,61.584 -16.74,109.766 -50.221,144.548c-33.481,34.782 -78.237,52.173 -134.269,52.173c-56.726,0 -101.83,-17.304 -135.31,-51.912c-33.481,-34.608 -50.221,-82.27 -50.221,-142.987Zm79.365,-2.602c0,43.195 9.975,75.939 29.924,98.23c19.95,22.292 45.277,33.437 75.982,33.437c30.705,0 55.902,-11.059 75.592,-33.177c19.689,-22.118 29.534,-55.295 29.534,-99.531c0,-43.716 -9.584,-76.329 -28.753,-97.84c-19.169,-21.511 -44.626,-32.266 -76.372,-32.266c-31.746,0 -57.333,10.886 -76.763,32.657c-19.429,21.771 -29.144,54.601 -29.144,98.49Z" />
      <path d="M5736.527,2473.225l-136.351,-381.471l83.528,0l96.539,282.33l93.416,-282.33l81.707,0l-136.611,381.471l-82.227,0Z" />
      <path d="M6055.414,2473.225l0,-381.471l282.851,0l0,64.533l-205.828,0l0,84.569l191.516,0l0,64.272l-191.516,0l0,103.825l213.114,0l0,64.272l-290.137,0Z" />
      <g>
        <path d="M3854.028,2818.71l0,-190.736l65.704,0c14.832,0 26.151,0.911 33.958,2.732c10.929,2.515 20.253,7.069 27.973,13.661c10.062,8.5 17.586,19.364 22.573,32.592c4.987,13.227 7.481,28.341 7.481,45.342c0,14.485 -1.691,27.322 -5.074,38.511c-3.383,11.189 -7.72,20.448 -13.011,27.778c-5.291,7.329 -11.081,13.097 -17.369,17.304c-6.288,4.207 -13.878,7.394 -22.769,9.563c-8.891,2.168 -19.104,3.253 -30.64,3.253l-68.826,0Zm25.241,-22.508l40.723,0c12.577,0 22.443,-1.171 29.599,-3.513c7.156,-2.342 12.859,-5.638 17.109,-9.888c5.985,-5.985 10.647,-14.03 13.986,-24.135c3.339,-10.105 5.009,-22.357 5.009,-36.755c0,-19.95 -3.274,-35.28 -9.823,-45.992c-6.549,-10.712 -14.507,-17.89 -23.874,-21.533c-6.766,-2.602 -17.651,-3.903 -32.657,-3.903l-40.073,0l0,145.719Z" />
        <rect x="4053.946" y="2627.974" width="25.241" height="190.736" />
        <path d="M4216.133,2743.899l0,-22.378l80.796,-0.13l0,70.778c-12.403,9.888 -25.197,17.326 -38.381,22.313c-13.184,4.987 -26.715,7.481 -40.593,7.481c-18.735,0 -35.757,-4.012 -51.067,-12.035c-15.309,-8.023 -26.867,-19.624 -34.673,-34.803c-7.806,-15.179 -11.71,-32.136 -11.71,-50.871c0,-18.562 3.881,-35.888 11.644,-51.977c7.763,-16.09 18.93,-28.038 33.502,-35.844c14.572,-7.806 31.356,-11.71 50.351,-11.71c13.791,0 26.26,2.233 37.405,6.7c11.146,4.467 19.885,10.69 26.216,18.67c6.332,7.98 11.146,18.388 14.442,31.225l-22.769,6.245c-2.862,-9.715 -6.419,-17.347 -10.669,-22.899c-4.25,-5.551 -10.322,-9.996 -18.215,-13.336c-7.893,-3.339 -16.654,-5.009 -26.281,-5.009c-11.536,0 -21.511,1.756 -29.924,5.269c-8.414,3.513 -15.201,8.132 -20.362,13.856c-5.161,5.725 -9.172,12.013 -12.035,18.865c-4.857,11.796 -7.286,24.59 -7.286,38.381c0,17.001 2.927,31.225 8.782,42.675c5.855,11.449 14.377,19.95 25.566,25.501c11.189,5.551 23.072,8.327 35.649,8.327c10.929,0 21.598,-2.103 32.006,-6.31c10.408,-4.207 18.302,-8.695 23.679,-13.466l0,-35.519l-56.076,0Z" />
        <rect x="4341.63" y="2627.974" width="25.241" height="190.736" />
      </g>
      <path d="M4480.287,2818.71l0,-168.227l-62.841,0l0,-22.508l151.183,0l0,22.508l-63.101,0l0,168.227l-25.241,0Z" />
      <path d="M4578.145,2818.71l73.25,-190.736l27.192,0l78.064,190.736l-28.753,0l-22.248,-57.767l-79.755,0l-20.947,57.767l-26.802,0Zm55.035,-78.324l64.663,0l-19.906,-52.823c-6.072,-16.046 -10.582,-29.23 -13.531,-39.552c-2.429,12.23 -5.855,24.373 -10.278,36.43l-20.947,55.946Z" />
      <path d="M4812.549,2818.71l0,-190.736l25.241,0l0,168.227l93.937,0l0,22.508l-119.177,0Z" />
      <path d="M4985.128,2757.43l23.809,-2.082c1.128,9.541 3.751,17.369 7.871,23.484c4.12,6.115 10.517,11.059 19.191,14.832c8.674,3.773 18.432,5.66 29.274,5.66c9.628,0 18.128,-1.431 25.501,-4.294c7.373,-2.862 12.859,-6.787 16.458,-11.775c3.6,-4.987 5.399,-10.43 5.399,-16.328c0,-5.985 -1.735,-11.211 -5.204,-15.678c-3.469,-4.467 -9.194,-8.218 -17.174,-11.254c-5.118,-1.995 -16.437,-5.096 -33.958,-9.303c-17.521,-4.207 -29.794,-8.175 -36.82,-11.905c-9.107,-4.771 -15.895,-10.69 -20.362,-17.759c-4.467,-7.069 -6.7,-14.984 -6.7,-23.744c0,-9.628 2.732,-18.627 8.197,-26.997c5.464,-8.37 13.444,-14.724 23.94,-19.061c10.495,-4.337 22.161,-6.505 34.999,-6.505c14.138,0 26.607,2.277 37.405,6.831c10.799,4.554 19.104,11.254 24.915,20.101c5.811,8.847 8.934,18.865 9.368,30.055l-24.2,1.821c-1.301,-12.056 -5.703,-21.164 -13.206,-27.322c-7.503,-6.158 -18.583,-9.238 -33.242,-9.238c-15.266,0 -26.39,2.797 -33.372,8.392c-6.982,5.595 -10.474,12.338 -10.474,20.231c0,6.852 2.472,12.49 7.416,16.914c4.857,4.424 17.543,8.956 38.056,13.596c20.513,4.64 34.587,8.695 42.219,12.165c11.102,5.118 19.299,11.601 24.59,19.451c5.291,7.85 7.936,16.892 7.936,27.127c0,10.148 -2.906,19.711 -8.717,28.688c-5.811,8.977 -14.16,15.96 -25.045,20.947c-10.886,4.987 -23.137,7.481 -36.755,7.481c-17.261,0 -31.724,-2.515 -43.39,-7.546c-11.666,-5.031 -20.817,-12.599 -27.452,-22.704c-6.635,-10.105 -10.127,-21.533 -10.474,-34.283Z" />
      <g id="Logo">
        <path d="M2048.385,583.578l37.482,-101.254l37.482,101.254c4.53,12.168 14.122,21.761 26.202,26.202l101.254,37.482l-101.254,37.482c-12.168,4.53 -21.761,14.122 -26.202,26.202l-37.482,101.254l-37.482,-101.254c-4.53,-12.168 -14.122,-21.761 -26.202,-26.202l-101.254,-37.482l101.254,-37.482c12.168,-4.53 21.761,-14.122 26.202,-26.202Z" style={{ fillRule: "nonzero" }} />
      </g>
      <g id="ICONO">
        <path d="M3315.212,1308.697c-3.997,-1.155 -8.26,-1.688 -12.435,-1.688l-1414.888,0c-3.908,0 -7.816,0.444 -11.635,1.51c-100.188,27.267 -170.444,119.195 -169.644,223.025c0.799,104.54 73.276,196.201 175.329,221.071l0,1653.367c0,61.552 8.171,240.344 137.048,399.864c213.077,263.704 560.093,232.173 587.716,229.242c40.324,1.688 341.598,9.148 546.149,-229.242c134.294,-156.41 152.68,-332.272 156.322,-395.423l0,-1653.634c100.721,-26.557 172.043,-116.619 174.53,-219.205c2.576,-104.54 -66.97,-199.044 -168.401,-228.887l-0.089,0Zm-147.795,342.753c0,0 9.859,1321.717 -6.04,1761.194c-10.125,280.135 -280.491,482.998 -554.675,490.814c-285.997,8.083 -583.453,-198.067 -587.716,-490.814c-6.395,-435.48 0,-1761.194 0,-1761.194c-100.898,9.948 -172.931,-61.818 -171.332,-117.774c1.599,-54.535 73.986,-120.261 171.332,-109.247l1151.539,0c91.04,-9.77 159.963,53.647 161.74,109.247c1.865,57.91 -68.746,128.788 -164.759,117.774l-0.089,-0Z" style={{ fillRule: "nonzero" }} />
        <path d="M3176.92,700.908l-226.4,0c-24.514,0 -44.41,19.895 -44.41,44.41l0,211.123l-174.441,0c-24.514,0 -44.41,19.895 -44.41,44.41l0,149.483l-143.798,0c-24.514,0 -44.41,19.895 -44.41,44.41l0,137.048l482.998,0l0,-115.642l55.334,0c24.514,0 44.41,-19.895 44.41,-44.41l0,-141.134l95.036,0c24.514,0 44.41,-19.895 44.41,-44.41l0,-240.789c0,-24.514 -19.895,-44.41 -44.41,-44.41l0.089,-0.089Z" style={{ fillRule: "nonzero" }} />
        <path d="M2410.856,1143.543l0,76.285c0,11.498 -9.335,20.833 -20.833,20.833l-76.285,0c-11.498,0 -20.833,-9.335 -20.833,-20.833l0,-76.285c0,-11.498 9.335,-20.833 20.833,-20.833l76.285,0c11.498,0 20.833,9.335 20.833,20.833Z" />
        <path d="M2543.907,978.162l0,76.285c0,11.498 -9.335,20.833 -20.833,20.833l-76.285,0c-11.498,0 -20.833,-9.335 -20.833,-20.833l0,-76.285c0,-11.498 9.335,-20.833 20.833,-20.833l76.285,0c11.498,0 20.833,9.335 20.833,20.833Z" />
        <path d="M2946.346,527.671l0,130.642c0,11.498 -9.335,20.833 -20.833,20.833l-130.642,0c-11.498,0 -20.833,-9.335 -20.833,-20.833l0,-130.642c0,-11.498 9.335,-20.833 20.833,-20.833l130.642,0c11.498,0 20.833,9.335 20.833,20.833Z" />
        <path d="M3247.443,323.565l0,130.642c0,11.498 -9.335,20.833 -20.833,20.833l-130.642,0c-11.498,0 -20.833,-9.335 -20.833,-20.833l0,-130.642c0,-11.498 9.335,-20.833 20.833,-20.833l130.642,0c11.498,0 20.833,9.335 20.833,20.833Z" />
        <path d="M3418.331,527.671l0,130.642c0,11.498 -9.335,20.833 -20.833,20.833l-130.642,0c-11.498,0 -20.833,-9.335 -20.833,-20.833l0,-130.642c0,-11.498 9.335,-20.833 20.833,-20.833l130.642,0c11.498,0 20.833,9.335 20.833,20.833Z" />
      </g>
      <g id="Capa_8">
        <g>
          <path d="M2771.017,2037.191c-2.398,-3.73 -7.55,-4.53 -11.014,-1.776c-339.822,264.77 -410.522,343.996 -396.932,365.224c11.813,18.474 79.76,-8.083 194.247,6.306c10.125,1.243 98.767,21.317 98.145,28.955c-0.089,1.51 -2.931,2.398 -3.464,2.576c-46.097,14.211 -263.881,124.436 -525.809,388.939l0,382.633c23.271,-36.061 66.703,-82.868 108.359,-123.991c80.648,-79.76 165.736,-123.014 223.38,-146.285c-38.459,29.488 -129.498,107.471 -177.993,243.808c-55.69,156.322 -20.517,291.06 -6.839,335.647c407.768,-221.959 528.918,-444.184 562.402,-608.855c35.172,-172.931 49.472,-353.678 62.529,-401.018c12.79,-46.275 109.514,50.449 162.45,111.113l0,-142.111l-289.55,-441.164l0.089,0Z" style={{ fill: "none", fillRule: "nonzero" }} />
          <path d="M2655.463,2435.9c0.622,-7.638 -88.02,-27.712 -98.145,-28.955c-114.488,-14.389 -182.434,12.168 -194.247,-6.306c-13.589,-21.228 57.022,-100.454 396.932,-365.224c3.464,-2.753 8.615,-1.865 11.014,1.776l289.55,441.164l0,-826.906l-934.288,0l0,1175.965c261.927,-264.503 479.712,-374.817 525.809,-388.939c0.533,-0.178 3.286,-1.066 3.464,-2.576l-0.089,0Zm-307.58,-445.428l59.686,-59.686c11.28,-11.28 29.577,-11.28 40.857,0l59.686,59.686c11.28,11.28 11.28,29.577 0,40.857l-59.686,59.686c-11.28,11.28 -29.577,11.28 -40.857,0l-59.686,-59.686c-11.28,-11.28 -11.28,-29.577 0,-40.857Z" style={{ fillRule: "nonzero" }} />
          <path d="M2898.117,2509.353c-13.145,47.252 -27.356,228.087 -62.529,401.018c-33.485,164.759 -154.634,386.985 -562.402,608.855c-13.678,-44.587 -48.85,-179.326 6.839,-335.647c48.584,-136.337 139.535,-214.32 177.993,-243.808c-57.644,23.271 -142.732,66.437 -223.38,146.285c-41.567,41.123 -85,87.931 -108.359,123.991l0,183.767c0,14.389 1.688,28.689 4.885,42.722c50.982,220.982 251.536,377.748 475.537,371.53c214.676,-5.951 400.752,-160.23 449.158,-371.974c3.197,-13.856 4.796,-27.978 4.796,-42.189l0,-773.437c-52.936,-60.663 -149.66,-157.387 -162.45,-111.113l-0.089,0Z" style={{ fillRule: "nonzero" }} />
        </g>
      </g>
    </svg>
  );
};


const TeamCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective-1000 h-[400px] w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)} // Al hacer click/tap se activa o desactiva el giro
    >
      <div
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
          }`}
      >
        {/* --- CARA FRONTAL --- */}
        <div className="absolute inset-0 w-full h-full backface-hidden z-20">
          <div className="w-full h-full overflow-hidden rounded-2xl relative border border-gray-200 dark:border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d1efe]/80 via-transparent to-transparent z-10 opacity-60"></div>
            <img
              src={member.image}
              alt={member.name}
              loading="lazy" // Optimización para móviles
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-white font-heading text-xl leading-tight font-bold">
                {member.name.split(" ")[0]} <br /> {member.name.split(" ")[1]}
              </h3>
            </div>
          </div>
        </div>

        {/* --- CARA TRASERA --- */}
        <div className="absolute inset-0 bg-[#3d1efe] rounded-2xl p-6 flex flex-col justify-center items-center text-center backdrop-blur-sm shadow-xl rotate-y-180 backface-hidden z-10">
          <p className="font-heading italic text-lg text-white mb-4">"{member.quote}"</p>
          <div className="relative z-10">
            <p className="font-tech text-xs uppercase tracking-widest font-bold text-[#3d1efe] bg-white px-3 py-1 mb-6 rounded-full inline-block">
              {member.role}
            </p>
          </div>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white text-[#3d1efe] flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            onClick={(e) => e.stopPropagation()} // Evita que al clickear el link se gire la carta
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};


// Hook para animaciones al hacer scroll (Parallax simple)
const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Si es móvil (menos de 768px), no agregamos el listener
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      // Usamos requestAnimationFrame para suavizar y no saturar
      requestAnimationFrame(() => {
        setOffset(window.pageYOffset * speed);
      });
    };

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
      quote: "El diseño no decora, comunica"
    },
    {
      name: "Franca Alatrista Valdivia",
      role: "Content Manager & Creator",
      image: "https://github.com/Lab-EC-UPC/assets/blob/main/especial-licencias/Franca%20Alatrista%20Valdivia.png?raw=true",
      linkedin: "https://www.linkedin.com/in/franca-alatrista-466307249/",
      quote: "Contenido que eleva tus vibras"
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
  /* Fondo más sólido en móvil para evitar cálculos de GPU */
  background: ${darkMode ? 'rgba(5, 5, 16, 0.9)' : 'rgba(255, 255, 255, 0.95)'};
  border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  box-shadow: ${darkMode ? 'none' : '0 10px 30px -10px rgba(0,0,0,0.1)'};
}

/* Solo aplicamos el blur costoso en pantallas medianas hacia arriba */
@media (min-width: 768px) {
  .glass-panel {
    background: ${darkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.7)'};
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
  }
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
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse hidden md:block"
          style={{ background: darkMode ? primaryColor : '#e0e7ff', transform: `translateY(${scrollY * 0.5}px)` }}
        />
        {/* Blob 2 - Cyan Accent */}
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 hidden md:block"
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
              <LogoSVG
                className={`h-18 w-auto transition-all duration-300 hover:scale-105 ${darkMode ? 'text-white' : 'text-[#3d1efe]'
                  }`}
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center font-heading font-medium">
              {['Soluciones', 'Filosofía', 'Equipo'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i'))}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <div className={`inline-flex items-center px-6 py-2 rounded-full glass-panel mb-8 border border-[#3d1efe]/30 font-heading font-bold uppercase tracking-widest text-xs animate-[pulse_3s_infinite] ${darkMode ? 'text-white' : 'text-[#3d1efe]'
              }`}>
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
                  Explorar Soluciones
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
                  { icon: ShieldCheck, title: "Seriedad", desc: "Ética y profesionalismo como pilares" },
                  { icon: Rocket, title: "Velocidad", desc: "Automatización que escala." },
                  { icon: Lightbulb, title: "Innovación", desc: "Tecnología que resuelve" },
                  { icon: Scale, title: "Claridad", desc: "Aprende en simples pasos" }
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
              Descubre formas<span className="text-[#3d1efe] italic"> de innovar</span>
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
                  Generación de contenido con inteligencia artificial. Utilizamos los últimos modelos de imágenes y videos para que tu organización venda más siguiendo las tendencias.
                </p>
                <ul className={`space-y-4 font-tech text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center"><CheckCircle2 className="text-[#3d1efe] mr-3" /> Copywriting Viral</li>
                  <li className="flex items-center"><CheckCircle2 className="text-[#3d1efe] mr-3" /> Avatares & Influencers</li>
                  <li className="flex items-center"><CheckCircle2 className="text-[#3d1efe] mr-3" /> ⁠Arte Generativo</li>
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
                  Optimiza tu tiempo. Desarrollamos automatizaciones y programas que agilizan procesos y resuelven problemas cotidianos. 
                </p>
                <ul className={`space-y-4 font-tech text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li className="flex items-center"><CheckCircle2 className="text-[#00c6ff] mr-3" /> Chatbots de Atención</li>
                  <li className="flex items-center"><CheckCircle2 className="text-[#00c6ff] mr-3" /> Workflows Automatizados</li>
                  <li className="flex items-center"><CheckCircle2 className="text-[#00c6ff] mr-3" /> ⁠Apps Personalizadas</li>
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
              <RevealOnScroll key={idx}>
                {/* Llamamos al nuevo componente que maneja su propio giro */}
                <TeamCard member={member} />
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
              HABLEMOS 
            </h2>
            <p className={`font-tech text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Mejora tus procesos, escala tus productos, aumenta tus ventas. Con nosotros, mejora.
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
                Contáctanos
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