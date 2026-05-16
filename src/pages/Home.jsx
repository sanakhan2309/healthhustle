import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Smartphone, 
  Apple, 
  PlayCircle,
  Star,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/enterpriseMock';

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Nursing Director",
      text: "HealthHustle helped us fill a critical nurse vacancy within 24 hours. Professional, reliable, and caring.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Mark Thompson",
      role: "HR Manager",
      text: "Our long-term care facility has relied on HealthHustle for years. Their CNAs and Med Techs are top quality.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#020203]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">Now active in 50 states</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1] mb-8 tracking-tighter">
              Healthcare <span className="text-emerald-500">Staffing</span> You Can Trust.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-xl font-medium">
              Connecting facilities with compassionate, qualified professionals—where and when care matters most. Experience the future of staffing.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                to="/apply"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center space-x-3 transition-all shadow-2xl shadow-emerald-600/20 group"
              >
                <span>Request Staff</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/apply"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center transition-all border border-slate-800"
              >
                Join Our Talent Pool
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop" 
                alt="Healthcare Professionals" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent" />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-10 -left-10 bg-[#0f172a] border border-slate-800 p-8 rounded-[2rem] shadow-2xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-2xl font-black text-white">98%</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Shift Fill Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-900 bg-[#09090b]/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Shifts', value: '1,200+', icon: Calendar, color: 'text-emerald-500' },
            { label: 'Verified Staff', value: '15,000+', icon: Users, color: 'text-blue-500' },
            { label: 'Compliance', value: '100%', icon: CheckCircle2, color: 'text-indigo-500' },
            { label: 'Coverage', value: '50 States', icon: ShieldCheck, color: 'text-cyan-500' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className={`w-12 h-12 ${stat.color} bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/5 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-3xl font-black text-white mb-1 tracking-tighter">{stat.value}</h4>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-4">Who We Are</p>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                  Your Trusted Partner in <br/> Healthcare Staffing
                </h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                At HealthHustle, we provide licensed, dependable healthcare professionals to hospitals, long-term care facilities and clinics. Whether you’re short-staffed or scaling up, we’re here to help you maintain excellence in patient care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  '100% healthcare focused',
                  'Stringent vetting & onboarding',
                  'Flexible: per diem, travel, contract',
                  'Compliant with state & federal'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-white" />
                    </div>
                    <span className="text-slate-300 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="bg-white text-black px-10 py-5 rounded-2xl font-black hover:bg-emerald-500 hover:text-white transition-all">
                Learn More About Us
              </button>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-12 rounded-[4rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-all" />
              <h3 className="text-2xl font-black text-white mb-8">We Place Professionals Fast</h3>
              <div className="space-y-4">
                {['RNs', 'LPNs', 'CNAs', 'Med Techs', 'DCWs', 'Physicians'].map((role) => (
                  <div key={role} className="flex items-center justify-between p-4 bg-[#020203] border border-slate-800 rounded-2xl group-hover:border-emerald-500/30 transition-all">
                    <span className="font-black text-white">{role}</span>
                    <span className="text-emerald-500 text-xs font-black uppercase tracking-widest">Available Now</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-emerald-600 rounded-[4rem] mx-4 my-20 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 blur-[150px] -z-10 rounded-full group-hover:bg-white/20 transition-all" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-widest">Get The App</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[1] mb-8 tracking-tighter">
              Smarter Staffing at <br/> Your Fingertips
            </h2>
            <p className="text-emerald-50/80 text-xl mb-12 font-medium leading-relaxed">
              Facilities can instantly post open shifts, and qualified healthcare professionals can claim them in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center space-x-3 hover:scale-105 transition-transform">
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase opacity-60 leading-none">Download on the</p>
                  <p className="text-xl font-black leading-none">App Store</p>
                </div>
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center space-x-3 hover:scale-105 transition-transform">
                <PlayCircle className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase opacity-60 leading-none">GET IT ON</p>
                  <p className="text-xl font-black leading-none">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[3rem] rotate-6 group-hover:rotate-0 transition-transform duration-700">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <p className="text-black font-black mb-2">New Shift Available</p>
                  <p className="text-slate-500 text-sm">Memorial Hospital • Emergency Room</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-emerald-600 font-black">$55/hr</span>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-black uppercase">Claim Now</button>
                  </div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="text-white font-black mb-2">My Schedule</p>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(i => <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${i===3 ? 'bg-white text-emerald-600' : 'bg-white/10'}`}>{i}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">What They Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -10 }}
                className="bg-slate-900 border border-slate-800 p-12 rounded-[3rem] relative"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl" />
                  <div>
                    <h4 className="text-xl font-black text-white">{t.name}</h4>
                    <p className="text-emerald-500 text-sm font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-xl italic font-medium leading-relaxed">"{t.text}"</p>
                <div className="flex space-x-1 mt-8">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-20">
            <div>
              <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-4">Blog & News</p>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Latest Updates</h2>
            </div>
            <button className="text-white font-black flex items-center space-x-2 hover:text-emerald-500 transition-colors group">
              <span>View All Articles</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {blogPosts.slice(0, 2).map((blog) => (
              <motion.div
                key={blog.title}
                whileHover={{ x: 10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video mb-8 rounded-[2rem] overflow-hidden border border-slate-800">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex items-center space-x-4 text-slate-500 text-xs font-black uppercase tracking-widest mb-6">
                  <span className="text-emerald-500">{blog.category}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-emerald-500 transition-colors">{blog.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium mb-6">{blog.excerpt}</p>
                <div className="flex items-center space-x-2 text-white font-black group-hover:translate-x-2 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-gradient-to-b from-[#020203] to-[#09090b]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter">Ready to Staff <span className="text-emerald-500">Smarter?</span></h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/apply" className="w-full sm:w-auto bg-emerald-600 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/20">Request Staff</Link>
            <Link to="/apply" className="w-full sm:w-auto bg-white text-black px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-slate-200 transition-all">Join Talent Pool</Link>
          </div>
          
          <footer className="mt-32 pt-20 border-t border-slate-800 grid md:grid-cols-3 gap-12 text-left">
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <Activity className="w-8 h-8 text-emerald-500" />
                <span className="text-2xl font-black text-white tracking-tighter">HealthHustle</span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">
                Comprehensive staffing solutions tailored to the unique needs of healthcare facilities and professionals.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-black uppercase tracking-widest text-sm">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-400 font-medium">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  <span>1042 Evans Street, Bethlehem, PA 18015</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 font-medium">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  <span>(484) 254-4877</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 font-medium">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  <span>info@healthhustle.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-black uppercase tracking-widest text-sm">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                <Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link>
                <Link to="/apply" className="hover:text-emerald-500 transition-colors">Apply</Link>
                <Link to="/facility" className="hover:text-emerald-500 transition-colors">Facility</Link>
                <Link to="/professional" className="hover:text-emerald-500 transition-colors">Professional</Link>
                <Link to="/messages" className="hover:text-emerald-500 transition-colors">Chat</Link>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Home;
