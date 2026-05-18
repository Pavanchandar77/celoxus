import { motion } from 'framer-motion';
import { Server, Activity, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveCard } from '../components/InteractiveCard';
import { MagneticButton } from '../components/MagneticButton';
import { NetworkTopology } from '../components/NetworkTopology';

export const CaseStudies = () => {
  return (
    <div className="bg-[#020617] text-white min-h-[90vh] relative overflow-hidden pt-40 pb-32 flex flex-col justify-center">
       {/* Background effects */}
       <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#049fd9]/8 blur-[110px] rounded-full pointer-events-none z-0"></div>
       <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#049fd9]/5 blur-[110px] rounded-full pointer-events-none z-0"></div>
       <div className="absolute inset-0 hidden lg:block opacity-25 pointer-events-auto">
         <NetworkTopology />
       </div>

       <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="text-center max-w-4xl mx-auto mb-20">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
             <h1 className="text-5xl md:text-7xl font-light font-display tracking-tight mb-8">
               Proven <span className="inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-[#8fa1d5]">Implementations.</span>
             </h1>
             <p className="text-xl text-slate-300 font-light leading-relaxed">
               Due to strict Non-Disclosure Agreements (NDAs), we do not publish identifiable client metadata. Below is a sanitized architectural brief demonstrating our capability baseline.
             </p>
           </motion.div>
         </div>

         <div className="space-y-24 max-w-5xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7 }}
             >
             <InteractiveCard className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden hover:border-[#049fd9]/40 transition-colors">
               <div className="absolute inset-0 bg-[#049fd9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               {/* Header */}
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-12 relative z-10">
                 <div>
                   <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm font-normal tracking-widest uppercase mb-4 backdrop-blur-md">
                     <Lock className="w-4 h-4" /> Anonymized Brief
                   </div>
                   <h2 className="text-3xl md:text-5xl font-light font-display text-white">Fortune 500 Global Logistics</h2>
                 </div>
                 <div className="flex items-center gap-4 hidden sm:flex">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                     <Server className="w-6 h-6 text-blue-400" />
                   </div>
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                     <Activity className="w-6 h-6 text-emerald-400" />
                   </div>
                 </div>
               </div>

               {/* Content */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mb-16">
                 <div>
                   <h3 className="text-2xl font-normal mb-4 text-white">The Challenge</h3>
                   <p className="text-lg text-slate-300 leading-relaxed">
                     A leading global logistics provider was operating on a heavily fragmented, legacy on-premise UCCX system. Escalating call volumes were causing unacceptable queue delays, and agents lacked real-time visibility into incoming freight priority metrics due to disparate CRM platforms.
                   </p>
                 </div>
                 <div>
                   <h3 className="text-2xl font-normal mb-4 text-white">Our Solution</h3>
                   <p className="text-lg text-slate-300 leading-relaxed">
                     Celoxus CCIE architects orchestrated a completely zero-downtime, phased migration to Cisco Webex Contact Center. We engineered custom middleware to bridge their proprietary freight tracking databases directly into the agent desktop via real-time Finesse pop-overs, instantly mapping caller ID to active global shipments.
                   </p>
                 </div>
               </div>

               {/* Metrics */}
               <div className="bg-[#020617]/50 border border-white/5 rounded-3xl p-8 relative z-10">
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                   <div className="sm:border-r sm:border-white/10">
                     <div className="text-4xl md:text-5xl font-light inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">2,500+</div>
                     <div className="text-sm font-normal text-slate-400 uppercase tracking-widest">Seats Migrated</div>
                   </div>
                   <div className="sm:border-r sm:border-white/10">
                     <div className="text-4xl md:text-5xl font-light inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">-40%</div>
                     <div className="text-sm font-normal text-slate-400 uppercase tracking-widest">Avg Handle Time (AHT)</div>
                   </div>
                   <div>
                     <div className="text-4xl md:text-5xl font-light inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">99.999%</div>
                     <div className="text-sm font-normal text-slate-400 uppercase tracking-widest">Architecture Uptime</div>
                   </div>
                 </div>
               </div>
             </InteractiveCard>
             </motion.div>
         </div>

         {/* CTA */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 text-center max-w-2xl mx-auto"
         >
           <h3 className="text-2xl font-normal text-white mb-6">Need the full technical spec?</h3>
           <MagneticButton to="/contact">
             <div className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#049fd9] text-white font-normal shadow-[0_10px_25px_rgba(4,159,217,0.18)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
               <span className="relative">Contact Engineering for Capabilities Brief</span>
               <ArrowRight className="relative w-5 h-5" />
             </div>
           </MagneticButton>
         </motion.div>

       </div>
    </div>
  );
};
