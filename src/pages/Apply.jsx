import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  UserCircle2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ChevronLeft,
  Mail,
  Phone,
  Briefcase
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const [type, setType] = useState(null); // 'facility' or 'professional'
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleComplete = (e) => {
    e.preventDefault();
    toast.success(type === 'facility' ? 'Staffing Request Sent!' : 'Application Submitted!');
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <AnimatePresence mode="wait">
        {!type ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Ready to <span className="text-emerald-500">Connect?</span>
            </h1>
            <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto font-medium">
              Whether you're a healthcare facility looking for quality professionals or a licensed pro ready for your next opportunity, we have the right fit.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <button
                onClick={() => setType('facility')}
                className="group p-10 bg-slate-900 border border-slate-800 rounded-[3rem] text-left hover:border-emerald-500/50 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full group-hover:bg-emerald-500/10 transition-all" />
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Request Staffing</h3>
                <p className="text-slate-400 mb-8 font-medium">Post open shifts and find qualified professionals for your facility instantly.</p>
                <div className="flex items-center space-x-2 text-emerald-500 font-black">
                  <span>Start Request</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>

              <button
                onClick={() => setType('professional')}
                className="group p-10 bg-slate-900 border border-slate-800 rounded-[3rem] text-left hover:border-indigo-500/50 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px] rounded-full group-hover:bg-indigo-500/10 transition-all" />
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <UserCircle2 className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Join Talent Pool</h3>
                <p className="text-slate-400 mb-8 font-medium">Find flexible shifts, track your earnings, and grow your healthcare career.</p>
                <div className="flex items-center space-x-2 text-indigo-500 font-black">
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <button
              onClick={() => { setType(null); setStep(1); }}
              className="flex items-center space-x-2 text-slate-500 hover:text-white transition-colors mb-12 font-black uppercase tracking-widest text-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Selection</span>
            </button>

            <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-12 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full -z-10 ${type === 'facility' ? 'bg-emerald-500/5' : 'bg-indigo-500/5'}`} />
              
              <div className="mb-12">
                <h2 className="text-4xl font-black text-white mb-2">
                  {type === 'facility' ? 'Staffing Request' : 'Join Talent Pool'}
                </h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Step {step} of 2</p>
              </div>

              <form onSubmit={handleComplete} className="space-y-8">
                {step === 1 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest">
                        {type === 'facility' ? 'Facility Name' : 'Full Name'}
                      </label>
                      <input required type="text" className="w-full bg-[#020203] border border-slate-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input required type="email" className="w-full bg-[#020203] border border-slate-800 rounded-2xl pl-12 pr-5 py-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input required type="tel" className="w-full bg-[#020203] border border-slate-800 rounded-2xl pl-12 pr-5 py-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    {type === 'facility' ? (
                      <>
                        <div className="space-y-2">
                          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Staffing Needs</label>
                          <div className="grid grid-cols-2 gap-3">
                            {['RNs', 'LPNs', 'CNAs', 'Other'].map(r => (
                              <button key={r} type="button" className="p-4 bg-[#020203] border border-slate-800 rounded-xl text-sm font-bold text-slate-400 hover:border-emerald-500 transition-all">{r}</button>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Urgency</label>
                          <select className="w-full bg-[#020203] border border-slate-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none appearance-none">
                            <option>Immediate (24 hours)</option>
                            <option>This Week</option>
                            <option>Future Planning</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Your Profession</label>
                          <div className="relative">
                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input required type="text" placeholder="e.g. Registered Nurse" className="w-full bg-[#020203] border border-slate-800 rounded-2xl pl-12 pr-5 py-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Experience</label>
                          <select className="w-full bg-[#020203] border border-slate-800 rounded-2xl p-5 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none appearance-none">
                            <option>1-3 Years</option>
                            <option>3-5 Years</option>
                            <option>5+ Years</option>
                          </select>
                        </div>
                      </>
                    )}
                    <button
                      type="submit"
                      className={`w-full text-white py-5 rounded-2xl font-black text-lg transition-all shadow-2xl ${type === 'facility' ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'}`}
                    >
                      Complete Application
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full text-slate-500 font-bold hover:text-white transition-colors text-sm"
                    >
                      Go Back to Step 1
                    </button>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Benefits Overlay */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {[
                { icon: ShieldCheck, text: 'Vetted Pros' },
                { icon: Clock, text: 'Rapid Support' },
                { icon: CheckCircle2, text: 'Compliant' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-slate-900/50 border border-slate-800 rounded-3xl">
                  <item.icon className={`w-6 h-6 mb-3 ${type === 'facility' ? 'text-emerald-500' : 'text-indigo-500'}`} />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Apply;
