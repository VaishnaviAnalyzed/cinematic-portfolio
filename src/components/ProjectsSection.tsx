import type React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'AI-Powered Real-Time Posture Monitoring',
    category: 'COMPUTER VISION / AI FITNESS',
    description:
      'Real-time posture tracking and movement analysis system utilizing computer vision for workout correction. Employs MediaPipe 33-landmark body pose estimation and YOLOv5 to evaluate exercise form and prevent injury via continuous frame monitoring.',
    githubUrl: 'https://github.com/VaishnaviAnalyzed/AI-Powered-Real-Time-Posture-Monitoring-and-Correction',
    tech: [
      'Python',
      'MediaPipe',
      'YOLOv5',
      'OpenCV',
      'NumPy',
      'Streamlit',
      'PyTorch',
    ],
    metrics: [
      { label: 'LANDMARKS', value: '33 Body Keypoints' },
      { label: 'DETECTION', value: 'YOLOv5 + MediaPipe' },
      { label: 'LATENCY', value: 'Real-Time Evaluation' },
    ],
  },
  {
    number: '02',
    title: 'Kimi K2 AI Chatbot',
    category: 'GENERATIVE AI / LLM INTERFACE',
    description:
      'Conversational AI application integrating advanced Large Language Model capabilities. Built to handle context-aware responses, dynamic system prompts, and structured query generation with stream handling.',
    githubUrl: 'https://github.com/VaishnaviAnalyzed/kimi-k2-ai-chatbot',
    tech: [
      'Python',
      'Streamlit',
      'REST APIs',
      'Prompt Engineering',
      'JSON parsing',
      'AsyncIO',
    ],
    metrics: [
      { label: 'MODEL', value: 'Kimi K2 Architecture' },
      { label: 'INTERFACE', value: 'Interactive Streamlit UI' },
      { label: 'STREAMING', value: 'Low-Latency Responses' },
    ],
  },
  {
    number: '03',
    title: 'Local LLM Runner with Ollama',
    category: 'LOCAL AI / DEEPSEEK & GEMMA',
    description:
      'Local inference pipeline running open-weights LLMs using Ollama integration. Demonstrates parameter tuning, prompt execution, and local API management with models like Gemma and DeepSeek without relying on external cloud endpoints.',
    githubUrl: 'https://github.com/VaishnaviAnalyzed/Ollama-model-using-gemma-deepseek-models',
    tech: [
      'Python',
      'Ollama CLI/API',
      'DeepSeek R1',
      'Gemma LLM',
      'LangChain',
      'Shell',
    ],
    metrics: [
      { label: 'MODELS', value: 'DeepSeek & Gemma' },
      { label: 'INFERENCE', value: '100% Local / Offline' },
      { label: 'ORCHESTRATION', value: 'Ollama Framework' },
    ],
  },
  {
    number: '04',
    title: 'Customer Segmentation Dashboard',
    category: 'DATA SCIENCE / MACHINE LEARNING',
    description:
      'Unsupervised machine learning solution classifying consumer demographics and spending habits. Utilizes K-Means clustering, PCA dimensionality reduction, and interactive visualization plots to derive targeted marketing personas.',
    githubUrl: 'https://github.com/VaishnaviAnalyzed/Customer-Segmentation-Dashboard',
    tech: [
      'Python',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Seaborn',
      'Plotly',
      'Streamlit',
    ],
    metrics: [
      { label: 'ALGORITHM', value: 'K-Means Clustering' },
      { label: 'DIMENSIONALITY', value: 'PCA Analysis' },
      { label: 'VISUALIZATION', value: 'Interactive Dashboard' },
    ],
  },
  {
    number: '05',
    title: 'Manuscript Layout Region Detection',
    category: 'DOCUMENT AI / COMPUTER VISION',
    description:
      'Specialized computer vision pipeline for segmenting structural layouts in historical manuscripts. Detects text regions, margins, figures, and structural boundaries using visual region proposal algorithms.',
    githubUrl: 'https://github.com/VaishnaviAnalyzed/Manuscript-Specific-Layout-Region-Detection',
    tech: [
      'Python',
      'OpenCV',
      'PyTorch',
      'Image Processing',
      'Matplotlib',
      'PIL',
    ],
    metrics: [
      { label: 'SEGMENTATION', value: 'Region Extraction' },
      { label: 'DOMAIN', value: 'Document Layout Analysis' },
      { label: 'PROCESSING', value: 'OpenCV Pipeline' },
    ],
  },
  {
    number: '06',
    title: 'Multimodal AI Workflows with Gemini',
    category: 'GENERATIVE AI / MULTIMODAL SYSTEMS',
    description:
      'End-to-end multimodal execution pipeline using the Gemini API to analyze cross-modal inputs (text, images, document structures). Implements structured JSON schema enforcement, prompt chaining, and vision-language reasoning.',
    githubUrl: 'https://github.com/VaishnaviAnalyzed/Multimodal-AI-Workflows-with-Gemini-3',
    tech: [
      'Python',
      'Google Gemini API',
      'Pydantic',
      'Pillow',
      'Prompt Engineering',
      'Structured Outputs',
    ],
    metrics: [
      { label: 'ENGINE', value: 'Gemini Multimodal' },
      { label: 'INPUTS', value: 'Text, Vision & Docs' },
      { label: 'OUTPUTS', value: 'Structured JSON / Schema' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to explore the AI architectures and Intelligent Systems. Each project was built to solve complex real-world computer vision, generative AI, and data challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.035}
  itemStackDistance={28}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;