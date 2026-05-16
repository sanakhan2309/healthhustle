import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, ChevronLeft } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { doctors } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    doctorId: '',
    date: '',
    time: '',
    patientName: '',
    patientEmail: '',
    symptoms: ''
  });
  const navigate = useNavigate();

  const handleComplete = () => {
    toast.success('Appointment Booked Successfully!');
    navigate('/dashboard');
  };

  const nextStep = () => {
    if (step === 1 && !formData.doctorId) return toast.error('Please select a doctor');
    if (step === 2 && (!formData.date || !formData.time)) return toast.error('Please select date and time');
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center flex-1 last:flex-none">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
              step >= s ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-800 text-slate-500'
            }`}>
              {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
            </div>
            {s < 3 && (
              <div className={`h-1 flex-1 mx-4 rounded-full ${
                step > s ? 'bg-emerald-500' : 'bg-slate-800'
              }`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Choose your Specialist</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctors.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setFormData({ ...formData, doctorId: doc.id })}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    formData.doctorId === doc.id 
                      ? 'border-emerald-500 bg-emerald-500/10' 
                      : 'border-slate-800 bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-xl" />
                    <div>
                      <h3 className="font-bold text-white">{doc.name}</h3>
                      <p className="text-sm text-emerald-500">{doc.specialty}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Select Date & Time</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-slate-400 font-bold uppercase text-xs">Pick Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-slate-400 font-bold uppercase text-xs">Available Slots</label>
                <div className="grid grid-cols-2 gap-3">
                  {['09:00 AM', '10:30 AM', '01:00 PM', '04:30 PM'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setFormData({ ...formData, time })}
                      className={`p-3 rounded-xl border-2 font-bold transition-all ${
                        formData.time === time 
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500' 
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Patient Details</h2>
            <div className="grid gap-6">
              <div className="space-y-2">
                <label className="text-slate-400 text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ali Khan"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-400 text-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="ali@example.com"
                  value={formData.patientEmail}
                  onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-400 text-sm">Describe Symptoms</label>
                <textarea
                  rows="4"
                  placeholder="What's bothering you?"
                  value={formData.symptoms}
                  onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between mt-12">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="flex items-center space-x-2 text-slate-400 font-bold hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        )}
        <button
          onClick={step === 3 ? handleComplete : nextStep}
          className="ml-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-2 transition-all shadow-xl shadow-emerald-600/20"
        >
          <span>{step === 3 ? 'Confirm Appointment' : 'Next Step'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;
