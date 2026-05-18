import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Settings, Zap, ListCheck, Cloud, LayoutTemplate, Activity, ArrowRight, Headphones, Phone, Mail, Database, CheckCircle2, XCircle, Code } from 'lucide-react';
import { InteractiveCard } from './InteractiveCard';
import { MagneticButton } from './MagneticButton';
import { NetworkTopology } from './NetworkTopology';

export const Products = () => {
  return (
    <div className="bg-[#020617] min-h-screen">
      {/* Hero */}
      <div className="relative pt-40 pb-32 overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2850&q=80" alt="Server Operations" fetchPriority="high" className="w-full h-full object-cover opacity-20 mix-blend-luminosity sepia-[.3] hue-rotate-[200deg]" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent"></div>
        </div>
        <div className="absolute left-0 top-0 hidden lg:block w-[55%] h-full opacity-40 pointer-events-auto z-0">
          <NetworkTopology />
        </div>
        <div className="text-center max-w-4xl mx-auto md:mt-12 relative z-10 px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 text-indigo-300 text-sm font-normal mb-8 uppercase tracking-widest bg-white/5 backdrop-blur-md">
              <Zap className="w-4 h-4 flex-shrink-0" /> Engineered for Performance
            </div>
            <h1 className="text-5xl md:text-7xl font-light font-display text-white tracking-tight mb-8">
              Products built to <span className="inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-[#8fa1d5]">accelerate</span> your operations.
            </h1>
            <p className="text-2xl text-slate-300 font-light leading-relaxed">
              Improve agent experience by automating repetitive tasks, providing real-time alerts, and orchestrating unified dashboards.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="space-y-16 py-32 px-6 max-w-7xl mx-auto">
        {/* Product 1: Finesse Notifications */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#020617] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_100px_rgba(30,27,75,0.15)] border border-slate-800 relative group"
        >
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80" alt="Notification Network" className="w-full h-full object-cover opacity-10 mix-blend-screen group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative z-10 bg-gradient-to-r from-[#020617] to-transparent">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#049fd9]/8 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
             <div className="relative z-10">
               <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center mb-8">
                 <Activity className="w-8 h-8 text-indigo-400" />
               </div>
               <h2 className="text-4xl font-light font-display text-white mb-6 leading-tight">Finesse Notifications</h2>
               <p className="text-slate-400 text-xl leading-relaxed mb-10 font-light">
                 A real-time "Toaster" wrapper designed to drastically improve agent responsiveness. Ensure agents stay informed of critical metrics instantaneously without needing to monitor dashboards. Includes immediate RONA alerts out of the box.
               </p>
               <ul className="space-y-5 mb-10">
                 <li className="flex items-center gap-4 text-slate-300 font-light text-lg">
                   <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm">✓</div> Zero-delay alerting
                 </li>
                 <li className="flex items-center gap-4 text-slate-300 font-light text-lg">
                   <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm">✓</div> RONA immediate interception
                 </li>
                 <li className="flex items-center gap-4 text-slate-300 font-light text-lg">
                   <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm">✓</div> Custom metric overlays
                 </li>
               </ul>
             </div>
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex items-center justify-center relative border-l border-white/5 overflow-hidden bg-slate-900/60 backdrop-blur-sm">
            <div className="w-full max-w-md relative z-10">
               {/* Abstract Desktop Notification Mock */}
               <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-indigo-500/20 blur-[60px] rounded-full group-hover:scale-110 transition-transform duration-700"></div>
               <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl relative z-10 animate-[bounce_8s_infinite]">
                 <div className="flex items-center gap-5 mb-6">
                   <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                     <Activity className="w-7 h-7 text-indigo-400" />
                   </div>
                   <div>
                     <div className="h-4 w-32 bg-slate-600 rounded-full mb-3"></div>
                     <div className="h-3 w-20 bg-slate-700 rounded-full"></div>
                   </div>
                 </div>
                 <div className="h-2 w-full bg-slate-700 rounded-full mb-4"></div>
                 <div className="h-2 w-5/6 bg-slate-700 rounded-full mb-4"></div>
                 <div className="h-2 w-4/6 bg-slate-700 rounded-full"></div>
                 <div className="absolute -right-5 -bottom-5 w-16 h-16 bg-[#ef4444] rounded-full border-[6px] border-[#0f172a] shadow-lg flex items-center justify-center animate-pulse">
                   <span className="text-white font-light text-sm tracking-wider">RONA</span>
                 </div>
               </div>
               {/* Floating elements */}
               <div className="absolute -left-12 top-1/2 bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                 <span className="text-slate-300 text-sm font-normal">Online</span>
               </div>
            </div>
            {/* Grid bg */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InNtYWxsR3JpZCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMTAgMEwwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjc21hbGxHcmlkKSIvPjxwYXRoIGQ9Ik00MCAwTDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          </div>
        </motion.div>

        {/* Product 2: Contact Center Monitoring */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-slate-100 group relative"
        >
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-white relative z-10">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center mb-8">
              <LayoutTemplate className="w-8 h-8 text-[#2b3c98]" />
            </div>
            <h2 className="text-4xl font-light font-display text-white mb-6 leading-tight tracking-tight">Contact Center Monitoring</h2>
            <div className="w-16 h-1 bg-[#2b3c98] mb-8 rounded-full"></div>
            <p className="text-slate-600 text-xl leading-relaxed mb-10 font-light">
              Full-stack visibility into your operational flows. Track SLA breaches, active queues, and system health status. Intervene instantly when thresholds are violated.
            </p>
            <ul className="space-y-5">
               <li className="flex items-center gap-4 text-slate-700 font-normal text-lg">
                 <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 text-sm flex-shrink-0">✓</div> Global Dashboard Visibility
               </li>
               <li className="flex items-center gap-4 text-slate-700 font-normal text-lg">
                 <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 text-sm flex-shrink-0">✓</div> SLA Violation Tracking
               </li>
               <li className="flex items-center gap-4 text-slate-700 font-normal text-lg">
                 <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 text-sm flex-shrink-0">✓</div> Historical Pulse Analytics
               </li>
            </ul>
          </div>
          <div className="lg:w-1/2 p-0 flex relative overflow-hidden bg-[#020617] border-l border-white/10 group">
             <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Monitoring Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity sepia-[.2] hue-rotate-[200deg] group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#020617]/80 to-[#2b3c98]/40"></div>
             </div>
             
             {/* Graph Simulation over Image */}
             <div className="relative z-10 w-full h-[400px] mt-auto border-b border-l border-white/20 flex items-end gap-6 pb-0 pl-6 justify-between ml-12 mb-12 mr-12 backdrop-blur-md bg-white/5 rounded-bl-[2rem] shadow-2xl">
                <div className="w-1/4 bg-gradient-to-t from-indigo-500/80 to-indigo-400/40 rounded-t-xl h-[40%] group-hover:h-[60%] transition-all duration-700 ease-out border border-white/10 border-b-0 backdrop-blur-sm"></div>
                
                <div className="w-1/4 bg-gradient-to-t from-blue-500/90 to-blue-400/50 rounded-t-xl h-[70%] group-hover:h-[85%] transition-all duration-700 ease-out relative border border-white/10 border-b-0 backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                   <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm font-normal py-1.5 px-4 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">Active</div>
                </div>
                
                <div className="w-1/4 bg-gradient-to-t from-indigo-400/70 to-indigo-300/30 rounded-t-xl h-[55%] group-hover:h-[45%] transition-all duration-700 ease-out border border-white/10 border-b-0 backdrop-blur-sm"></div>
                
                <div className="w-1/4 bg-gradient-to-t from-[#8fa1d5] to-indigo-300 rounded-t-xl h-[85%] group-hover:h-[100%] transition-all duration-700 ease-out relative border border-white/20 border-b-0 backdrop-blur-sm shadow-[0_0_40px_rgba(143,161,213,0.4)]">
                   <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-[#2b3c98] text-sm font-normal py-1.5 px-4 rounded-full whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">Peak Volume</div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Product 3: Custom Integration */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#020617] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_100px_rgba(30,27,75,0.15)] border border-slate-800 relative group"
        >
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative z-10 bg-gradient-to-br from-[#020617] to-transparent">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center mb-8">
              <Settings className="w-8 h-8 text-[#8fa1d5]" />
            </div>
            <h2 className="text-4xl font-light font-display text-white mb-6 leading-tight tracking-tight">Custom Integrations</h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-light">
              Off-the-shelf software rarely fits complex enterprise architectures. Celoxus specializes in building entirely custom middleware, complex CRM conduits, and unique automation widgets.
            </p>
            <ul className="space-y-5">
               <li className="flex items-center gap-4 text-slate-300 font-normal text-lg">
                 <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm flex-shrink-0">✓</div> Legacy Architecture Bridging
               </li>
               <li className="flex items-center gap-4 text-slate-300 font-normal text-lg">
                 <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm flex-shrink-0">✓</div> Third-party API Conduits
               </li>
               <li className="flex items-center gap-4 text-slate-300 font-normal text-lg">
                 <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm flex-shrink-0">✓</div> Enterprise CRM Synchronization
               </li>
            </ul>
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex items-center justify-center relative overflow-hidden border-l border-white/10">
             <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" alt="Global Network" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity sepia-[.2] hue-rotate-[200deg] group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/40 to-transparent"></div>
             
             {/* Abstract API / Integration Diagram */}
             <div className="relative w-full max-w-[400px] aspect-square z-10">
               {/* Center Node */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#020617] rounded-[2.5rem] z-20 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[6px] border-indigo-500/30 group-hover:scale-105 transition-transform duration-500 backdrop-blur-xl">
                 <Settings className="w-16 h-16 text-indigo-400 animate-[spin_6s_linear_infinite]" />
               </div>
               
               {/* Surrounding Nodes */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] flex items-center justify-center shadow-lg z-10 animate-[bounce_5s_infinite]">
                 <Cloud className="w-10 h-10 text-white" />
               </div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] flex items-center justify-center shadow-lg z-10 animate-[bounce_6s_infinite]">
                 <Database className="w-10 h-10 text-white" />
               </div>
               <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] flex items-center justify-center shadow-lg z-10 animate-[bounce_4s_infinite]">
                 <ListCheck className="w-10 h-10 text-white" />
               </div>
               
               {/* Connecting Rings */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border-4 border-dashed border-white/20 animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border-[3px] border-indigo-400/30 animate-[spin_10s_linear_infinite_reverse]"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const ProfessionalServices = () => {
  return (
    <div className="bg-[#020617] min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-40 pb-32 overflow-hidden bg-[#020617] border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2850&q=80" alt="Consulting" fetchPriority="high" className="w-full h-full object-cover opacity-20 sepia-[.3] hue-rotate-[200deg] mix-blend-luminosity" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-[#020617]/30"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#049fd9]/10 blur-[110px] rounded-full"></div>
        </div>
        <div className="absolute inset-x-0 top-0 hidden lg:block h-full opacity-30 pointer-events-auto z-0">
          <NetworkTopology />
        </div>
        <div className="px-6 max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-indigo-300 text-sm font-normal mb-8 uppercase tracking-widest">
              Professional Services
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light font-display text-white tracking-tight mb-8 leading-[1]">
              Enterprise intelligence, <br/>
              <span className="inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-[#8fa1d5]">architected with precision.</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              From seamless cloud calling architectures to AI-driven agent empowerment, we handle the complexity so you can focus on scale.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Breakdown */}
      <div className="py-32 relative bg-[#020617]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#049fd9]/30 to-transparent"></div>
        <div className="px-6 max-w-7xl mx-auto space-y-32">
          
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row gap-16 items-center group rounded-[3rem] p-8 hover:bg-white/[0.02] transition-colors relative" data-cursor="hover">
            <div className="flex-1 lg:pr-10">
              <h2 className="text-4xl lg:text-5xl font-light font-display text-white mb-6 tracking-tight">Cisco Calling Solution</h2>
              <div className="w-16 h-1 bg-indigo-600 mb-8 rounded-full"></div>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Transform your cloud-based calling experience. Enjoy the full power of the Webex Cloud and bid goodbye to the friction of legacy phone systems. The Webex Calling experience extends flawlessly across desktop and mobile devices.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600">✓</div> Global Reach Scalability
                </li>
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600">✓</div> Mobile Continuity
                </li>
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 text-indigo-600">✓</div> High-Availability Uptime
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[500px] aspect-[4/3] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden relative group-hover:-translate-y-2 transition-all duration-500 border border-white">
               <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80" alt="Meeting Collaboration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent mix-blend-multiply"></div>
               <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex gap-4 items-center shadow-xl">
                 <Headphones className="w-10 h-10 text-white" />
                 <div>
                   <div className="font-normal text-lg">Webex Calling</div>
                   <div className="text-white/80 font-light text-sm">Deployed seamlessly</div>
                 </div>
               </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center group rounded-[3rem] p-8 hover:bg-white/[0.02] transition-colors relative" data-cursor="hover">
            <div className="flex-1 lg:pl-10">
              <h2 className="text-4xl lg:text-5xl font-light font-display text-white mb-6 tracking-tight">Cisco Contact Center Solution</h2>
              <div className="w-16 h-1 bg-blue-600 mb-8 rounded-full"></div>
              <p className="text-xl text-slate-400 leading-relaxed mb-6">
                Deliver seamless Omnichannel experiences. We design, deploy, and manage Cisco Contact Centers that utilize AI-driven automation and real-time data ingestion to supercharge your agent performance and cut down Average Handle Time (AHT).
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">✓</div> Omnichannel Integration
                </li>
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">✓</div> AI-Driven Automation
                </li>
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">✓</div> Data-Driven Insights
                </li>
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">✓</div> Seamless APIs
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[500px] aspect-[4/3] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden relative group-hover:-translate-y-2 transition-all duration-500 border border-white">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Data Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent mix-blend-multiply"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <div className="w-24 h-24 rounded-[2rem] bg-white/10 border border-white/20 flex items-center justify-center z-10 backdrop-blur-xl shadow-2xl relative">
                   <div className="absolute inset-0 rounded-[2rem] border-2 border-indigo-400 animate-ping opacity-50"></div>
                   <Activity className="w-10 h-10 text-white" />
                 </div>
               </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col lg:flex-row gap-16 items-center group rounded-[3rem] p-8 hover:bg-white/[0.02] transition-colors relative" data-cursor="hover">
            <div className="flex-1 lg:pr-10">
              <h2 className="text-4xl lg:text-5xl font-light font-display text-white mb-6 tracking-tight">Cisco Cloud Applications</h2>
              <div className="w-16 h-1 bg-purple-600 mb-8 rounded-full"></div>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Transition smoothly to flexible, robust cloud-native applications. We provide end-to-end cloud migrations ensuring high availability, global data redundancy, and uncompromising security.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">✓</div> Zero-Downtime Migration
                </li>
                <li className="flex items-center gap-3 font-normal text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">✓</div> End-to-End Encryption
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[500px] aspect-[4/3] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden relative group-hover:-translate-y-2 transition-all duration-500 border border-white">
               <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80" alt="Cloud Network" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent mix-blend-multiply"></div>
               <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white flex gap-4 items-center shadow-xl">
                 <Cloud className="w-10 h-10 text-white" />
                 <div>
                   <div className="font-normal text-lg">Cloud Infrastructure</div>
                   <div className="text-white/80 font-light text-sm">Globally distributed</div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const About = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Celoxus",
    "description": "Founded in 2018, Celoxus is a full-stack engineering firm delivering zero-trust infrastructure to the Fortune 500.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Celoxus",
      "url": "https://celoxus.com",
      "knowsAbout": ["Enterprise Network Architecture", "Cisco Integrations", "CCIE", "Contact Center Infrastructure"]
    }
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen relative overflow-hidden">
      <Helmet>
        <title>About Celoxus | Enterprise Architects & Cisco Partners</title>
        <meta name="description" content="Discover Celoxus. We embed CCIE-certified architects within operations to engineer bespoke API conduits and zero-trust scaling for Fortune 500 contact centers." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#049fd9]/8 blur-[110px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#049fd9]/5 blur-[110px] rounded-full pointer-events-none z-0"></div>

      {/* Hero with full-bleed image background */}
      <div className="relative pt-40 pb-32 overflow-hidden border-b border-white/10 z-10 w-full mb-16">
         <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2850&q=80" alt="Corporate Architecture" fetchPriority="high" className="w-full h-full object-cover opacity-20 sepia-[.3] hue-rotate-[200deg] mix-blend-luminosity" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent"></div>
         </div>
         <div className="absolute right-0 top-0 hidden lg:block w-[50%] h-full opacity-50 pointer-events-auto z-0">
           <NetworkTopology />
         </div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 max-w-4xl">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 text-indigo-300 text-sm font-normal mb-8 uppercase tracking-widest bg-white/5 backdrop-blur-md">
              Who We Are
           </div>
           <h1 className="text-6xl md:text-8xl font-light font-display tracking-tighter mb-10 leading-[1]">
             Engineering the <br/> <span className="inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-[#8fa1d5]">Intelligence Age.</span>
           </h1>
           <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
             Founded in 2018, Celoxus was built on a singular premise: enterprise networks and contact centers require surgical precision, not off-the-shelf compromises. We've scaled from an elite Cisco architecture consultancy to a full-stack engineering firm delivering zero-trust infrastructure to the Fortune 500.
           </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pb-32">
        {/* Core Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
             <h2 className="text-4xl lg:text-5xl font-light font-display mb-6 tracking-tight text-white">Why Celoxus</h2>
             <div className="w-20 h-1 bg-indigo-500 mb-8 rounded-full"></div>
             <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
               We don't just deploy solutions; we embed our CCIE-certified architects within your operations. By understanding your exact ecosystem limitations, we engineer custom API conduits and automation workflows that generic SIs simply cannot map.
             </p>
             
             <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                <div>
                   <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 mb-4">
                     <Activity className="w-6 h-6 text-indigo-400" />
                   </div>
                   <h4 className="text-xl font-normal mb-2 text-white">Deep Capabilities</h4>
                   <p className="text-slate-400 text-sm">Advanced telemetry and AI integrations mapping the entire call lifecycle.</p>
                </div>
                <div>
                   <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 mb-4">
                     <Shield className="w-6 h-6 text-blue-400" />
                   </div>
                   <h4 className="text-xl font-normal mb-2 text-white">Sovereign Focus</h4>
                   <p className="text-slate-400 text-sm">Uncompromising security standards designed for highly-regulated environments.</p>
                </div>
             </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] -z-10 group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
            <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/5]">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Data Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 mix-blend-luminosity" loading="lazy" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>
               <div className="absolute inset-0 bg-[#049fd9]/8 mix-blend-color"></div>
               
               <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                 <div className="flex items-center gap-6 mb-6">
                   <div className="w-16 h-16 rounded-full bg-indigo-500 border-4 border-[#020617] flex items-center justify-center shadow-lg">
                     <Cloud className="w-8 h-8 text-white" />
                   </div>
                   <div>
                     <div className="text-3xl font-light font-display text-white">Scale Global</div>
                     <div className="text-indigo-200 font-light">Bespoke Cisco Architectures</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy Matrix Instead of Fake Team */}
        <div className="mb-32 border-t border-white/10 pt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light font-display tracking-tight text-white mb-4">Enterprise Engineering Matrix</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Strict focus areas where we deliver uncompromising Cisco architectural excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InteractiveCard className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-[#049fd9]/40 transition-colors">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#049fd9]/15 text-[#049fd9] rounded-xl flex items-center justify-center mb-6 border border-[#049fd9]/20">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">Cloud Center Mapping</h3>
                <div className="text-xs font-mono text-emerald-400 font-normal tracking-widest uppercase mb-4">Webex & UCCE</div>
                <p className="text-slate-400 leading-relaxed">Designing, provisioning, and scaling massive hybrid or full-cloud Contact Center topologies.</p>
              </div>
            </InteractiveCard>

            <InteractiveCard className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-[#049fd9]/40 transition-colors">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#049fd9]/15 text-[#049fd9] rounded-xl flex items-center justify-center mb-6 border border-[#049fd9]/20">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">Custom Automations</h3>
                <div className="text-xs font-mono text-[#049fd9] font-normal tracking-widest uppercase mb-4">Finesse / API / Dev</div>
                <p className="text-slate-400 leading-relaxed">Writing custom software, middleware, and notification systems that fill the gaps standard CC deployments have.</p>
              </div>
            </InteractiveCard>

            <InteractiveCard className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-[#049fd9]/40 transition-colors">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#049fd9]/15 text-[#049fd9] rounded-xl flex items-center justify-center mb-6 border border-[#049fd9]/20">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-normal text-white mb-2">Zero-Trust Backbone</h3>
                <div className="text-xs font-mono text-[#049fd9] font-normal tracking-widest uppercase mb-4">Sovereign Focus</div>
                <p className="text-slate-400 leading-relaxed">Guaranteeing data integrity through air-gapped or localized logic loops, strictly designed for highly regulated Fortune 500 networks.</p>
              </div>
            </InteractiveCard>
          </div>
        </div>

      </div>
    </div>
  );
};

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formspreeId = (import.meta as any).env.VITE_FORMSPREE_ID || 'dummy_id';
    
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setFormStatus('error');
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setFormStatus('error');
    }
  };

  return (
    <div className="pt-40 pb-32 px-6 flex items-center justify-center bg-[#020617] relative overflow-hidden min-h-screen">
      {/* Dark background effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 blur-[110px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-7xl relative z-10 bg-white rounded-[3rem] border border-slate-100 overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
        
        {/* Left Side: Dark & Visual with Background Image */}
        <div className="lg:w-5/12 bg-[#020617] p-12 lg:p-20 relative overflow-hidden flex flex-col justify-between group">
          {/* High-quality background image overlay */}
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Enterprise Architecture" className="w-full h-full object-cover opacity-20 sepia-[.3] hue-rotate-[200deg] mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" loading="lazy" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-[#020617]/50"></div>
          </div>
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#049fd9]/8 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 z-0"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2b3c98]/30 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3 z-0"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-normal mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Global Connectivity
            </div>
            <h1 className="text-4xl md:text-5xl font-light font-display text-white tracking-tight mb-6 leading-[1.1]">
              Architect Your <br/><span className="inline-block pb-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Evolution.</span>
            </h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-md">
              Reach out to our senior engineers and deployment specialists. We are ready to map out your custom integration or Cisco deployment.
            </p>
          </div>

          <div className="relative z-10 mt-20 space-y-6">
            <a href="tel:+14699944602" className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm font-normal text-slate-400 uppercase tracking-widest mb-1">Direct Line</p>
                <p className="text-2xl font-normal text-white">+1 469 994 4602</p>
              </div>
            </a>
            
            <a href="mailto:info@celoxus.com" className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-normal text-slate-400 uppercase tracking-widest mb-1">Technical Support</p>
                <p className="text-2xl font-normal text-white">info@celoxus.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:w-7/12 p-12 lg:p-20 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light font-display text-white mb-2">Initialize Project</h2>
            <p className="text-slate-500 font-light mb-12 text-lg">Complete the parameters below to route your request to the correct team.</p>
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              {formStatus === 'success' && (
                <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="font-normal text-sm">Message sent successfully! Our team will contact you shortly.</p>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="bg-red-50 text-red-800 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="font-normal text-sm">Oops! Something went wrong. Please check your configuration or try again.</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-normal text-slate-900">Name</label>
                  <input name="name" type="text" placeholder="John Doe" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-all font-light text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-normal text-slate-900">Phone</label>
                  <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-all font-light text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-normal text-slate-900">Email Address</label>
                <input name="email" type="email" placeholder="john@enterprise.com" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-all font-light text-slate-900 placeholder:text-slate-400" />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-normal text-slate-900">Select Services</label>
                <div className="relative border border-slate-200 rounded-xl overflow-hidden focus-within:border-indigo-600 focus-within:bg-white focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-600 transition-all bg-slate-50">
                  <select name="service" className="w-full px-5 py-4 bg-transparent outline-none font-light text-slate-900 appearance-none cursor-pointer" defaultValue="" required>
                    <option value="" disabled>Select an architectural domain...</option>
                    <option value="cisco-calling">Cisco Calling Solution</option>
                    <option value="cisco-contact">Cisco Contact Center Solution</option>
                    <option value="cisco-cloud">Cisco Cloud Applications</option>
                    <option value="products">Products & Custom Integration</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-normal text-slate-900">Message</label>
                <textarea name="message" rows={5} placeholder="Describe your current infrastructure constraints or goals..." required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-all font-light text-slate-900 placeholder:text-slate-400 resize-none"></textarea>
              </div>

              <button disabled={formStatus === 'submitting'} type="submit" className="w-full py-5 rounded-xl bg-slate-900 text-white font-normal text-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(79,70,229,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed">
                {formStatus === 'submitting' ? 'Submitting...' : 'Submit Request'} {formStatus !== 'submitting' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ... ArrowRight and other used icons exported from lucide-react above.
