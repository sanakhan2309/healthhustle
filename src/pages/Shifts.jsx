import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Briefcase, 
  CheckCircle, 
  Plus
} from 'lucide-react';
import { usePortal } from '../context/PortalContext';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Shifts = () => {
  const { activePortal, shifts, claimShift, postShift } = usePortal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newShift, setNewShift] = useState({ facility: '', department: '', rate: '', date: '', time: '' });

  const handlePostShift = (e) => {
    e.preventDefault();
    postShift(newShift);
    setIsModalOpen(false);
    setNewShift({ facility: '', department: '', rate: '', date: '', time: '' });
    toast.success('Shift Posted Successfully!');
  };

  const handleClaim = (id) => {
    claimShift(id);
    toast.success('Shift Claimed! Check your schedule.');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter">
            {activePortal === 'facility' ? 'Shift' : 'Available'}{' '}
            <span className="text-emerald-500">Management</span>
          </h1>
          <p className="text-slate-500 font-medium">
            {activePortal === 'facility' ? 'Post and track open shifts for your facility.' : 'Browse and claim high-paying shifts in real-time.'}
          </p>
        </div>
        {activePortal === 'facility' && (
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-xl shadow-emerald-600/20 group"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            <span>Post New Shift</span>
          </button>
        )}
      </div>

      {/* Modal for Facility */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] w-full max-w-lg shadow-2xl"
          >
            <h2 className="text-3xl font-black text-white mb-8">Post a Shift</h2>
            <form onSubmit={handlePostShift} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Facility Name</label>
                <input required type="text" value={newShift.facility} onChange={e => setNewShift({...newShift, facility: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Department</label>
                  <input required type="text" value={newShift.department} onChange={e => setNewShift({...newShift, department: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Hourly Rate ($)</label>
                  <input required type="number" value={newShift.rate} onChange={e => setNewShift({...newShift, rate: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Date</label>
                  <input required type="date" value={newShift.date} onChange={e => setNewShift({...newShift, date: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Time</label>
                  <input required type="text" placeholder="07:00 PM" value={newShift.time} onChange={e => setNewShift({...newShift, time: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
                </div>
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-slate-800 text-white py-4 rounded-2xl font-bold">Cancel</button>
                <button type="submit" className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-bold">Post Shift</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Shift Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {shifts.map((shift, index) => (
          <motion.div
            key={shift.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-8 group hover:border-emerald-500/30 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full group-hover:bg-emerald-500/10 transition-all" />
            
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{shift.facility}</h3>
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{shift.department}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-emerald-500">${shift.rate}<span className="text-xs text-slate-500">/hr</span></p>
                <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${
                  shift.status === 'Open' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
                }`}>
                  {shift.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3 text-slate-400">
                <Calendar className="w-5 h-5 text-emerald-500/50" />
                <span className="text-sm font-bold">{shift.date}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Clock className="w-5 h-5 text-emerald-500/50" />
                <span className="text-sm font-bold">{shift.time}</span>
              </div>
            </div>

            {activePortal === 'professional' && shift.status === 'Open' && (
              <button 
                onClick={() => handleClaim(shift.id)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/10 flex items-center justify-center space-x-2"
              >
                <span>Claim Shift</span>
                <CheckCircle className="w-5 h-5" />
              </button>
            )}

            {shift.status === 'Claimed' && (
              <div className="w-full bg-slate-800 text-slate-400 py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-center border border-slate-700">
                Shift Claimed
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shifts;
