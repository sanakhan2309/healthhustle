import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message Sent! We will get back to you shortly.');
  };

  return (
    <div className="min-h-screen bg-[#020203] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-emerald-500 font-black uppercase tracking-[0.3em] text-xs mb-4">Contact Us</p>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
            Get In <span className="text-emerald-500">Touch.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Have questions about our staffing solutions or talent pool? Our team is here to help you 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            { title: 'Email Us', info: 'info@healthhustle.com', sub: 'Support 24/7', icon: Mail },
            { title: 'Call Us', info: '(484) 254-4877', sub: 'Mon-Fri 9am-6pm', icon: Phone },
            { title: 'Visit Us', info: '1042 Evans St, PA 18015', sub: 'Suite 105', icon: MapPin }
          ].map((item) => (
            <div key={item.title} className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] text-center group hover:border-emerald-500/20 transition-all">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-white font-black text-xl mb-2">{item.title}</h3>
              <p className="text-white font-bold mb-1">{item.info}</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 border border-slate-800 p-12 rounded-[4rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full" />
            <h2 className="text-3xl font-black text-white mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full bg-[#020203] border border-slate-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input required type="email" className="w-full bg-[#020203] border border-slate-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-[#020203] border border-slate-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none appearance-none">
                  <option>Staffing Inquiry</option>
                  <option>Career Opportunities</option>
                  <option>Technical Support</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Message</label>
                <textarea required rows="6" className="w-full bg-[#020203] border border-slate-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" placeholder="How can we help you today?"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center space-x-3"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: 'How fast can you fill a shift?', a: 'Most shifts are filled within 2-4 hours through our automated platform.' },
                  { q: 'What professions do you cover?', a: 'We cover RNs, LPNs, CNAs, Med Techs, Physicians, and more.' },
                  { q: 'Is the service available nationwide?', a: 'Yes, we are currently active and compliant in all 50 states.' }
                ].map((faq) => (
                  <div key={faq.q} className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl group hover:border-emerald-500/20 transition-all">
                    <h4 className="text-white font-bold mb-2 flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-emerald-500" />
                      <span>{faq.q}</span>
                    </h4>
                    <p className="text-slate-500 text-sm font-medium">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-600 p-8 rounded-[3rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px] rounded-full" />
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-black">24/7 Response Team</h3>
              </div>
              <p className="font-medium opacity-90 leading-relaxed">
                Our emergency staffing coordinators are available round the clock to assist with any urgent requirements.
              </p>
            </div>
          </div>
        </div>

        {/* New Visual Map/Office Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-[4rem] overflow-hidden border border-slate-800 h-[400px] relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
            alt="Our Office" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
          <div className="absolute bottom-10 left-10 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-white font-black text-xl mb-2">Visit our Headquarters</h3>
            <p className="text-slate-400 font-medium">Open for in-person consultations by appointment.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
