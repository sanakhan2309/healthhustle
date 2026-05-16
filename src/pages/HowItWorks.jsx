import { motion } from 'framer-motion';
import { 
  UserPlus, 
  CalendarCheck, 
  CreditCard, 
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { Link } from 'react-router-dom';

const StepCard = ({ number, title, desc, icon: Icon, isLast }) => (
  <div className="relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-slate-900/50 border border-slate-800 p-10 rounded-[3rem] relative z-10 hover:border-emerald-500/30 transition-all group"
    >
      <div className="absolute -top-6 -left-6 w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
        {number}
      </div>
      <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-500 transition-all duration-500">
        <Icon className="w-8 h-8 text-emerald-500 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-400 font-medium leading-relaxed">{desc}</p>
    </motion.div>
    {!isLast && (
      <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-full z-0 opacity-20">
        <ArrowRight className="w-12 h-12 text-emerald-500 animate-pulse" />
      </div>
    )}
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Profile",
      desc: "Facilities post shifts and Professionals create their verified clinical profiles in minutes.",
      icon: UserPlus
    },
    {
      number: "02",
      title: "Smart Matching",
      desc: "Our AI-driven system matches the right professional with the right facility instantly.",
      icon: Zap
    },
    {
      number: "03",
      title: "Claim & Work",
      desc: "Professionals claim shifts they want, and facilities get immediate coverage notification.",
      icon: CalendarCheck
    },
    {
      number: "04",
      title: "Fast Payments",
      desc: "Verified hours lead to next-day payments for professionals and simplified invoicing for facilities.",
      icon: CreditCard
    }
  ];

  return (
    <div className="bg-[#020203] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-4">Process Overview</p>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-tight">
            How <span className="text-emerald-500">HealthHustle</span> <br/> Works.
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Humara platform healthcare staffing ko simplified, transparent, aur fast banata hai.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-32">
          {steps.map((step, index) => (
            <StepCard 
              key={step.number} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>

        {/* Visual Callout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-slate-900/30 border border-slate-800 rounded-[4rem] p-12 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
              Smarter Technology, <br/> <span className="text-emerald-500">Better Patient Care.</span>
            </h2>
            <div className="space-y-6 mb-12">
              {[
                'Automated Credential Verification',
                'Real-time Shift Tracking',
                'In-app Messaging System',
                'Direct Deposit Payments'
              ].map(item => (
                <div key={item} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-white" />
                  </div>
                  <span className="text-slate-300 font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/apply" className="inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl shadow-emerald-600/20">
              <span>Get Started Now</span>
              <Zap className="w-5 h-5 fill-current" />
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden border border-slate-800 rotate-3 shadow-2xl group hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                alt="Tech Innovation" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
