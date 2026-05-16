import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Plus, 
  MoreVertical, 
  Mail, 
  Phone, 
  Shield, 
  CheckCircle2,
  Clock
} from 'lucide-react';
import { facilityStaff as initialStaff } from '../../data/enterpriseMock';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const StaffManagement = () => {
  const [staff, setStaff] = useState(initialStaff);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({ name: '', specialty: '', status: 'Available' });

  const handleAddStaff = (e) => {
    e.preventDefault();
    const id = staff.length + 1;
    setStaff([...staff, { id, ...newStaff }]);
    setIsModalOpen(false);
    setNewStaff({ name: '', specialty: '', status: 'Available' });
    toast.success(`${newStaff.name} onboarded successfully!`);
  };

  const deleteStaff = (id) => {
    setStaff(staff.filter(s => s.id !== id));
    toast.error('Staff record removed');
  };

  const filteredStaff = staff.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter">Staff <span className="text-emerald-500">Management</span></h1>
          <p className="text-slate-500 font-medium">Manage healthcare professionals, schedules, and access levels.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all shadow-xl shadow-emerald-600/20 group"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          <span>Add New Professional</span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-slate-800 p-10 rounded-[3rem] w-full max-w-lg shadow-2xl"
          >
            <h2 className="text-3xl font-black text-white mb-8">Add Professional</h2>
            <form onSubmit={handleAddStaff} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                <input required type="text" value={newStaff.name} onChange={e => setNewStaff({...newStaff, name: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Specialty</label>
                <input required type="text" value={newStaff.specialty} onChange={e => setNewStaff({...newStaff, specialty: e.target.value})} className="w-full bg-[#020203] border border-slate-800 rounded-xl p-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none" />
              </div>
              <div className="flex gap-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-slate-800 text-white py-4 rounded-2xl font-bold">Cancel</button>
                <button type="submit" className="flex-1 bg-emerald-600 text-white py-4 rounded-2xl font-bold">Add Staff</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-emerald-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search by name, specialty, or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((staff) => (
          <motion.div
            key={staff.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-8 relative group hover:border-emerald-500/30 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full group-hover:bg-emerald-500/10 transition-all" />
            
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              <button 
                onClick={() => deleteStaff(staff.id)}
                className="p-2 text-slate-500 hover:text-rose-500 transition-colors"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-500 transition-colors">{staff.name}</h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{staff.specialty}</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-slate-400">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold">Access Level: Full Admin</span>
              </div>
              <div className={`flex items-center space-x-3 ${staff.status === 'On Duty' ? 'text-emerald-500' : 'text-slate-500'}`}>
                {staff.status === 'On Duty' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                <span className="text-xs font-black uppercase tracking-widest">{staff.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center space-x-2 bg-slate-800/50 hover:bg-slate-800 p-3 rounded-xl transition-all border border-slate-700/50">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold">Email</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-slate-800/50 hover:bg-slate-800 p-3 rounded-xl transition-all border border-slate-700/50">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold">Call</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StaffManagement;
