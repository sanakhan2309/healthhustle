import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Users, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Heart,
  Briefcase,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, desc, icon: Icon, features }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-slate-900/30 border border-slate-800 p-10 rounded-[3rem] group hover:border-emerald-500/30 transition-all relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full group-hover:bg-emerald-500/10 transition-all" />
    <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform">
      <Icon className="w-8 h-8 text-emerald-500" />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-400 font-medium leading-relaxed mb-8">{desc}</p>
    <div className="space-y-3 mb-8">
      {features.map(f => (
        <div key={f} className="flex items-center space-x-2 text-slate-500 group-hover:text-slate-300 transition-colors">
          <ChevronRight className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-bold">{f}</span>
        </div>
      ))}
    </div>
    <button className="flex items-center space-x-2 text-emerald-500 font-black text-xs uppercase tracking-[0.2em] group/btn">
      <span>Learn More</span>
      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
    </button>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "Acute Care Staffing",
      desc: "Specialized RNs and LPNs for hospitals and urgent care centers.",
      icon: Stethoscope,
      features: ["ER Specialists", "ICU/CCU Nurses", "Surgical Teams"]
    },
    {
      title: "Long-Term Care",
      desc: "Compassionate CNAs and Med Techs for skilled nursing facilities.",
      icon: Heart,
      features: ["Memory Care Support", "Daily Living Assist", "Medication Admin"]
    },
    {
      title: "Enterprise Solutions",
      desc: "Full-cycle workforce management for large healthcare networks.",
      icon: Users,
      features: ["Vendor Management", "Payroll Integration", "Compliance Tracking"]
    },
    {
      title: "Emergency Response",
      desc: "Rapid deployment of staff for crisis and high-demand situations.",
      icon: Activity,
      features: ["24/7 Availability", "Rapid Onboarding", "All-State Coverage"]
    }
  ];

  return (
    <div className="bg-[#020203] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-4">What We Offer</p>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-tight">
            Comprehensive <span className="text-emerald-500">Staffing</span> <br/> Solutions.
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Humara maqsad har healthcare facility ko unke unique requirements ke mutabiq best talent provide karna hai.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map(s => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* Feature Grid with Images */}
        <div className="space-y-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-[4rem] overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800" 
                  alt="Quality Care" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl">
                <ShieldCheck className="w-12 h-12 text-emerald-500 mb-4" />
                <p className="text-2xl font-black text-white">Vetted</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">100% Compliance</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Quality You Can <span className="text-emerald-500">Depend On.</span></h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                Har professional jo hamari talent pool mein shamil hota hai, aik sakht screening process se guzarta hai. Is mein license verification, background checks, aur competency tests shamil hain.
              </p>
              <Link to="/apply" className="inline-flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-2xl font-black hover:bg-emerald-500 hover:text-white transition-all">
                <span>Request Staff Now</span>
                <Briefcase className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Technology-Driven <span className="text-emerald-500">Efficiency.</span></h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed">
                Hamara AI platform shifts ko fill karne ka waqt 70% tak kam kar deta hai. Facilities ko real-time updates milti hain aur professionals ko apni marzi ke mutabiq kaam milta hai.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
                  <Clock className="w-8 h-8 text-emerald-500 mb-3" />
                  <p className="text-white font-black">2-Hour</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Average Fill Time</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
                  <Activity className="w-8 h-8 text-emerald-500 mb-3" />
                  <p className="text-white font-black">Live</p>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Shift Monitoring</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden border border-slate-800 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800" 
                  alt="Efficient Staffing" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
