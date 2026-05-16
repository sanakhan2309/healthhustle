import { motion } from 'framer-motion';
import { ShieldCheck, Users, Target, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#020203] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-4">Our Story</p>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
            Empowering <span className="text-emerald-500">Healthcare</span> <br/> Through Innovation.
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            HealthHustle is more than just a staffing platform. We are a bridge between world-class healthcare facilities and the dedicated professionals who make care possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-[3rem] rotate-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Our Mission" 
                className="w-full h-auto rounded-[2.5rem]"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-8 rounded-[2rem] shadow-2xl z-10">
              <p className="text-4xl font-black text-white mb-1">12+</p>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-black text-white tracking-tight">Our Mission & Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We started with a simple goal: to eliminate the staffing headaches that healthcare facilities face every day. Today, we use cutting-edge technology to match the right talent with the right opportunity in record time.
            </p>
            <div className="grid gap-6">
              {[
                { title: 'Quality First', desc: 'Every professional in our pool undergoes a rigorous 5-step vetting process.', icon: Award },
                { title: 'Reliability', desc: 'We maintain a 99.8% shift fulfillment rate across all 50 states.', icon: ShieldCheck },
                { title: 'Innovation', desc: 'Our AI-driven matching engine connects clinicians to shifts in seconds.', icon: Target }
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4 p-6 bg-slate-900/50 border border-slate-800 rounded-3xl group hover:border-emerald-500/30 transition-all">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-black mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-32">
          {[
            { label: 'Facilities Served', value: '2,500+', icon: Users },
            { label: 'Active Professionals', value: '15,000+', icon: Users },
            { label: 'Shifts Managed', value: '1M+', icon: CheckCircle2 },
            { label: 'States Active', value: '50', icon: ShieldCheck }
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] text-center group hover:border-emerald-500/20 transition-all">
              <h3 className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">{stat.value}</h3>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* New Visual Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative h-[500px] rounded-[4rem] overflow-hidden border border-slate-800 mb-32 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop" 
            alt="Healthcare Network" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020203] via-[#020203]/40 to-transparent flex items-center px-12 md:px-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Connecting Care <br/> <span className="text-emerald-500">Across the Nation.</span></h2>
              <p className="text-slate-200 text-lg font-medium leading-relaxed mb-8">
                Humara network 5,000 se ziyaada facilities aur 50,000 se ziyaada healthcare professionals par mushtamil hai. Hum har din hazaron shifts ko manage karte hain taake patient care kabhi mutasir na ho.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
